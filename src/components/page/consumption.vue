<template>
  <div class="container">
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
    >
      <el-menu-item  index="1">制卡</el-menu-item>
      <el-menu-item index="2">充值</el-menu-item>
      <el-menu-item index="3">自动补助</el-menu-item>
      <el-menu-item index="4">手动补助</el-menu-item>
      <el-menu-item index="5">挂失</el-menu-item>
      <el-menu-item index="6">退卡</el-menu-item>
    </el-menu>

    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: "consumption",
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1"
    };
  },
  created() {},
  methods: {
    handleSelect(key) {
      if (key == 1) {
        this.$router.push("/consumption/making-card");
      }
      if (key == 2) {
        this.$router.push("/consumption/recharge-card");
      }
      if (key == 3) {
        this.$router.push("/consumption/auto-subsidy");
      }
      if (key == 4) {
        this.$router.push("/consumption/manual-subsidy");
      }
      if (key == 5) {
        this.$router.push("/consumption/report-loss");
      }
      if (key == 6) {
        this.$router.push("/consumption/return-card");
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
