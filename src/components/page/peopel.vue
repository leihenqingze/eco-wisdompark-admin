<template>
    <div class="container">
        <el-menu
            :default-active="activeIndex"
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
        >
            <el-menu-item  index="1">人员管理</el-menu-item>
            <el-menu-item index="2">组织架构管理</el-menu-item>

        </el-menu>

        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                activeIndex: "1",

            };
        },
        created() {this.$router.push("/people/person");},
        methods: {
            handleSelect(key) {
                if (key == 1) {
                    this.$router.push("/people/person");
                }
                if (key == 2) {
                    this.$router.push("/people/dept");
                }

            }
        }
    }
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
        text-align: center
    }

    .table {
        width: 100%;
        font-size: 14px;
    }

    .red {
        color: #ff0000;
    }
</style>
