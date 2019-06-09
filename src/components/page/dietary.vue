<template>
    <el-tabs v-model="activeName">
        <div class="table">
            <div class="container">
                <div class="handle-box">
                    <el-button type="primary" @click="detail(7)">添加</el-button>
                </div>
                <el-table :data="tableData" border class="table" ref="multipleTable">
                    <el-table-column  prop="cardSerialNo" label="序号">
                    </el-table-column>
                    <el-table-column prop="name" label="食品名称" >
                    </el-table-column>
                    <el-table-column prop="protein" label="蛋白质">
                    </el-table-column>
                    <el-table-column prop="heat" label="热量">
                    </el-table-column>
                    <el-table-column prop="carbohydrate" label="碳水化合物">
                    </el-table-column>
                    <el-table-column prop="calcium" label="钙">
                    </el-table-column>
                    <el-table-column label="操作" width="180" align="center">
                        <template slot-scope="scope">
                            <el-button type="text" icon="el-icon-edit" @click="handleDetail(scope.row)">修改
                            </el-button>
                            <el-button type="text" icon="el-icon-delete" @click="deleteData(scope.row)">删除
                            </el-button>
                        </template>
                    </el-table-column>
                </el-table>

            </div>
            <el-dialog title="" :visible.sync="detailVisible" width="30%">
                <el-form
                >
                    <el-form-item prop="id" label="食品名称">
                        <el-input v-model="name" autofocus="true"></el-input>
                    </el-form-item>
                    <el-form-item prop="id" label="蛋白质">
                        <el-input v-model="protein" autofocus="true"></el-input>
                    </el-form-item>
                    <el-form-item prop="id" label="热量">
                        <el-input v-model="heat" autofocus="true"></el-input>
                    </el-form-item>
                    <el-form-item prop="id" label="碳水化合物">
                        <el-input v-model="carbohydrate" autofocus="true"></el-input>
                    </el-form-item>
                    <el-form-item prop="id" label="钙">
                        <el-input v-model="calcium" autofocus="true"></el-input>
                    </el-form-item>
                </el-form>
                <span slot="footer" class="dialog-footer">
                     <el-button @click="detailVisible = false">取 消</el-button>
                     <el-button type="primary" @click="addTableDataCenter()">确 定</el-button>
                    </span>
            </el-dialog>
        </div>
    </el-tabs>
</template>

<script>
    export default {
        name: "apartment",
        data(){
            return{
                cardSerialNo:"",
                name:"",
                protein:"",
                heat:"",
                carbohydrate:"",
                calcium:"",
                detailVisible:false,
                updateId:null,
                foodId:"",
                tableData: [
                    {
                        cardSerialNo:"1",
                        name:"土豆",
                        protein:"2g",
                        heat:"76卡",
                        carbohydrate:"17.2g",
                        calcium:"8mg",
                        other:""
                    },
                    {
                        cardSerialNo:"2",
                        name:"白菜",
                        protein:"1.5g",
                        heat:"18卡",
                        carbohydrate:"3.2g",
                        calcium:"50mg",
                        other:""
                    },
                    {
                        cardSerialNo:"3",
                        name:"猪肉",
                        protein:"14.6g",
                        heat:"395卡",
                        carbohydrate:"1.1g",
                        calcium:"11mg",
                        other:""
                    },
                    {
                        cardSerialNo:"4",
                        name:"鸡蛋",
                        protein:"13.3g",
                        heat:"144卡",
                        carbohydrate:"2.8g",
                        calcium:"56mg",
                        other:""
                    },
                    {
                        cardSerialNo:"5",
                        name:"牛奶",
                        protein:"3g",
                        heat:"54卡",
                        carbohydrate:"3.4g",
                        calcium:"104mg",
                        other:""
                    },
                    {
                        cardSerialNo:"6",
                        name:"牛肉",
                        protein:"17.8g",
                        heat:"125卡",
                        carbohydrate:"0.2g",
                        calcium:"6mg",
                        other:""
                    },
                    {
                        cardSerialNo:"7",
                        name:"芹菜",
                        protein:"0.8g",
                        heat:"20卡",
                        carbohydrate:"3.9g",
                        calcium:"48mg",
                        other:""
                    },
                    {
                        cardSerialNo:"8",
                        name:"西红柿",
                        protein:"10mg",
                        heat:"19卡",
                        carbohydrate:"4g",
                        calcium:"10mg",
                        other:""
                    }
                ]
            }
        },
        methods:{
            deleteData(data){
                var index = this.tableData.findIndex(item =>{
                    if(item.cardSerialNo == data.cardSerialNo){
                        return true;
                    }
                });
                this.tableData.splice(index,1);
            },
            handleDetail(data){
                this.name = data.name;
                this.updateId = "u";
                this.foodId = data.cardSerialNo;
                this.protein = data.protein;
                this.heat = data.heat;
                this.carbohydrate = data.carbohydrate;
                this.calcium = data.calcium;
                this.detailVisible = true;
            },
            addTableDataCenter(){
                if(this.updateId == null){
                    var num = parseInt(this.tableData.length);
                    var data = {cardSerialNo:num+1,name:this.name,protein:this.protein,heat:this.heat,carbohydrate:this.carbohydrate,calcium:this.calcium,other:""};
                    this.tableData.push(data);
                    this.name=this.protein=this.heat=this.carbohydrate=this.calcium = "";
                    this.detailVisible = false;
                }else{
                    this.contentId = parseInt(this.foodId)-1;
                    this.tableData[this.contentId].name = this.name;
                    this.tableData[this.contentId].protein = this.protein;
                    this.tableData[this.contentId].heat = this.heat;
                    this.tableData[this.contentId].carbohydrate = this.carbohydrate;
                    this.tableData[this.contentId].calcium = this.calcium;
                    this.content = "";
                    this.updateId = null;
                    this.foodId = null;
                    this.detailVisible = false;
                    this.name=this.protein=this.heat=this.carbohydrate=this.calcium = "";
                }
            },
            detail(obj) {
                this.detailVisible = true;
            },
        }
    }
</script>

<style scoped>
    .handle-box {
        margin-bottom: 20px;
    }
</style>
