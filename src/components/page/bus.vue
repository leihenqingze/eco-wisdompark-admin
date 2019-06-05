<template>
    <div>
        <el-row :gutter="20">
            <el-col :span="6" class="m-b-20">
                <el-card class="box-card">
                    <div class="text item">
                        车牌:京AP3133
                    </div>
                    <!--<div class="text item">-->
                    <!--所属组织:国家体育总局训练局-->
                    <!--</div>-->
                    <!--<div class="text item">-->
                    <!--车型:海格牌KLQ6125AE41-->
                    <!--</div>-->
                    <div style="text-align:center">
                        <el-button type="primary" @click="detail(1)" class="detail">查看详情</el-button>
                    </div>
                </el-card>
            </el-col>
            <el-col :span="6" class="m-b-20">
                <el-card class="box-card">
                    <div class="text item">
                        车牌:京A95809
                    </div>
                    <!--<div class="text item">-->
                    <!--所属组织:国家体育总局训练局-->
                    <!--</div>-->
                    <!--<div class="text item">-->
                    <!--车型:柯斯达SCT6700RZ-->
                    <!--</div>-->
                    <div style="text-align:center">
                        <el-button type="primary" @click="detail(2)" class="detail">查看详情</el-button>
                    </div>
                </el-card>
            </el-col>
            <el-col :span="6" class="m-b-20">
                <el-card class="box-card">
                    <div class="text item">
                        车牌:京A95811
                    </div>
                    <!--<div class="text item">-->
                    <!--所属组织:国家体育总局训练局-->
                    <!--</div>-->
                    <!--<div class="text item">-->
                    <!--车型:宇通ZK6710Q1T-->
                    <!--</div>-->
                    <div style="text-align:center">
                        <el-button type="primary" @click="detail(3)" class="detail">查看详情</el-button>
                    </div>
                </el-card>
            </el-col>
            <el-col :span="6" class="m-b-20">
                <el-card class="box-card">
                    <div class="text item">
                        车牌:京AC0229
                    </div>
                    <!--<div class="text item">-->
                    <!--所属组织:国家体育总局训练局-->
                    <!--</div>-->
                    <!--<div class="text item">-->
                    <!--车型:金龙KLQ6127Q-->
                    <!--</div>-->
                    <div style="text-align:center">
                        <el-button type="primary" @click="detail(4)" class="detail">查看详情</el-button>
                    </div>
                </el-card>
            </el-col>
            <el-col :span="6" class="m-b-20">
                <el-card class="box-card">
                    <div class="text item">
                        车牌:京A95892
                    </div>
                    <!--<div class="text item">-->
                    <!--所属组织:国家体育总局训练局-->
                    <!--</div>-->
                    <!--<div class="text item">-->
                    <!--车型:金龙KLQ6127Q-->
                    <!--</div>-->
                    <div style="text-align:center">
                        <el-button type="primary" @click="detail(5)" class="detail">查看详情</el-button>
                    </div>
                </el-card>
            </el-col>
            <el-col :span="6" class="m-b-20">
                <el-card class="box-card">
                    <div class="text item">
                        车牌:京A95893
                    </div>
                    <!--<div class="text item">-->
                    <!--所属组织:国家体育总局训练局-->
                    <!--</div>-->
                    <!--<div class="text item">-->
                    <!--车型:金龙KLQ6127Q-->
                    <!--</div>-->
                    <div style="text-align:center">
                        <el-button type="primary" @click="detail(6)" class="detail">查看详情</el-button>
                    </div>
                </el-card>
            </el-col>
            <el-col :span="6" class="m-b-20">
                <el-card class="box-card">
                    <div class="text item">
                        车牌:京AC9510
                    </div>
                    <!--<div class="text item">-->
                    <!--所属组织:国家体育总局训练局-->
                    <!--</div>-->
                    <!--<div class="text item">-->
                    <!--车型:金龙KLQ6127Q-->
                    <!--</div>-->
                    <div style="text-align:center">
                        <el-button type="primary" @click="detail(7)" class="detail">查看详情</el-button>
                    </div>
                </el-card>
            </el-col>
            <el-col :span="6" class="m-b-20">
                <el-card class="box-card">
                    <div class="text item">
                        车牌:京A95888
                    </div>
                    <!--<div class="text item">-->
                    <!--所属组织:国家体育总局训练局-->
                    <!--</div>-->
                    <!--<div class="text item">-->
                    <!--车型:金龙KLQ6127Q-->
                    <!--</div>-->
                    <div style="text-align:center">
                        <el-button type="primary" @click="detail(8)" class="detail">查看详情</el-button>
                    </div>
                </el-card>
            </el-col>
            <el-col :span="6" class="m-b-20">
                <el-card class="box-card">
                    <div class="text item">
                        车牌:京AC9501
                    </div>
                    <!--<div class="text item">-->
                    <!--所属组织:国家体育总局训练局-->
                    <!--</div>-->
                    <!--<div class="text item">-->
                    <!--车型:金龙KLQ6127Q-->
                    <!--</div>-->
                    <div style="text-align:center">
                        <el-button type="primary" @click="detail(9)" class="detail">查看详情</el-button>
                    </div>
                </el-card>
            </el-col>
            <el-col :span="6" class="m-b-20">
                <el-card class="box-card">
                    <div class="text item">
                        车牌:京AC0221
                    </div>
                    <!--<div class="text item">-->
                    <!--所属组织:国家体育总局训练局-->
                    <!--</div>-->
                    <!--<div class="text item">-->
                    <!--车型:金龙KLQ6127Q-->
                    <!--</div>-->
                    <div style="text-align:center">
                        <el-button type="primary" @click="detail(11)" class="detail">查看详情</el-button>
                    </div>
                </el-card>
            </el-col>

            <el-col :span="6" class="m-b-20">
                <el-card class="box-card">
                    <div class="text item">
                        车牌:京A95810
                    </div>
                    <!--<div class="text item">-->
                    <!--所属组织:国家体育总局训练局-->
                    <!--</div>-->
                    <!--<div class="text item">-->
                    <!--车型:金龙KLQ6127Q-->
                    <!--</div>-->
                    <div style="text-align:center">
                        <el-button type="primary" @click="detail(11)" class="detail">查看详情</el-button>
                    </div>
                </el-card>
            </el-col>

            <el-col :span="6" class="m-b-20">
                <el-card class="box-card">
                    <div class="text item">
                        车牌:京A10318D
                    </div>
                    <!--<div class="text item">-->
                    <!--所属组织:国家体育总局训练局-->
                    <!--</div>-->
                    <!--<div class="text item">-->
                    <!--车型:金龙KLQ6127Q-->
                    <!--</div>-->
                    <div style="text-align:center">
                        <el-button type="primary" @click="detail(11)" class="detail">查看详情</el-button>
                    </div>
                </el-card>
            </el-col>

            <el-col :span="6" class="m-b-20">
                <el-card class="box-card">
                    <div class="text item">
                        车牌:京A10306D
                    </div>
                    <!--<div class="text item">-->
                    <!--所属组织:国家体育总局训练局-->
                    <!--</div>-->
                    <!--<div class="text item">-->
                    <!--车型:金龙KLQ6127Q-->
                    <!--</div>-->
                    <div style="text-align:center">
                        <el-button type="primary" @click="detail(11)" class="detail">查看详情</el-button>
                    </div>
                </el-card>
            </el-col>


            <el-col :span="6" class="m-b-20">
                <el-card class="box-card">
                    <div class="text item">
                        车牌:京A95808
                    </div>
                    <!--<div class="text item">-->
                    <!--所属组织:国家体育总局训练局-->
                    <!--</div>-->
                    <!--<div class="text item">-->
                    <!--车型:金龙KLQ6127Q-->
                    <!--</div>-->
                    <div style="text-align:center">
                        <el-button type="primary" @click="detail(11)" class="detail">查看详情</el-button>
                    </div>
                </el-card>
            </el-col>

        </el-row>
        <!--详情-->
        <el-dialog title="详情" :visible.sync="detailVisible" width="80%">

            <div class="container">
                <div class="handle-box">

                    <el-date-picker
                        v-model="time"
                        type="date"
                        placeholder="选择日期">
                    </el-date-picker>
                </div>
                <el-table :data="busRecordDtos" border class="table" ref="multipleTable"
                >
                    <!--@selection-change="handleSelectionChange"-->
                    <!--<el-table-column type="selection" width="55" align="center"></el-table-column>-->
                    <el-table-column prop="busNum" label="班车车牌号">
                    </el-table-column>
                    <el-table-column prop="cardSerialNo" label="卡序列号">
                    </el-table-column>
                    <el-table-column prop="userName" label="运动员名称">
                    </el-table-column>
                    <el-table-column prop="team" label="运动员所属队伍">
                    </el-table-column>
                    <el-table-column prop="phone" label="手机号">
                    </el-table-column>
                    <el-table-column prop="createTime" label="乘车时间">
                    </el-table-column>
                </el-table>
                <!--<div class="pagination">-->
                <!--<el-pagination background @current-change="handleCurrentChange" layout="prev, pager, next"-->
                <!--:total="1000">-->
                <!--</el-pagination>-->
                <!--</div>-->
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
                time: '',
                busRecordDtos: []

            }
        },
        methods: {
            detail(obj) {
                console.log(obj);
                this.$axios.post('api/bus-record/list',
                    {
                        "busId": obj,
                        "currentPage": 1,
                        "pageSize": 100
                    }
                ).then(({data}) => {
                    console.log(data);
                    const result = data.data;
                    this.busRecordDtos = result.records;
                    // console.log( this.busRecordDtos);
                    //this.total= result.total;

                });
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
