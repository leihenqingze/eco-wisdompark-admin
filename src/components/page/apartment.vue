<template>
    <el-tabs v-model="activeName">
        <el-tab-pane label="南公寓" name="first">
            <div class="table">
                <div class="container">
                    <div class="handle-box">
                        <div class="handle-box">
                            <el-button type="primary" @click="detail(7)">添加</el-button>
                        </div>
                    </div>
                    <el-table :data="tableDataSouth" border class="table" ref="multipleTable">
                        <el-table-column prop="cardSerialNo" label="序号">
                        </el-table-column>
                        <el-table-column prop="userName" label="楼层号" >
                        </el-table-column>
                        <el-table-column prop="phoneNum" label="房间号">
                        </el-table-column>
                        <el-table-column prop="deposit" label="预约情况">
                        </el-table-column>
                        <el-table-column prop="userCardNum" label="可容纳人数">
                        </el-table-column>
                        <el-table-column label="操作" width="180" align="center">
                            <template slot-scope="scope">
                              <!--  <el-button type="text" icon="el-icon-edit" @click="handleDetail(scope.row)">查看详情
                                </el-button>-->
                                <el-button type="text" icon="el-icon-edit" @click="handleDetail(scope.row,'u1')">修改
                                </el-button>
                                <el-button type="text" icon="el-icon-delete" @click="deleteData(scope.row,'1')">删除
                                </el-button>
                            </template>
                        </el-table-column>
                    </el-table>

                </div>
                <el-dialog title="" :visible.sync="detailVisible" width="30%">
                    <input type="hidden" v-model="houseId"/>
                    <input type="hidden" v-model="updateId"/>
                    <el-form
                    >
                        <el-form-item prop="id" label="楼层号">
                            <el-input v-model="foolerNum" autofocus="true"></el-input>
                        </el-form-item>
                        <el-form-item prop="id" label="房间号">
                            <el-input v-model="houseNum" autofocus="true"></el-input>
                        </el-form-item>
                        <el-form-item prop="id" label="预约情况">
                            <el-input v-model="make" autofocus="true"></el-input>
                        </el-form-item>
                        <el-form-item prop="id" label="可容纳的人数">
                            <el-input v-model="peoperNum" autofocus="true"></el-input>
                        </el-form-item>
                    </el-form>
                    <span slot="footer" class="dialog-footer">
                     <el-button @click="detailVisible = false">取 消</el-button>
                     <el-button type="primary" @click="addTableDataCenter('1')">确 定</el-button>
                    </span>
                </el-dialog>
            </div>
        </el-tab-pane>
        <el-tab-pane label="北公寓" name="second">
            <div class="table">
                <div class="container">
                    <div class="handle-box">
                        <el-button type="primary" @click="detailNouth(7)">添加</el-button>
                    </div>
                    <el-table :data="tableDataNouth" border class="table" ref="multipleTable">
                        <el-table-column prop="cardSerialNo" label="序号">
                        </el-table-column>
                        <el-table-column prop="userName" label="楼层号" >
                        </el-table-column>
                        <el-table-column prop="phoneNum" label="房间号">
                        </el-table-column>
                        <el-table-column prop="deposit" label="预约情况">
                        </el-table-column>
                        <el-table-column prop="userCardNum" label="可容纳人数">
                        </el-table-column>

                        <el-table-column label="操作" width="180" align="center">
                            <template slot-scope="scope">
                                <el-button type="text" icon="el-icon-edit" @click="handleDetail(scope.row,'u2')">修改
                                </el-button>
                                <el-button type="text" icon="el-icon-delete" @click="deleteData(scope.row,'2')">删除
                                </el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                </div>
                <el-dialog title="" :visible.sync="detailVisibleNouth" width="30%">
                    <el-form
                    >
                        <el-form-item prop="id" label="楼层号">
                            <el-input v-model="foolerNum" autofocus="true"></el-input>
                        </el-form-item>
                        <el-form-item prop="id" label="房间号">
                            <el-input v-model="houseNum" autofocus="true"></el-input>
                        </el-form-item>
                        <el-form-item prop="id" label="预约情况">
                            <el-input v-model="make" autofocus="true"></el-input>
                        </el-form-item>
                        <el-form-item prop="id" label="可容纳的人数">
                            <el-input v-model="peoperNum" autofocus="true"></el-input>
                        </el-form-item>
                    </el-form>
                    <span slot="footer" class="dialog-footer">
                     <el-button @click="detailVisibleNouth = false">取 消</el-button>
                     <el-button type="primary" @click="addTableDataCenter('2')">确 定</el-button>
                    </span>
                </el-dialog>
            </div>
        </el-tab-pane>

    </el-tabs>
