<template>
    <el-tabs v-model="activeName">
            <div class="table">
                <div class="container">
                    <div class="handle-box">
                        <div class="handle-box">
                            <el-button type="primary" @click="detail(7)">添加</el-button>
                        </div>
                    </div>
                    <el-table :data="tableDataNouth" border class="table" ref="multipleTable">
                        <el-table-column width="70%" prop="cardSerialNo" label="序号">
                        </el-table-column>
                        <el-table-column width="100" prop="userName" label="项目名称" >
                        </el-table-column>
                        <el-table-column prop="phoneNum" label="项目简介">
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
                        <el-form-item prop="id" label="项目名称">
                            <el-input v-model="projectName" autofocus="true"></el-input>
                        </el-form-item>
                        <el-form-item prop="id" label="项目简介">
                            <el-input v-model="projectContent" autofocus="true"></el-input>
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
                updateId:null,
                projectId:"",
                detailVisible:false,
                projectName:"",
                projectContent:"",
                tableDataNouth: [
                    {
                        cardSerialNo:"1",
                        userName:"踏板操",
                        phoneNum:"在可调节的踏板上进行的中低强度直至高强度的步伐和上肢及身体的协调训练。同时借助于器械（哑铃等）增强肌肉耐力"
                    },
                    {
                        cardSerialNo:"2",
                        userName:"搏击操",
                        phoneNum:"它是一种有氧操，是Aerobics的又一创新，它结合了拳击、泰拳、跆拳道、散手、太极的基本动作，遵循健美操最新编排方法，在强有力的音乐节拍下完成的一种身体锻炼"
                    },
                    {
                        cardSerialNo:"3",
                        userName:"伸展平衡",
                        phoneNum:"平衡健身操是一种锻炼身体平衡能力的运动。锻炼时身体的支持面应由大逐渐到小，身体重心由低逐渐到高，由视觉监督练习逐渐过渡到闭目练习"
                    },
                    {
                        cardSerialNo:"4",
                        userName:"有氧舞蹈",
                        phoneNum:"是配合音乐有节奏地舞动的有氧运动，有氧舞蹈一方面能消耗较多热量，一方面能把许多舞蹈动作健美操化，通过有氧健美操的锻炼形式，反复或进行组合练习"
                    },
                    {
                        cardSerialNo:"5",
                        userName:"杠铃操",
                        phoneNum:"世界上最快的塑身方法是健身史上最成功的集体健身项目，世界上最快塑造形体、减少脂肪的运动。它成功地将杠铃引入操房，运用杠铃达到良好的塑身效果，将有氧运动与无氧运动完美结合，带来了集体健身的革命性突破"
                    },
                    {
                        cardSerialNo:"6",
                        userName:"健身球",
                        phoneNum:"健身球是一项新兴、有趣、特殊的体育健身运动"
                    }
                ]
            }
        },
        methods:{
            deleteData(data){
                var index = this.tableDataNouth.findIndex(item =>{
                    if(item.cardSerialNo == data.cardSerialNo){
                        return true;
                    }
                });
                this.tableDataNouth.splice(index,1);
            },
            handleDetail(data){
                this.detailVisible = true;
               this.projectName = data.userName;
               this.projectContent = data.phoneNum;
               this.updateId = "u";
               this.projectId = data.cardSerialNo;
            },
            addTableDataCenter(){
                if(this.updateId ==null){
                        var num = parseInt(this.tableDataNouth.length);
                        var data = {cardSerialNo:num+1,userName:this.projectName,phoneNum:this.projectContent};
                        this.tableDataNouth.push(data);
                        this.projectName=this.projectContent ="";
                        this.detailVisible = false;
                }else{

                    this.projectId = parseInt(this.projectId)-1;
                    this.tableDataNouth[this.projectId].userName = this.projectName;
                    this.tableDataNouth[this.projectId].phoneNum = this.projectContent;
                    this.projectContent=this.projectName ="";
                    this.updateId = null;
                    this.projectId = null;
                    this.detailVisible = false;
                }
            },
            detail(obj) {
                this.detailVisible = true;
            }
        }
    }
</script>

<style scoped>
    .handle-box {
        margin-bottom: 20px;
    }
</style>
