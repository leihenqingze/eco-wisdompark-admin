<template>
    <el-tabs v-model="activeName">
        <el-tab-pane label="中心餐厅" name="first">
            <div class="table">
                <div class="container">
                    <div class="handle-box">
                        <el-button type="primary" @click="detail(7)">添加</el-button>
                    </div>
                    <el-table :data="tableDataCenter" border class="table" ref="multipleTable">
                        <el-table-column prop="cardSerialNo" label="序号">
                        </el-table-column>
                        <el-table-column prop="userName" label="早餐">
                        </el-table-column>
                        <el-table-column prop="phoneNum" label="午餐">
                        </el-table-column>
                        <el-table-column prop="deposit" label="晚餐">
                        </el-table-column>
                        <el-table-column label="操作" width="180" align="center">
                            <template slot-scope="scope">
                                <!-- <el-button type="text" icon="el-icon-edit" @click="handleDetail(scope.row)">查看详情
                                 </el-button>-->
                                <el-button type="text" icon="el-icon-edit" @click="update(scope.row,'u1')">修改
                                </el-button>
                                <el-button type="text" icon="el-icon-delete" @click="deleteData(scope.row,'1')">删除
                                </el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                </div>
                <el-dialog title="" :visible.sync="detailVisible" width="30%">
                    <input type="hidden" v-model="footId"/>
                    <input type="hidden" v-model="updateId"/>
                    <el-form
                    >
                        <el-form-item prop="id" label="早餐na">
                            <el-input v-model="breakFast" autofocus="true"></el-input>
                        </el-form-item>
                        <el-form-item prop="id" label="午餐">
                            <el-input v-model="lunch" autofocus="true"></el-input>
                        </el-form-item>
                        <el-form-item prop="id" label="晚餐">
                            <el-input v-model="dinner" autofocus="true"></el-input>
                        </el-form-item>
                    </el-form>
                    <span slot="footer" class="dialog-footer">
                     <el-button @click="detailVisible = false">取 消</el-button>
                     <el-button type="primary" @click="addTableDataCenter('1')">确 定</el-button>
                    </span>
                </el-dialog>
            </div>
        </el-tab-pane>
        <el-tab-pane label="东职餐厅" name="second">
            <div class="table">
                <div class="container">
                    <div class="handle-box">
                        <div class="handle-box">
                            <el-button type="primary" @click="detailEest(7)">添加</el-button>
                        </div>
                    </div>
                    <el-table :data="tableDataEast" border class="table" ref="multipleTable">
                        <el-table-column prop="cardSerialNo" label="序号">
                        </el-table-column>
                        <el-table-column prop="userName" label="早餐">
                        </el-table-column>
                        <el-table-column prop="phoneNum" label="午餐">
                        </el-table-column>
                        <el-table-column prop="deposit" label="晚餐">
                        </el-table-column>

                        <el-table-column label="操作" width="180" align="center">
                            <template slot-scope="scope">
                                <!-- <el-button type="text" icon="el-icon-edit" @click="handleDetail(scope.row)">查看详情
                                 </el-button>-->
                                <el-button type="text" icon="el-icon-edit" @click="update(scope.row,'u2')">修改
                                </el-button>
                                <el-button type="text" icon="el-icon-delete" @click="deleteData(scope.row,'2')">删除
                                </el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                </div>
                <el-dialog title="" :visible.sync="detailVisibleEest" width="30%">
                    <el-form
                    >
                        <el-form-item prop="id" label="早餐">
                            <el-input v-model="breakFast" autofocus="true"></el-input>
                        </el-form-item>
                        <el-form-item prop="id" label="午餐">
                            <el-input v-model="lunch" autofocus="true"></el-input>
                        </el-form-item>
                        <el-form-item prop="id" label="晚餐">
                            <el-input v-model="dinner" autofocus="true"></el-input>
                        </el-form-item>
                    </el-form>
                    <span slot="footer" class="dialog-footer">
                     <el-button @click="detailVisibleEest = false">取 消</el-button>
                     <el-button type="primary" @click="addTableDataCenter('2')">确 定</el-button>
                    </span>
                </el-dialog>
            </div>
        </el-tab-pane>
        <el-tab-pane label="西职餐厅" name="second2">
            <div class="table">
                <div class="container">
                    <div class="handle-box">
                        <div class="handle-box">
                            <el-button type="primary" @click="detailWest(7)">添加</el-button>
                        </div>
                    </div>
                    <el-table :data="tableDataWest" border class="table" ref="multipleTable">
                        <el-table-column prop="cardSerialNo" label="序号">
                        </el-table-column>
                        <el-table-column prop="userName" label="早餐">
                        </el-table-column>
                        <el-table-column prop="phoneNum" label="午餐">
                        </el-table-column>
                        <el-table-column prop="deposit" label="晚餐">
                        </el-table-column>

                        <el-table-column label="操作" width="180" align="center">
                            <template slot-scope="scope">
                                <!-- <el-button type="text" icon="el-icon-edit" @click="handleDetail(scope.row)">查看详情
                                 </el-button>-->
                                <el-button type="text" icon="el-icon-edit" @click="update(scope.row,'u3')">修改
                                </el-button>
                                <el-button type="text" icon="el-icon-delete" @click="deleteData(scope.row,'3')">
                                    删除
                                </el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                </div>
                <el-dialog title="" :visible.sync="detailVisibleWest" width="30%">
                    <el-form
                    >
                        <el-form-item prop="id" label="早餐">
                            <el-input v-model="breakFast" autofocus="true"></el-input>
                        </el-form-item>
                        <el-form-item prop="id" label="午餐">
                            <el-input v-model="lunch" autofocus="true"></el-input>
                        </el-form-item>
                        <el-form-item prop="id" label="晚餐">
                            <el-input v-model="dinner" autofocus="true"></el-input>
                        </el-form-item>
                    </el-form>
                    <span slot="footer" class="dialog-footer">
                     <el-button @click="detailVisibleEest = false">取 消</el-button>
                     <el-button type="primary" @click="addTableDataCenter('3')">确 定</el-button>
                    </span>
                </el-dialog>
            </div>
        </el-tab-pane>
    </el-tabs>
