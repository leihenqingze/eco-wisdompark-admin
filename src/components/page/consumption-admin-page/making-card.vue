<template>
  <div>
    <div class="container">
      <div class="form-box">
        <el-form
          :model="makingCpuCardDto"
          ref="makingCpuCardDto"
          label-width="100px"
          class="demo-dynamic"
        >
          <el-form-item prop="num" label="物理ID">
            <el-input
              v-model="makingCpuCardDto.cardId"
              autofocus="true"
              @change="cardIdChange"
              :readonly="cardReadonly"
            ></el-input>
          </el-form-item>
          <el-form-item prop="num" label="卡编号">
            <el-input v-model="makingCpuCardDto.cardSerialNo"></el-input>
          </el-form-item>
          <el-form-item prop="name" label="姓名">
            <el-input v-model="makingCpuCardDto.userName"></el-input>
          </el-form-item>
          <el-form-item prop="id" label="身份证号">
            <el-input v-model="makingCpuCardDto.userCardNum"></el-input>
          </el-form-item>
          <el-form-item prop="phone" label="手机号">
            <el-input v-model="makingCpuCardDto.phoneNum"></el-input>
          </el-form-item>
          <el-form-item prop="makingCpuCardDto.deptId" label="组织架构">
            <el-cascader
              :options="deptAll"
              v-model="makingCpuCardDto.deptIds"
              :filterable="true"
              @change="deptChange"
            ></el-cascader>
          </el-form-item>
          <el-form-item prop="money" label="管理费/押金">
            <el-input v-model="makingCpuCardDto.deposit"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="making">提交</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>
<script>
import vZz from "../../common/zuzhijiagou";
export default {
  name: "consumption",
  components: {
    vZz
  },
  data() {
    return {
      /*制卡*/
      makingCpuCardDto: {
        cardId: "",
        cardSerialNo: "",
        deposit: 20,
        deptIds: [],
        deptId: 0,
        phoneNum: "",
        userCardNum: "",
        userName: ""
      },
      deptAll: [],
      cardReadonly: false
    };
  },
  mounted() {
    this.getDeptAll();
  },
  methods: {
    /*组织架构*/
    getDeptAll() {
      this.$axios.post("/api/dept/getDeptAll", {}).then(({ data }) => {
        const result = data.data;
        this.deptAll = result;
      });
    },
    deptChange(val) {},
    cardIdChange(value) {
      if (value != null && value != "") {
        this.cardReadonly = true;
      }
    },
    making() {
      if (this.validation()) {
        this.makingCpuCardDto.deptId = this.makingCpuCardDto.deptIds[1];
        this.$axios
          .post("/api/cpu-card/making", this.makingCpuCardDto)
          .then(res => {
            if (res != null && res.data.code == 200) {
              this.makingCpuCardDto.cardId = "";
              this.makingCpuCardDto.cardSerialNo = "";
              this.makingCpuCardDto.userName = "";
              this.makingCpuCardDto.userCardNum = "";
              this.makingCpuCardDto.phoneNum = "";
              this.makingCpuCardDto.deptId = 0;
              this.makingCpuCardDto.deptIds = [];
              this.$notify({
                title: "成功",
                message: "制卡成功",
                type: "success"
              });
              this.cardReadonly = false;
            } else {
              this.$notify({
                title: "警告",
                message: "制卡失败:" + res.data.message,
                type: "warning"
              });
            }
          });
      }
    },
    validation() {
      if (
        this.makingCpuCardDto.cardId == null ||
        this.makingCpuCardDto.cardId == ""
      ) {
        this.$notify.error({
          title: "错误",
          message: "未获取到卡片物理ID"
        });
        return false;
      }
      if (
        this.makingCpuCardDto.cardSerialNo == null ||
        this.makingCpuCardDto.cardSerialNo == ""
      ) {
        this.$notify.error({
          title: "错误",
          message: "卡编号不能为空"
        });
        return false;
      }
      if (
        this.makingCpuCardDto.userName == null ||
        this.makingCpuCardDto.userName == ""
      ) {
        this.$notify.error({
          title: "错误",
          message: "用户名不能为空"
        });
        return false;
      }
      if (
        this.makingCpuCardDto.phoneNum == null ||
        this.makingCpuCardDto.phoneNum == ""
      ) {
        this.$notify.error({
          title: "错误",
          message: "手机号不能为空"
        });
        return false;
      }
      if (
        this.makingCpuCardDto.deptIds == null ||
        this.makingCpuCardDto.deptIds == "" ||
        this.makingCpuCardDto.deptIds.length < 2
      ) {
        this.$notify.error({
          title: "错误",
          message: "请选择组织架构并且必须选择到二级"
        });
        return false;
      }
      if (
        this.makingCpuCardDto.deposit == null ||
        this.makingCpuCardDto.deposit == ""
      ) {
        this.$notify.error({
          title: "错误",
          message: "请输入押金"
        });
        return false;
      }
      return true;
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
