<template>
  <div class="table">
    <div class="container">
      <div class="handle-box">
        <el-button type="primary" @click="autoVisible=true">添加自动补助</el-button>
      </div>
      <div class="handle-box">
        <span>组织架构</span>
        <el-cascader :options="deptAll" v-model="deptIds" :filterable="true" @change="deptChange"></el-cascader>
        <el-button type="primary" @click="reset()">重置</el-button>
      </div>
      <el-table :data="autoSubsidyData" border class="table" ref="multipleTable">
        <el-table-column prop="deptName" align="center" label="组织架构" sortable></el-table-column>
        <el-table-column prop="subsidyTime" align="center" label="补助时间"></el-table-column>
        <el-table-column prop="subsidyAmount" align="center" label="补助金额"></el-table-column>
        <el-table-column label="是否停止补助" align="center" prop="subsidyStatus">
          <!-- <template slot-scope="scope">
            <el-button
              type="text"
              class="red"
              v-if="!scope.row.subsidyStatus"
              @click="stop(scope.row)"
            >停止补助</el-button>
            <el-button type="text" class="red" v-if="scope.row.subsidyStatus">已停止补助</el-button>
          </template>-->
          <template slot-scope="scope">
            <el-switch
              v-model="scope.row.subsidyStatus"
              :on-value="0"
              :off-value="1"
              active-color="#ff4949"
              inactive-color="#13ce66"
              @change="onOrOff(scope.row)"
            ></el-switch>
          </template>
        </el-table-column>
        <el-table-column label="操作" align="center">
          <template slot-scope="scope">
            <el-button type="text" icon="el-icon-share" class="red" @click="detail(scope.row)">查看</el-button>
            <!-- @click="handleDetail(scope.$index, scope.row)" -->
            <el-button type="text" icon="el-icon-edit" @click="edit(scope.row)">修改</el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="pagination">
        <el-pagination
          background
          @current-change="handleCurrentChange"
          layout="prev, pager, next"
          :total="total"
        ></el-pagination>
        <el-dialog title="自动补助" :visible.sync="autoVisible" width="30%">
          <el-form ref="form" :model="addAutoSubsidyRuleDto" label-width="100px">
            <el-form-item label="组织架构">
              <el-cascader
                :options="deptAll"
                v-model="addAutoSubsidyRuleDto.deptIds"
                :filterable="true"
              ></el-cascader>
            </el-form-item>
            <el-form-item label="时间">
              <el-select v-model="addAutoSubsidyRuleDto.subsidyTime" placeholder="请选择">
                <el-option v-for="item in times" :key="item" :value="item"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="补助金额">
              <el-input-number
                v-model="addAutoSubsidyRuleDto.subsidyAmount"
                :min="0"
                :max="99999"
                :step="100"
              ></el-input-number>
            </el-form-item>
          </el-form>
          <span slot="footer" class="dialog-footer">
            <el-button @click="autoVisible = false">取 消</el-button>
            <el-button type="primary" @click="addAutomaticSubsidy">确 定</el-button>
          </span>
        </el-dialog>
        <el-dialog title="补助详细信息" :visible.sync="detailVisible" width="60%">
          <el-row :gutter="20">
            <el-col :span="6">
              <div class="grid-content bg-purple">组织架构:{{detailData.deptName}}</div>
            </el-col>
            <el-col :span="6">
              <div class="grid-content bg-purple">补助时间:{{detailData.subsidyTime}}</div>
            </el-col>
            <el-col :span="6">
              <div class="grid-content bg-purple">补助金额:{{detailData.subsidyAmount}}</div>
            </el-col>
          </el-row>
          <el-table :data="detailData.subsidyRecords" height="250" border style="width: 100%">
            <el-table-column prop="userName" label="姓名"></el-table-column>
            <el-table-column prop="userCardNum" label="身份证号" width="180"></el-table-column>
            <el-table-column prop="cardSerialNo" label="用户卡编号"></el-table-column>
            <el-table-column prop="subsidyAmount" label="补助金额"></el-table-column>
          </el-table>
          <span slot="footer" class="dialog-footer">
            <el-button @click="detailVisible = false">确定</el-button>
          </span>
        </el-dialog>
        <el-dialog title="修改自动补助" :visible.sync="editVisible" width="30%">
          <el-form ref="form" :model="dto" label-width="100px">
            <el-form-item label="补助金额">
              <el-input-number v-model="dto.subsidyAmount" :min="0" :max="99999" :step="100"></el-input-number>
            </el-form-item>
          </el-form>

          <span slot="footer" class="dialog-footer">
            <el-button @click="editVisible = false">取 消</el-button>
            <el-button type="primary" @click="updateSubsidyRule">确 定</el-button>
          </span>
        </el-dialog>
      </div>
    </div>
  </div>
