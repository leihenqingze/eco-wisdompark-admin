<template>
    <el-tabs v-model="activeName">
        <div class="table">
            <div class="container">
                <div class="handle-box">
                    <el-button type="primary" @click="detail(7)">添加</el-button>
                </div>
                <el-table :data="tableDataNouth" border class="table" ref="multipleTable">
                    <el-table-column width="70%;" style="width: 100px;" prop="cardSerialNo" label="序号">
                    </el-table-column>
                    <el-table-column width="100%;" prop="userName" label="项目名称" >
                    </el-table-column>
                    <el-table-column prop="phoneNum" label="概况">
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
                    <el-form-item prop="id" label="概况">
                        <el-input v-model="content" autofocus="true"></el-input>
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
                detailVisible:false,
                projectName:"",
                content:"",
                updateId:null,
                projectId:null,
                tableDataNouth: [
                    {
                        cardSerialNo:"1",
                        userName:"篮球",
                        phoneNum:"起源于美国马萨诸塞州，是1891年12月21日由詹姆斯·奈史密斯创造，是奥运会核心比赛项目，是以手为中心的身体对抗性体育运动"
                    },
                    {
                        cardSerialNo:"2",
                        userName:"足球",
                        phoneNum:"足球，英文football，被誉为“世界第一运动”，全球体育界最具影响力的单项体育运动，标准的11人制足球比赛由两队各派10名球员与1名守门员，总共22人，在长方形的草地球场上对抗、防守、进攻"
                    },
                    {
                        cardSerialNo:"3",
                        userName:"乒乓球",
                        phoneNum:"中国国球，是一种世界流行的球类体育项目，包括进攻、对抗和防守。比赛分团体、单打、双打等数种；2001年9月1日前以21分为一局，现以11分为一局；采用五局三胜，七局四胜。乒乓球为圆球状，重2.53-2.70克，白或橙色，用赛璐珞或塑料制成"
                    },
                    {
                        cardSerialNo:"4",
                        userName:"游泳",
                        phoneNum:"游泳是人在水的浮力作用下产生向上漂浮，凭借浮力通过肢体有规律的运动，使身体在水中有规律运动的技能。游泳运动可分为竞技游泳和实用游泳，竞技游泳是奥林匹克运动会中的第二大项目，它包括蝶泳、仰 泳（也称背泳）、蛙泳和捷泳（也称爬泳/自由泳）四种泳姿的竞速项目，以及花样游泳等"
                    },
                    {
                        cardSerialNo:"5",
                        userName:"体操",
                        phoneNum:"体操是所有体操项目的总称，包括竞技体操、艺术体操 、蹦床等奥运项目，以及竞技健美操、技巧运动等非奥运会项目。竞技体操是体操的一个分支，是一项在规定的器械上，完成复杂、协调的动作，并根据动作的分值或动作的难度、编排与完成情况等给予评分的运动"
                    },
                    {
                        cardSerialNo:"6",
                        userName:"举重",
                        phoneNum:"举重是一项历史悠久的运动，将杠铃以双手举过头，举起的杠铃重量为胜负依据。男子举重在第一届奥林匹克运动会时便被列入正式项目。直到2000年的悉尼奥运时，女子举重才被列入正式项目，虽然早在1987年世界举重锦标赛就已经有女子项目。举重运动员要完成两个举重动作：抓举和挺举"
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
               this.projectId = data.cardSerialNo;
               this.content = data.phoneNum;
               this.updateId = "u";
            },
            addTableDataCenter(){
                if(this.updateId ==null){
                    var num = parseInt(this.tableDataNouth.length);
                    var data = {cardSerialNo:num+1,userName:this.projectName,phoneNum:this.content};
                    this.tableDataNouth.push(data);
                    this.projectName=this.content ="";
                    this.detailVisible = false;
                }else{
                    this.projectId = parseInt(this.projectId)-1;
                    this.tableDataNouth[this.projectId].userName = this.projectName;
                    this.tableDataNouth[this.projectId].phoneNum = this.content;
                    this.content=this.projectName ="";
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
