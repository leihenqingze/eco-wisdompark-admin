<template>
  <div class="table">
    <div class="container">
      <div class="handle-box">
        <el-button type="primary" @click="manualVisible=true">添加手动补助</el-button>
      </div>
      <div class="handle-box">
        <span>组织架构</span>
        <el-cascader :options="deptAll" v-model="deptIds" :filterable="true" @change="deptChange"></el-cascader>
        <el-button type="primary" @click="reset()">重置</el-button>
      </div>
      <el-table :data="records" border class="table" ref="multipleTable">
        <el-table-column prop="cardSerialNo" label="序列号" sortable width="150"></el-table-column>
        <el-table-column prop="deptName" label="组织架构"></el-table-column>
        <el-table-column prop="userName" label="用户名"></el-table-column>
        <el-table-column prop="subsidyAmount" label="补助金额"></el-table-column>
      </el-table>
      <div class="pagination">
        <el-pagination
          background
          @current-change="handleCurrentChange"
          layout="prev, pager, next"
          :total="total"
        ></el-pagination>
      </div>
      <el-dialog title="添加手动补助" :visible.sync="manualVisible" width="90%">
        <div class="handle-box">
          <el-form ref="form" :model="lossQueryCardInfoDto" label-width="150px">
            <!-- <el-col :span="6">
              <el-form-item label="组织架构">
                <el-cascader :options="deptAll" v-model="lossQueryCardInfoDto.deptIds"></el-cascader>
              </el-form-item>
            </el-col>-->
            <el-col :span="6">
              <el-form-item label="姓名">
                <el-input v-model="lossQueryCardInfoDto.userName"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="手机号">
                <el-input v-model="lossQueryCardInfoDto.phoneNum"></el-input>
              </el-form-item>
            </el-col>

            <el-col :span="2" :offset="1">
              <el-button type="primary" @click="searchCardInfoList">确 定</el-button>
            </el-col>
          </el-form>
        </div>
        <el-table :data="cardInfoList" border class="table" ref="multipleTable">
          <el-table-column prop="userCardNum" label="卡编号" width="150"></el-table-column>
          <el-table-column prop="userName" label="姓名"></el-table-column>
          <el-table-column prop="phoneNum" label="手机号"></el-table-column>
          <el-table-column prop="rechargeBalance" label="充值余额"></el-table-column>
          <el-table-column prop="subsidyBalance" label="补助余额"></el-table-column>
          <el-table-column prop="totalBalance" label="总余额"></el-table-column>

          <el-table-column label="操作" align="center">
            <template slot-scope="scope">
              <el-button type="primary" @click="addManualSubsidyShow(scope.row)">补助</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-dialog>
      <!--补助金额弹框-->
      <el-dialog title="补助金额" :visible.sync="subsidyBalanceVisible" width="50%">
        <div class="handle-box">
          <el-form ref="form">
            <el-col :span="6">
              <el-form-item label="补助金额">
                <el-input-number
                  v-model="manualSubsidyDto.subsidyAmount"
                  :min="0"
                  :max="99999"
                  :step="100"
                ></el-input-number>
              </el-form-item>
            </el-col>

            <el-col :span="2" :offset="1">
              <el-button type="primary" @click="addManualSubsidy">确 定</el-button>
            </el-col>
          </el-form>
        </div>
      </el-dialog>
    </div>
  </div>
</template>
<script>
import vZz from "../../common/zuzhijiagou";
export default {
  name: "manual-subsidy",
  data() {
    return {
      deptAll: [],
      deptIds: [],
      total: 0,
      records: [],
      currentChange: 0,
      lossQueryCardInfoDto: {
        deptIds: [],
        phoneNum: "",
        userName: ""
      },
      manualVisible: false,
      cardInfoList: [],
      subsidyBalanceVisible: false,
      manualSubsidyDto: {
        cpuCardId: 0,
        subsidyAmount: 0
      }
    };
  },
  mounted() {
    this.getDeptAll();
    this.searchManualSubsidyRecord();
  },
  methods: {
    /**
     * 组织架构变动后查询
     */
    deptChange() {
      this.searchManualSubsidyRecord();
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
     * 查询手动补助记录
     */
    searchManualSubsidyRecord() {
      this.$axios
        .post("/api/subsidy-record/searchManualSubsidyRecord", {
          current: this.currentChange,
          query: this.deptIds[this.deptIds.length - 1],
          size: 10
        })
        .then(({ data }) => {
          const result = data.data;
          console.log(result);
          this.records = result.records || [];
          this.total = result.total;
        });
    },

    handleCurrentChange(val) {
      this.currentChange = val();
      this.searchManualSubsidyRecord();
    },
    searchCardInfoList() {
      this.$axios
        .post("/api/report-loss-record/query", {
          deptId: this.lossQueryCardInfoDto.deptIds[
            this.lossQueryCardInfoDto.deptIds.length - 1
          ],
          phoneNum: this.lossQueryCardInfoDto.phoneNum,
          userName: this.lossQueryCardInfoDto.userName
        })
        .then(({ data }) => {
          const result = data.data;
          this.cardInfoList = result.cardInfoList || [];
        });
    },
    addManualSubsidyShow(row) {
      this.subsidyBalanceVisible = true;
      this.manualSubsidyDto.cpuCardId = row.id;
    },
    addManualSubsidy() {
      if (
        this.manualSubsidyDto.subsidyAmount == null ||
        this.manualSubsidyDto.subsidyAmount <= 0
      ) {
        this.$notify.error({
          title: "错误",
          message: "请输入补助金额"
        });
      } else {
        this.$axios
          .post("/api/subsidy/manualSubsidy", this.manualSubsidyDto)
          .then(({ data }) => {
            if (data.code == 200) {
              this.$message.success("补助完成");
              this.manualVisible=false;
              this.subsidyBalanceVisible=false;
              this.searchManualSubsidyRecord();

            } else {
              this.$notify.error({
                title: "错误",
                message: data.message
              });
            }
          });
      }
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
</style>
