<template>
    <div class="container">
        <el-menu
            :default-active="activeIndex"
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
        >
            <el-menu-item  index="1">训练局职工</el-menu-item>
            <el-menu-item index="2">非训练局职工</el-menu-item>
            <el-menu-item index="3">保安</el-menu-item>
            <el-menu-item index="4">保洁</el-menu-item>
        </el-menu>

        <router-view></router-view>
    </div>
</template>
<script>
    export default {
        name: "Finance",
        data() {
            return {
                activeIndex: "1",

            };
        },
        created() {},
        methods: {
            handleSelect(key) {
                if (key == 1) {
                    this.$router.push("/Finance/staff");
                }
                if (key == 2) {
                    this.$router.push("/Finance/non-staff");
                }
                if (key == 3) {
                    this.$router.push("/Finance/guard");
                }
                if (key == 4) {
                    this.$router.push("/Finance/procter");
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
