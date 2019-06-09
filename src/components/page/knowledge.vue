<template>
    <el-tabs v-model="activeName">
        <div class="table">
            <div class="container">
                <div class="handle-box">
                    <el-button type="primary" @click="detail(7)">添加</el-button>
                </div>
                <el-table :data="tableData" border class="table" ref="multipleTable">
                    <el-table-column width="70%" prop="cardSerialNo" label="序号">
                    </el-table-column>
                    <el-table-column prop="userName" label="主要内容" >
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
                    <el-form-item prop="id" label="主要内容">
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
                content:"",
                contentId:"",
                updateId:null,
                detailVisible:false,
                tableData: [
                    {
                        cardSerialNo:"1",
                        userName:"中国男子体操队:中国男子体操队是世界上体操届的一支劲旅，1984年，洛杉矶奥运会成为中国男子体操队创造历史的开始，2000年、2008年、2012年，中国男子体操队获奥运会男团冠军；2003年、2006年、2007年、2010年、2011年、2014年、获得体操世锦赛男团六连冠。"
                    },
                    {
                        cardSerialNo:"2",
                        userName:"中国女子体操队：中华人民共和国国家女子体操队，简称\"中国女体\"，是中国大陆一支专业女子竞技体操运动大队，成立于1953年11月17日，属于国家体育总局体操运动管理中心，任队长商春松，2014年9月22日，仁川亚运会上，中国女子体操队总成绩，229.300份赢得女子团体金牌，实现在亚运会该项目的\"十一连冠\"，2016年8月10日，获得第31届里约奥运会女子团体比赛季军。"
                    },
                    {
                        cardSerialNo:"3",
                        userName:"目前体操包括:队形队列练习，徒手体操，实用类体操，器械体操(单杠，双杠，吊环，鞍马，平衡木，高低杆)，技巧运动，跳跃，艺术体操，自由有体操，健美操，轻器械体操(实心球，跳绳，沙袋等)，蹦床等。"
                    },
                    {
                        cardSerialNo:"4",
                        userName:"体操器械分类：单杠，双杠，高低杠，跳绳，鞍马，蹦床，吊环，平衡木等。"
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
                this.content = data.userName;
                this.updateId = "u";
                this.contentId = data.cardSerialNo;
                this.detailVisible = true;
            },
            detail(obj) {
                this.detailVisible = true;
            },
            addTableDataCenter(){
                if(this.updateId == null){
                    var num = parseInt(this.tableData.length);
                    var data = {cardSerialNo:num+1,userName:this.content};
                    this.tableData.push(data);
                    this.content = "";
                    this.detailVisible = false;
                }else{
                    this.contentId = parseInt(this.contentId)-1;
                    this.tableData[this.contentId].userName = this.content;
                    this.content = "";
                    this.updateId = null;
                    this.contentId = null;
                    this.detailVisible = false;
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