</template>
<script>
import vZz from "../../common/zuzhijiagou";
export default {
  name: "auto-subsidy",
  data() {
    return {
      value2: true,
      deptAll: [],
      deptIds: [],
      autoSubsidyData: [],
      detailVisible: false,
      currentChange: 0,
      total: 0,
      autoVisible: false,
      times: Array.from(Array(28), (v, k) => k + 1),
      addAutoSubsidyRuleDto: {
        deptIds: [],
        subsidyTime: 1,
        subsidyAmount: 0
      },
      detailData: {
        deptName: "",
        subsidyTime: "",
        subsidyAmount: 0,
        subsidyRecords: []
      },
      updateSubsidyRuleDto: {
        subsidyAmount: 0
      },
      editVisible: false,
      dto: {
        id: 0,
        subsidyAmount: 0
      }
    };
  },
  mounted() {
    this.getDeptAll();
    this.searchAutoSubsidy();
  },
  methods: {
    /**
     * 添加自动补助
     */
    addAutomaticSubsidy() {
      if (this.validation()) {
        this.$axios
          .post("/api/subsidyRule/autoSubsidyRule", {
            deptId: this.addAutoSubsidyRuleDto.deptIds[1],
            subsidyAmount: this.addAutoSubsidyRuleDto.subsidyAmount,
            subsidyTime: this.addAutoSubsidyRuleDto.subsidyTime
          })
          .then(({ data }) => {
            if (data.code == 200) {
              this.$message.success(data);
              this.autoVisible = false;
              this.addAutoSubsidyRuleDto.deptIds = [];
              this.addAutoSubsidyRuleDto.subsidyAmount = 0;
              this.addAutoSubsidyRuleDto.subsidyTime = 1;
            } else {
              this.$notify.error({
                title: "错误",
                message: data.messahe
              });
            }
          });
      }
    },
    /**
     * 修改自动补助规则弹出
     */
    edit(row) {
      if (row.subsidyStatus) {
        this.$notify.error({
          title: "错误",
          message: "当前为关闭状态，无法修改"
        });
      } else {
        this.editVisible = true;
        this.dto.id = row.id;
        this.dto.subsidyAmount = row.subsidyAmount;
      }
    },
    /**
     * 修改自动补助规则
     */
    updateSubsidyRule() {
      if (this.dto.subsidyAmount > 0) {
        this.$axios
          .post("/api/subsidyRule/updateSubsidyRule", this.dto)
          .then(({ data }) => {
            if (data.code == 200) {
              this.$message.success("修改成功");
            } else {
              this.$message.error(data.message);
            }
          });
      }
    },
    validation() {
      if (
        this.addAutoSubsidyRuleDto.deptIds == null ||
        this.addAutoSubsidyRuleDto.deptIds == "" ||
        this.addAutoSubsidyRuleDto.deptIds.length < 2
      ) {
        this.$notify.error({
          title: "错误",
          message: "请选择组织架构并且必须选择到二级"
        });
        return false;
      }
      if (
        this.addAutoSubsidyRuleDto.subsidyAmount == null ||
        this.addAutoSubsidyRuleDto.subsidyAmount == "" ||
        this.addAutoSubsidyRuleDto.subsidyAmount == 0
      ) {
        this.$notify.error({
          title: "错误",
          message: "请输入补助金额"
        });
        return false;
      }
      return true;
    },

    /**
     * 组织架构变动后查询
     */
    deptChange() {
      this.searchAutoSubsidy();
    },
    /**
     * 查询组织架构
     * */
    getDeptAll() {
      this.$axios.post("/api/dept/getDeptAll", {}).then(({ data }) => {
        const result = data.data;
        this.deptAll = result;
      });
    },
    /**
     * 查询自动补助列表
     */
    searchAutoSubsidy() {
      console.log(this.deptIds[this.deptIds.length - 1]);
      this.$axios
        .post("/api/subsidyRule/findByDeptIdPage", {
          current: this.currentChange,
          query: {
            deptId: this.deptIds[this.deptIds.length - 1]
          },
          size: 10
        })
        .then(({ data }) => {
          const result = data.data;
          this.autoSubsidyData = result.records || [];
          this.autoSubsidyData.forEach(e => {
            if (e.subsidyStatus == 1) {
              e.subsidyStatus = true;
            } else {
              e.subsidyStatus = false;
            }
          });
          this.total = result.total;
        });
    },
    /**
     * 停止补助
     */
    onOrOff(row) {
      var status = 0;
      if (row.subsidyStatus) {
        status = 1;
      }
      this.$axios
        .post("/api/subsidyRule/revStopSubsidyRule", {
          id: row.id,
          subsidyStatus: status
        })
        .then(({ data }) => {
          if (data.code == 200) {
            this.$message.success("设置成功");
          } else {
            this.$notify({
              title: "警告",
              message: "设置失败:" + data.message,
              type: "warning"
            });
          }
        });
    },
    /**
     * 重置查询
     */
    reset() {
      this.deptIds = [];
      this.searchAutoSubsidy();
    },
    /**
     * 查看自动补助详情
     */
    detail(row) {
      this.$axios
        .post("/api/subsidy-record/searchAutoSubsidyRecord", {
          ruleId: row.id,
          subsidyTime: ""
        })
        .then(({ data }) => {
          if (data.code == 200) {
            this.detailVisible = true;
            this.detailData = data.data;
          } else {
            this.$message.error(data.message);
          }
        });
    },
    /**
     * 分页
     */
    handleCurrentChange(val) {
      this.currentChange = val;
      this.searchAutoSubsidy();
    }
  }
};
</script>
<style scoped>
.handle-box {
  margin-bottom: 20px;
}

.handle-select {
  width: 120px;
}

.handle-input {
  width: 300px;
  display: inline-block;
}
.del-dialog-cnt {
  font-size: 16px;
  text-align: center;
}
.table {
  width: 100%;
  font-size: 14px;
}
.red {
  color: #ff0000;
}

.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>
