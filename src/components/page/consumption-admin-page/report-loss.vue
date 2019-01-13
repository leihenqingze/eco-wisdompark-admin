<template>
  <div class="table">
    <div class="container">
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
            <el-button type="primary" @click="reissueCard(scope.row)">补卡</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <!--补助金额弹框-->
    <el-dialog title="补卡" :visible.sync="reportLossVisible" width="50%">
      <el-row>
        <el-col :span="10">
          <div class="form-box">
            <el-form :model="cardInfoDto" ref label-width="100px" class="demo-dynamic">
              <el-form-item label="姓名">
                <span>{{cardInfoDto.userName}}</span>
              </el-form-item>

              <el-form-item label="手机号">
                <span>{{cardInfoDto.phoneNum}}</span>
              </el-form-item>
              <el-form-item label="身份证号">
                <span>{{cardInfoDto.userCardNum}}</span>
              </el-form-item>

              <el-form-item label="组织架构名称">
                <span>{{cardInfoDto.deptName}}</span>
              </el-form-item>

              <el-form-item label="充值余额">
                <span>{{cardInfoDto.rechargeBalance}}</span>
              </el-form-item>

              <el-form-item label="补助余额">
                <span>{{cardInfoDto.subsidyBalance}}</span>
              </el-form-item>

              <el-form-item label="总余额">
                <span>{{cardInfoDto.balance}}</span>
              </el-form-item>
            </el-form>
          </div>
        </el-col>
        <el-col :span="10">
          <el-form
            :model="reissueCardDto"
            ref="reissueCardDto"
            label-width="100px"
            class="demo-dynamic"
          >
            <el-form-item prop="num" label="新卡物理ID">
              <el-input
                v-model="reissueCardDto.cardId"
                autofocus="true"
                @change="cardIdChange"
                :readonly="cardReadonly"
              ></el-input>
            </el-form-item>
            <el-form-item prop="num" label="卡编号">
              <el-input v-model="reissueCardDto.cardSerialNo"></el-input>
            </el-form-item>
            <el-form-item prop="money" label="管理费/押金">
              <el-input v-model="reissueCardDto.deposit"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="reissue">提交</el-button>
            </el-form-item>
          </el-form>
        </el-col>
      </el-row>
    </el-dialog>
  </div>
</template>
<script>
import vZz from "../../common/zuzhijiagou";
export default {
  name: "manual-subsidy",
  data() {
    return {
      lossQueryCardInfoDto: {
        deptIds: [],
        phoneNum: "",
        userName: ""
      },
      cardInfoList: [],
      cardReadonly: false,
      reportLossVisible: false,
      cardInfoDto: {
        id: 0,
        userName: "",
        phoneNum: "",
        userCardNum: "",
        deptId: 0,
        deptName: "",
        rechargeBalance: "",
        subsidyBalance: "",
        balance: "",
        reportLossStstus: 0,
        userId: 0
      },
      cardId: 0,
      reissueCardDto: {
        cardId: "",
        cardSerialNo: "",
        deposit: 20,
        userId: 0
      }
    };
  },
  mounted() {},
  methods: {
    /**
     * 查询组织架构
     * */
    // getDeptAll() {
    //   this.$axios.post("/api/dept/getDeptAll", {}).then(({ data }) => {
    //     const result = data.data;
    //     this.deptAll = result;
    //   });
    // },
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
    reissueCard(row) {
      this.$axios
        .post("/api/report-loss-record/query/confirm", {
          cardId: row.id
        })
        .then(({ data }) => {
          this.cardInfoDto = data.data;
        });
      this.reportLossVisible = true;
    },
    reissue() {
      if (this.validation()) {
        this.reissueCardDto.userId = this.cardInfoDto.userId;
        this.$axios
          .post("/api/report-loss-record/reissue", this.reissueCardDto)
          .then(({ data }) => {
            if (data.code == 200) {
              this.$message.success("补卡完成");
              this.reportLossVisible = false;
            } else {
              this.$notify.error({
                title: "错误",
                message: data.message
              });
            }
            this.reissueCardDto.cardId = "";
            this.reissueCardDto.cardSerialNo = "";
            this.reissueCardDto.deposit = 20;
            this.cardReadonly = false;
          });
      }
    },
    validation() {
      if (
        this.reissueCardDto.cardId == null ||
        this.reissueCardDto.cardId == ""
      ) {
        this.$notify.error({
          title: "错误",
          message: "未获取到卡片物理ID"
        });
        return false;
      }
      if (
        this.reissueCardDto.cardSerialNo == null ||
        this.reissueCardDto.cardSerialNo == ""
      ) {
        this.$notify.error({
          title: "错误",
          message: "卡编号不能为空"
        });
        return false;
      }
      if (
        this.reissueCardDto.deposit == null ||
        this.reissueCardDto.deposit == ""
      ) {
        this.$notify.error({
          title: "错误",
          message: "请输入押金"
        });
        return false;
      }
      return true;
    },
    cardIdChange() {
      this.cardReadonly = true;
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
