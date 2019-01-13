<template>

    <div>

        <el-row :gutter="20">
            <el-col :span="6" v-for="o in 8" :key="o" class="m-b-20">
                <el-card class="box-card" >
                    <div  class="text item">
                        车牌: {{o}}
                    </div>
                    <div style="text-align:center">
                        <el-button type="primary" @click="detail" class="detail">查看详情</el-button>

                    </div>
                </el-card>
            </el-col>

        </el-row>





        <!--详情-->

        <el-dialog title="详情" :visible.sync="detailVisible" width="60%">

            <div class="container">
                <div class="handle-box">

                    <el-date-picker
                        v-model="time"
                        type="date"
                        placeholder="选择日期">
                    </el-date-picker>
                </div>
                <el-table :data="data" border class="table" ref="multipleTable" @selection-change="handleSelectionChange">
                    <el-table-column type="selection" width="55" align="center"></el-table-column>
                    <el-table-column prop="date" label="姓名" sortable width="150">
                    </el-table-column>
                    <el-table-column prop="name" label="性别" width="120">
                    </el-table-column>
                    <el-table-column prop="address" label="手机号" :formatter="formatter">
                    </el-table-column>
                    <el-table-column prop="address" label="卡内余额" :formatter="formatter">
                    </el-table-column>


                </el-table>
                <div class="pagination">
                    <el-pagination background @current-change="handleCurrentChange" layout="prev, pager, next" :total="1000">
                    </el-pagination>
                </div>
            </div>







            <span slot="footer" class="dialog-footer">
                <el-button @click="detailVisible = false">取 消</el-button>
                <el-button type="primary" @click="detailVisible = false">确 定</el-button>
            </span>
        </el-dialog>
    </div>

</template>

<script>
    export default {
        name: "bus",
        data() {
            return {
                detailVisible: false,
                time:''

            }
        },
        methods: {
            detail() {
                this.detailVisible = true;
            }
        }
    }
</script>
<style scoped>
    .handle-box {
        margin-bottom: 20px;
    }
    .m-b-20 {

        margin-bottom: 20px;

    }

    .handle-select {
        width: 120px;
    }

    .handle-input {
        width: 300px;
        display: inline-block;
    }
    .del-dialog-cnt{
        font-size: 16px;
        text-align: center
    }
    .table{
        width: 100%;
        font-size: 14px;
    }
    .red{
        color: #ff0000;
    }
</style>