</template>

<script>
    export default {
        name: "apartment",
        data(){
            return{
                houseId:"",
                updateId:null,
                foolerNum:"",
                houseNum:"",
                make:"",
                peoperNum:"",
                detailVisible: false,
                detailVisibleNouth:false,
                tableDataSouth: [
                    {
                        cardSerialNo:"1",
                        userName:"1F",
                        phoneNum:"2101",
                        deposit:"空间",
                        userCardNum:"4人间"
                    },
                    {
                        cardSerialNo:"2",
                        userName:"1F",
                        phoneNum:"2102",
                        deposit:"空间",
                        userCardNum:"4人间"
                    },
                    {
                        cardSerialNo:"3",
                        userName:"1F",
                        phoneNum:"2103",
                        deposit:"已预约",
                        userCardNum:"4人间"
                    },
                    {
                        cardSerialNo:"4",
                        userName:"2F",
                        phoneNum:"2201",
                        deposit:"空间",
                        userCardNum:"4人间"
                    },
                    {
                        cardSerialNo:"5",
                        userName:"2F",
                        phoneNum:"2202",
                        deposit:"空间",
                        userCardNum:"4人间"
                    },
                    {
                        cardSerialNo:"6",
                        userName:"2F",
                        phoneNum:"2203",
                        deposit:"已预约",
                        userCardNum:"4人间"
                    },
                    {
                        cardSerialNo:"7",
                        userName:"3F",
                        phoneNum:"2301",
                        deposit:"已预约",
                        userCardNum:"4人间"
                    },
                    {
                        cardSerialNo:"8",
                        userName:"3F",
                        phoneNum:"2302",
                        deposit:"已预约",
                        userCardNum:"4人间"
                    },
                    {
                        cardSerialNo:"9",
                        userName:"3F",
                        phoneNum:"2303",
                        deposit:"已预约",
                        userCardNum:"4人间"
                    }
                ],

                tableDataNouth: [
                    {
                        cardSerialNo:"1",
                        userName:"1F",
                        phoneNum:"3101",
                        deposit:"已预约",
                        userCardNum:"3人间"
                    },
                    {
                        cardSerialNo:"2",
                        userName:"1F",
                        phoneNum:"3102",
                        deposit:"已预约",
                        userCardNum:"3人间"
                    },
                    {
                        cardSerialNo:"3",
                        userName:"1F",
                        phoneNum:"3103",
                        deposit:"空闲",
                        userCardNum:"3人间"
                    },
                    {
                        cardSerialNo:"4",
                        userName:"1F",
                        phoneNum:"3104",
                        deposit:"已预约",
                        userCardNum:"3人间"
                    },
                    {
                        cardSerialNo:"5",
                        userName:"2F",
                        phoneNum:"3201",
                        deposit:"已预约",
                        userCardNum:"3人间"
                    },
                    {
                        cardSerialNo:"6",
                        userName:"2F",
                        phoneNum:"3202",
                        deposit:"空闲",
                        userCardNum:"3人间"
                    },
                    {
                        cardSerialNo:"7",
                        userName:"2F",
                        phoneNum:"3203",
                        deposit:"空闲",
                        userCardNum:"3人间"
                    },
                    {
                        cardSerialNo:"8",
                        userName:"2F",
                        phoneNum:"3204",
                        deposit:"空闲",
                        userCardNum:"3人间"
                    },
                    {
                        cardSerialNo:"9",
                        userName:"3F",
                        phoneNum:"3301",
                        deposit:"空闲",
                        userCardNum:"3人间"
                    },
                    {
                        cardSerialNo:"10",
                        userName:"3F",
                        phoneNum:"3302",
                        deposit:"空闲",
                        userCardNum:"3人间"
                    },
                    {
                        cardSerialNo:"11",
                        userName:"3F",
                        phoneNum:"3303",
                        deposit:"已预约",
                        userCardNum:"3人间"
                    },
                    {
                        cardSerialNo:"12",
                        userName:"3F",
                        phoneNum:"3304",
                        deposit:"已预约",
                        userCardNum:"3人间"
                    }
                ]
            }
        },
        methods: {
            handleDetail(data,method){
                this.houseId = data.cardSerialNo;
                this.updateId = method;
                this.foolerNum=data.userName;
                this.houseNum=data.phoneNum;
                this.make=data.deposit;
                this.peoperNum=data.userCardNum;
                if(method == "u1"){
                    this.detailVisible=true;
                }else if(method == "u2"){
                    this.detailVisibleNouth=true;
                }
            },
            deleteData(data,method){
                if(method == "1"){
                    var index = this.tableDataSouth.findIndex(item =>{
                        if(item.cardSerialNo == data.cardSerialNo){
                            return true;
                        }
                    });
                    this.tableDataSouth.splice(index,1);
                }else if(method == "2"){
                    var index = this.tableDataNouth.findIndex(item =>{
                        if(item.cardSerialNo == data.cardSerialNo){
                            return true;
                        }
                    });
                    this.tableDataNouth.splice(index,1);
                }
            },
            detailNouth(obj){
                this.detailVisibleNouth = true;
            },
            detail(obj) {
                this.detailVisible = true;
            },
            addTableDataCenter: function (method) {
                if (this.updateId == null) {
                    if (method == "1") {
                        var num = parseInt(this.tableDataSouth.length);
                        var data = {
                            cardSerialNo: num + 1,
                            userName: this.foolerNum,
                            phoneNum: this.houseNum,
                            deposit: this.make,
                            userCardNum: this.peoperNum
                        };
                        this.tableDataSouth.push(data);
                        this.foolerNum = this.houseNum = this.make = this.peoperNum = "";
                        this.detailVisible = false;
                    } else if (method == "2") {
                        var num = parseInt(this.tableDataNouth.length);
                        var data = {
                            cardSerialNo: num + 1,
                            userName: this.foolerNum,
                            phoneNum: this.houseNum,
                            deposit: this.make,
                            userCardNum: this.peoperNum
                        };
                        this.tableDataNouth.push(data);
                        this.foolerNum = this.houseNum = this.make = this.peoperNum = "";
                        this.detailVisibleNouth = false;
                    }
                }else{
                    if(this.updateId == "u1"){
                        this.houseId = parseInt(this.houseId)-1;
                        this.tableDataSouth[this.houseId].userName = this.foolerNum;
                        this.tableDataSouth[this.houseId].phoneNum = this.houseNum;
                        this.tableDataSouth[this.houseId].deposit = this.make;
                        this.tableDataSouth[this.houseId].userCardNum = this.peoperNum;
                        this.foolerNum=this.houseNum = this.make = this.peoperNum = "";
                        this.updateId = null;
                        this.houseId = null;
                        this.detailVisible = false;
                    }else if(this.updateId == "u2"){
                        this.houseId = parseInt(this.houseId)-1;
                        this.tableDataNouth[this.houseId].userName = this.foolerNum;
                        this.tableDataNouth[this.houseId].phoneNum = this.houseNum;
                        this.tableDataNouth[this.houseId].deposit = this.make;
                        this.tableDataNouth[this.houseId].userCardNum = this.peoperNum;
                        this.foolerNum=this.houseNum = this.make = this.peoperNum = "";
                        this.updateId = null;
                        this.houseId = null;
                        this.detailVisibleNouth = false;
                    }
                }
            }
        }
    }
</script>

<style scoped>
    .handle-box {
        margin-bottom: 20px;
    }
</style>
