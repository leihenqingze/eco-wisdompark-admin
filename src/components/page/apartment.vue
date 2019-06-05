<template>
    <el-tabs v-model="activeName">
        <el-tab-pane label="南公寓" name="first">
            <div class="table">
                <div class="container">
                    <div class="handle-box">
                    </div>
                    <el-table :data="tableData" border class="table" ref="multipleTable">
                        <el-table-column prop="cardSerialNo" label="菜品">
                        </el-table-column>
                        <el-table-column prop="userName" label="类型" >
                        </el-table-column>
                        <el-table-column prop="phoneNum" label="管理员">
                        </el-table-column>
                        <el-table-column prop="deposit" label="CUP卡押金">
                        </el-table-column>
                        <el-table-column prop="userCardNum" label="身份证号码">
                        </el-table-column>
                        <el-table-column prop="rechargeBalance" label="CUP卡充值余额">
                        </el-table-column>
                        <el-table-column prop="subsidyBalance" label="CUP卡补助余额">
                        </el-table-column>

                        <el-table-column label="操作" width="180" align="center">
                            <template slot-scope="scope">
                                <el-button type="text" icon="el-icon-edit" @click="handleDetail(scope.row)">查看详情
                                </el-button>
                            </template>
                        </el-table-column>
                    </el-table>

                </div>
            </div>
        </el-tab-pane>
        <el-tab-pane label="北公寓" name="second">
            <div class="table">
                <div class="container">
                    <div class="handle-box">
                    </div>
                    <el-table :data="tableData" border class="table" ref="multipleTable">
                        <el-table-column prop="cardSerialNo" label="菜品">
                        </el-table-column>
                        <el-table-column prop="userName" label="类型" >
                        </el-table-column>
                        <el-table-column prop="phoneNum" label="管理员">
                        </el-table-column>
                        <el-table-column prop="deposit" label="CUP卡押金">
                        </el-table-column>
                        <el-table-column prop="userCardNum" label="身份证号码">
                        </el-table-column>
                        <el-table-column prop="rechargeBalance" label="CUP卡充值余额">
                        </el-table-column>
                        <el-table-column prop="subsidyBalance" label="CUP卡补助余额">
                        </el-table-column>

                        <el-table-column label="操作" width="180" align="center">
                            <template slot-scope="scope">
                                <el-button type="text" icon="el-icon-edit" @click="handleDetail(scope.row)">查看详情
                                </el-button>
                            </template>
                        </el-table-column>
                    </el-table>

                </div>
            </div>
        </el-tab-pane>

    </el-tabs>
</template>

<script>
    export default {
        name: "apartment",
        data(){
            return{
                tableData: []
            }
        }
    }
</script>

<style scoped>

</style>