</template>

<script>
    export default {
        name: "restaurant",
        data() {
            return {
                updateId:null,
                footId:"",
                breakFast:"",
                lunch:"",
                dinner:"",
                detailVisible: false,
                detailVisibleWest:false,
                detailVisibleEest:false,
                time: '',
                busRecordDtos: [],
                tableDataCenter: [
                    {
                        cardSerialNo: "1",
                        userName: "鱼香肉丝",
                        phoneNum: "干煸豆角",
                        deposit: "木须肉"
                    },
                    {
                        cardSerialNo: "2",
                        userName: "韭菜炒鸡蛋",
                        phoneNum: "酸辣土豆丝",
                        deposit: "麻婆豆腐"
                    },
                    {
                        cardSerialNo: "3",
                        userName: "韭菜盒子",
                        phoneNum: "糖醋排骨",
                        deposit: "炒合菜"
                    },
                    {
                        cardSerialNo: "4",
                        userName: "鸡蛋",
                        phoneNum: "鱼香肉丝",
                        deposit: "尖椒鸡蛋"
                    },
                    {
                        cardSerialNo: "5",
                        userName: "宫保鸡丁",
                        phoneNum: "红烧排骨",
                        deposit: "红烧肉"
                    },
                    {
                        cardSerialNo: "6",
                        userName: "韭菜盒子",
                        phoneNum: "糖醋排骨",
                        deposit: "西红柿烧茄子"
                    },
                    {
                        cardSerialNo: "7",
                        userName: "牛奶",
                        phoneNum: "东坡肉",
                        deposit: "炒合菜"
                    },
                    {
                        cardSerialNo: "8",
                        userName: "鸡蛋",
                        phoneNum: "水煮肉片",
                        deposit: "尖椒鸡蛋"
                    }
                ],

                tableDataWest: [
                    {
                        cardSerialNo: "1",
                        userName: "韭菜炒鸡蛋",
                        phoneNum: "酸辣土豆丝",
                        deposit: "麻婆豆腐"
                    },
                    {
                        cardSerialNo: "2",
                        userName: "鱼香肉丝",
                        phoneNum: "干煸豆角",
                        deposit: "木须肉"
                    },

                    {
                        cardSerialNo: "3",
                        userName: "鸡蛋",
                        phoneNum: "鱼香肉丝",
                        deposit: "尖椒鸡蛋"
                    },
                    {
                        cardSerialNo: "4",
                        userName: "韭菜盒子",
                        phoneNum: "糖醋排骨",
                        deposit: "炒合菜"
                    },
                    {
                        cardSerialNo: "5",
                        userName: "宫保鸡丁",
                        phoneNum: "红烧排骨",
                        deposit: "红烧肉"
                    },

                    {
                        cardSerialNo: "6",
                        userName: "牛奶",
                        phoneNum: "东坡肉",
                        deposit: "炒合菜"
                    },
                    {
                        cardSerialNo: "7",
                        userName: "韭菜盒子",
                        phoneNum: "糖醋排骨",
                        deposit: "西红柿烧茄子"
                    },
                    {
                        cardSerialNo: "8",
                        userName: "鸡蛋",
                        phoneNum: "水煮肉片",
                        deposit: "尖椒鸡蛋"
                    }
                ],

                tableDataEast: [
                    {
                        cardSerialNo: "1",
                        userName: "鸡蛋",
                        phoneNum: "水煮肉片",
                        deposit: "尖椒鸡蛋"
                    },
                    {
                        cardSerialNo: "2",
                        userName: "牛奶",
                        phoneNum: "东坡肉",
                        deposit: "炒合菜"
                    },
                    {
                        cardSerialNo: "3",
                        userName: "韭菜盒子",
                        phoneNum: "糖醋排骨",
                        deposit: "西红柿烧茄子"
                    },
                    {
                        cardSerialNo: "4",
                        userName: "宫保鸡丁",
                        phoneNum: "红烧排骨",
                        deposit: "红烧肉"
                    },
                    {
                        cardSerialNo: "5",
                        userName: "鸡蛋",
                        phoneNum: "鱼香肉丝",
                        deposit: "尖椒鸡蛋"
                    },
                    {
                        cardSerialNo: "6",
                        userName: "韭菜盒子",
                        phoneNum: "糖醋排骨",
                        deposit: "炒合菜"
                    },
                    {
                        cardSerialNo: "7",
                        userName: "鱼香肉丝",
                        phoneNum: "干煸豆角",
                        deposit: "木须肉"
                    },
                    {
                        cardSerialNo: "8",
                        userName: "韭菜炒鸡蛋",
                        phoneNum: "酸辣土豆丝",
                        deposit: "麻婆豆腐"
                    }
                ]
            }
        },

        methods: {
            addTableDataCenter:function(method){
               if(this.updateId ==null){
                   if(method == "1"){
                       var num = parseInt(this.tableDataCenter.length);
                       var data = {cardSerialNo:num+1,userName:this.breakFast,phoneNum:this.lunch,deposit:this.dinner};
                       this.tableDataCenter.push(data);
                       this.breakFast=this.lunch = this.dinner ="";
                       this.detailVisible = false;
                   }else if(method == "2"){
                       var num = parseInt(this.tableDataEast.length);
                       var data = {cardSerialNo:num+1,userName:this.breakFast,phoneNum:this.lunch,deposit:this.dinner};
                       this.tableDataEast.push(data);
                       this.breakFast=this.lunch = this.dinner ="";
                       this.detailVisibleEest = false;
                   }else if(method == "3"){
                       var num = parseInt(this.tableDataWest.length);
                       var data = {cardSerialNo:num+1,userName:this.breakFast,phoneNum:this.lunch,deposit:this.dinner};
                       this.tableDataWest.push(data);
                       this.breakFast=this.lunch = this.dinner ="";
                       this.detailVisibleWest = false;
                   }
               }else{
                   if(this.updateId == "u1"){
                       this.footId = parseInt(this.footId)-1;
                       this.tableDataCenter[this.footId].userName = this.breakFast;
                       this.tableDataCenter[this.footId].phoneNum = this.lunch;
                       this.tableDataCenter[this.footId].deposit = this.dinner;
                       this.breakFast=this.lunch = this.dinner ="";
                       this.updateId = null;
                       this.footId = null;
                       this.detailVisible = false;
                   }else if(this.updateId == "u2"){
                       this.footId = parseInt(this.footId)-1;
                       this.tableDataEast[this.footId].userName = this.breakFast;
                       this.tableDataEast[this.footId].phoneNum = this.lunch;
                       this.tableDataEast[this.footId].deposit = this.dinner;
                       this.breakFast=this.lunch = this.dinner ="";
                       this.updateId = null;
                       this.footId = null;
                       this.detailVisibleEest = false;
                   }else if(this.updateId == "u3"){
                       this.footId = parseInt(this.footId)-1;
                       this.tableDataWest[this.footId].userName = this.breakFast;
                       this.tableDataWest[this.footId].phoneNum = this.lunch;
                       this.tableDataWest[this.footId].deposit = this.dinner;
                       this.breakFast=this.lunch = this.dinner ="";
                       this.updateId = null;
                       this.footId = null;
                       this.detailVisibleWest = false;
                   }
               }

            },
            detail(obj) {
                this.detailVisible = true;
            },
            detailWest(obj) {
                this.detailVisibleWest = true;
            },
            detailEest(obj) {
                this.detailVisibleEest = true;
            },
            update: function (data,method) {
                if(method == "u1"){
                    this.updateId = method;
                    this.footId = data.cardSerialNo;
                    this.breakFast = data.userName;
                    this.lunch = data.phoneNum;
                    this.dinner = data.deposit;
                    this.detailVisible = true;
                    this.tableDataCenter.splice(index,1);
                }else  if(method == "u2"){
                    this.updateId = method;
                    this.footId = data.cardSerialNo;
                    this.breakFast = data.userName;
                    this.lunch = data.phoneNum;
                    this.dinner = data.deposit;
                    this.detailVisibleEest = true;

                    this.tableDataEast.splice(index,1);
                }else  if(method == "u3"){
                    this.updateId = method;
                    this.footId = data.cardSerialNo;
                    this.breakFast = data.userName;
                    this.lunch = data.phoneNum;
                    this.dinner = data.deposit;
                    this.detailVisibleWest = true;
                    this.tableDataWest.splice(index,1);
                }
            },
            deleteData:function (data,method) {
                if(method == "1"){
                    var index = this.tableDataCenter.findIndex(item =>{
                        if(item.cardSerialNo == data.cardSerialNo){
                            return true;
                        }
                    });
                    this.tableDataCenter.splice(index,1);
                }else if(method == "2"){
                    var index = this.tableDataEast.findIndex(item =>{
                        if(item.cardSerialNo == data.cardSerialNo){
                            return true;
                        }
                    });
                    this.tableDataEast.splice(index,1);
                }else if(method == "3"){
                    var index = this.tableDataWest.findIndex(item =>{
                        if(item.cardSerialNo == data.cardSerialNo){
                            return true;
                        }
                    });
                    this.tableDataWest.splice(index,1);
                }
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
