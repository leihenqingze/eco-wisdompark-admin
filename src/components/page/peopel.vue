<template>
    <el-tabs v-model="activeName">
        <el-tab-pane label="人员管理" name="first">
            <div class="table">
                <div class="container">
                    <div class="handle-box">
                        姓名：
                        <el-input v-model="m_name" placeholder="姓名" class="handle-input mr10"></el-input>
                        手机号：
                        <el-input v-model="m_phone" placeholder="手机号" class="handle-input mr10"></el-input>
                        <el-button type="primary" icon="search" @click="search">搜索</el-button>
                    </div>
                    <el-table :data="table" border class="table" ref="multipleTable"
                              @selection-change="handleSelectionChange">
                        <el-table-column prop="cardSerialNo" label="卡面序列号">
                        </el-table-column>
                        <el-table-column prop="userName" label="姓名" sortable width="150">
                        </el-table-column>
                        <el-table-column prop="phoneNum" label="手机号">
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
                    <div class="pagination">
                        <el-pagination background @current-change="handleCurrentChange" layout="prev, pager, next"
                                       :total=total>
                        </el-pagination>
                    </div>
                </div>

                <!--详情-->

                <el-dialog title="详情" :visible.sync="detailVisible" width="60%">
                    <el-table :data="table2" border class="table" ref="multipleTable"
                              @selection-change="handleSelectionChange">
                        <el-table-column prop="cardSerialNo" label="卡面序列号">
                        </el-table-column>
                        <el-table-column prop="userName" label="姓名" sortable width="150">
                        </el-table-column>
                        <el-table-column prop="phoneNum" label="手机号">
                        </el-table-column>
                        <el-table-column prop="deposit" label="CUP卡押金">
                        </el-table-column>
                        <el-table-column prop="userCardNum" label="身份证号码">
                        </el-table-column>
                        <el-table-column prop="rechargeBalance" label="CUP卡充值余额">
                        </el-table-column>
                        <el-table-column prop="subsidyBalance" label="CUP卡补助余额">
                        </el-table-column>
                    </el-table>
                    <el-tabs v-model="activeName1">
                        <el-tab-pane label="充值记录" name="first">

                            <div class="container">
                                <div class="handle-box">

                                    <el-date-picker
                                        @change="getData3"
                                        v-model="time1"
                                        type="daterange"
                                        start-placeholder="开始日期"
                                        end-placeholder="结束日期"
                                        :default-time="['00:00:00', '23:59:59']">
                                    </el-date-picker>
                                </div>
                                <el-table :data="table3" border class="table" ref="multipleTable"
                                          @selection-change="handleSelectionChange">
                                    <el-table-column prop="cardSerialNo" label="序列号" sortable width="150">
                                    </el-table-column>
                                    <el-table-column prop="amount" label="充值金额" width="120">
                                    </el-table-column>
                                    <el-table-column prop="createTime" label="充值时间">
                                    </el-table-column>


                                </el-table>
                                <div class="pagination">
                                    <el-pagination background @current-change="handleCurrentChange3"
                                                   layout="prev, pager, next" :total=total3>
                                    </el-pagination>
                                </div>
                            </div>

                        </el-tab-pane>
                        <el-tab-pane label="补助记录" name="second">

                            <div class="container">
                                <div class="handle-box">

                                    <el-date-picker
                                        @change="getData4"
                                        v-model="time2"
                                        type="daterange"
                                        start-placeholder="开始日期"
                                        end-placeholder="结束日期"
                                        :default-time="['00:00:00', '23:59:59']">
                                    </el-date-picker>

                                </div>
                                <el-table :data="table4" border class="table" ref="multipleTable"
                                          @selection-change="handleSelectionChange">
                                    <el-table-column prop="cardSerialNo" label="序列号" sortable width="150">
                                    </el-table-column>
                                    <el-table-column prop="amount" label="补助金额" width="120">
                                    </el-table-column>
                                    <el-table-column prop="type" label="补助类型" :formatter="ftype">
                                    </el-table-column>
                                    <el-table-column prop="createTime" label="补助时间">
                                    </el-table-column>

                                </el-table>
                                <div class="pagination">
                                    <el-pagination background @current-change="handleCurrentChange4"
                                                   layout="prev, pager, next" :total=total4>
                                    </el-pagination>
                                </div>
                            </div>
                        </el-tab-pane>
                        <el-tab-pane label="消费记录" name="third">
                            <div class="container">
                                <div class="handle-box">

                                    <el-date-picker
                                        @change="getData5"
                                        v-model="time3"
                                        type="daterange"
                                        start-placeholder="开始日期"
                                        end-placeholder="结束日期"
                                        :default-time="['00:00:00', '23:59:59']">
                                    </el-date-picker>
                                </div>
                                <el-table :data="table5" border class="table" ref="multipleTable"
                                          @selection-change="handleSelectionChange">
                                    <el-table-column prop="cardSerialNo" label="卡序列号" sortable width="150">
                                    </el-table-column>
                                    <el-table-column prop="type" label="消费类型" :formatter="xiaofeiType">
                                    </el-table-column>
                                    <el-table-column prop="diningType" label="用餐类型" :formatter="fdiningType">
                                    </el-table-column>
                                    <el-table-column prop="createTime" label="消费时间">
                                    </el-table-column>
                                    <el-table-column prop="rechargeAmount" label="消费充值金额">
                                    </el-table-column>
                                    <el-table-column prop="subsidyAmount" label="消费补助金额">
                                    </el-table-column>
                                </el-table>
                                <div class="pagination">
                                    <el-pagination background @current-change="handleCurrentChange5"
                                                   layout="prev, pager, next" :total=total5>
                                    </el-pagination>
                                </div>
                            </div>

                        </el-tab-pane>

                    </el-tabs>


                    <span slot="footer" class="dialog-footer">
                <el-button @click="detailVisible = false">取 消</el-button>
                <el-button type="primary" @click="detailVisible = false">确 定</el-button>
            </span>
                </el-dialog>

                <!-- 删除提示框 -->
                <el-dialog title="提示" :visible.sync="delVisible" width="300px" center>
                    <div class="del-dialog-cnt">删除不可恢复，是否确定删除？</div>
                    <span slot="footer" class="dialog-footer">
                <el-button @click="delVisible = false">取 消</el-button>
                <el-button type="primary">确 定</el-button>
            </span>
                </el-dialog>
            </div>
        </el-tab-pane>

        <el-tab-pane label="组织架构管理" name="second">
            <div class="table">

                <div class="container">
                    <div class="handle-box">

                        <el-input v-model="m_deptName" placeholder="筛选关键词" class="handle-input mr10"></el-input>
                        <el-button type="primary" icon="search" @click="search2">搜索</el-button>
                        <el-button type="text" icon="el-icon-edit" @click="handleAdd()">添加一级组织</el-button>
                    </div>
                    <el-table :data="table2" border class="table" ref="multipleTable"
                              @selection-change="handleSelectionChange">
                        <el-table-column type="selection" width="55" align="center"></el-table-column>
                        <el-table-column prop="id" label="ID" sortable>
                        </el-table-column>
                        <el-table-column prop="deptName" label="一级名称">
                        </el-table-column>
                        <el-table-column prop="consumeIdentity" label="消费者身份">
                        </el-table-column>

                        <el-table-column label="操作" align="center">
                            <template slot-scope="scope">

                                <el-button type="text" icon="el-icon-delete" class="red"
                                           @click="handleDelete(scope.row)">删除
                                </el-button>

                                <el-button type="text" icon="el-icon-delete" class="red" @click="look(scope.row)">查看
                                </el-button>
                            </template>
                        </el-table-column>
                    </el-table>

                </div>

                <!-- 编辑弹出框 -->
                <el-dialog title="添加一级组织" :visible.sync="addVisible" width="30%">
                    <el-form ref="form" :model="addyijiform" label-width="100px">
                        <el-form-item label="消费身份">
                            <el-select v-model="addyijiform.consumeIdentity" placeholder="请选择活动区域">
                                <el-option label="训练局职工" value="1"></el-option>
                                <el-option label="非训练局职工" value="2"></el-option>
                                <el-option label="保安" value="3"></el-option>
                                <el-option label="保洁" value="4"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="组织名称">
                            <el-input v-model="addyijiform.deptName"></el-input>
                        </el-form-item>


                    </el-form>
                    <span slot="footer" class="dialog-footer">
                <el-button @click="addVisible = false">取 消</el-button>
                <el-button type="primary" @click="saveAdd">确 定</el-button>
            </span>
                </el-dialog>


            </div>
        </el-tab-pane>

    </el-tabs>
</template>

<script>
    export default {
        name: "peopel",
        data() {
            return {
                activeName: 'first',
                activeName1: 'first',
                activeName2: 'first',
                activeName3: 'first',

                tableData: [],
                cur_page: 1,
                cur_page2: 1,
                cur_page3: 1,
                cur_page4: 1,
                cur_page5: 1,
                multipleSelection: [],
                select_cate: '',
                select_word: '',
                del_list: [],


                /*主表查询*/

                m_name: '',
                m_phone: '',


                m_deptName: '',

                /*table表格*/
                table: [],
                table2: [],
                table3: [],
                table4: [],
                table5: [],

                total: 0,
                total2: 0,
                total3: 0,
                total4: 0,
                total5: 0,


                is_search: false,
                addVisible: false,
                delVisible: false,
                detailVisible: false,
                form: {
                    name: '',
                    date: '',
                    address: ''
                },

                addyijiform: {
                    consumeIdentity: null,
                    deptName: ""

                },


                cdiningType: ['早餐', '午餐', '晚餐'],
                xiaofeitype: ['用餐', '购物'],


                id: null,
                /**/
                time1: '',
                time2: '',
                time3: ''

            }
        },
        created() {
            this.getData();
            this.getData2();
        },
        computed: {
            data() {
                return this.tableData
            }
        },
        methods: {
            fdiningType(val) {
                return this.cdiningType[val.diningType];
            },
            xiaofeiType(val) {
                return this.xiaofeitype[val.type];
            },
            // 分页导航
            handleCurrentChange(val) {

                this.cur_page = val;
                this.getData();
            },
            handleCurrentChange2(val) {
                this.cur_page2 = val;
                this.getData2();
            },
            handleCurrentChange3(val) {
                this.cur_page3 = val;
                this.getData3();
            },
            handleCurrentChange4(val) {
                this.cur_page4 = val;
                this.getData4();
            },
            handleCurrentChange5(val) {
                this.cur_page5 = val;
                this.getData4();
            },


            /*补助类型*/


            ftype(row) {
                console.log(row)
            },


            getData() {

                this.$axios.post('/api/user/searchUserDtos',

                    {
                        "currentPage": this.cur_page,
                        "deptId": 0,
                        "pageSize": 10,
                        "phoneNum": this.m_phone,
                        "userName": this.m_name
                    }
                ).then(({data}) => {
                    console.log(data)
                    const result = data.data;
                    this.table = result.records || [];
                    this.total = result.total;
                })
            },
            getData2() {

                this.$axios.post('/api/dept/getLevel1Dept',

                    {
                        deptName: this.m_deptName
                    }
                ).then(({data}) => {
                    const result = data.data;
                    this.table2 = result || [];
                })
            },
            getData3() {
                console.log(this.time1)
                /*充值记录*/
                this.$axios.post('/api/recharge-record/searchUserRechargeRecordDtos',
                    {
                        id: this.id,
                        pageSize: 10,
                        startTime: this.time1[0],
                        endTime: this.time1[1],
                        currentPage: this.cur_page3,

                    }
                ).then(({data}) => {
                    const result = data.data;
                    console.log(result, 11111)
                    this.table3 = result.records;
                    this.total3 = result.total;
                });
            },

            getData4() {

                /*补助记录*/
                this.$axios.post('/api/subsidy-record/searchUserSubsidyRecordDtos',
                    {
                        id: this.id,
                        pageSize: 10,
                        startTime: this.time2[0],
                        endTime: this.time2[1],
                        currentPage: this.cur_page4
                    }
                ).then(({data}) => {
                    const result = data.data;
                    console.log(result, 11111)
                    this.table4 = result.records;
                    this.total4 = result.total;
                })
            },
            getData5() {
                /*消费记录*/
                this.$axios.post('/api/consume-record/searchUserConsumeRecordDtos',
                    {
                        id: this.id,
                        pageSize: 10,
                        startTime: this.time3[0],
                        endTime: this.time3[1],
                        currentPage: this.cur_page5
                    }
                ).then(({data}) => {
                    const result = data.data;
                    console.log(result, 11111)
                    this.table5 = result.records;
                    this.total5 = result.total;
                })
            },


            search() {
                this.getData()
            },


            search2() {
                this.getData2()
            },

            look(row) {
                var id = row.id;
                console.log(id)
                this.$router.push({path: 'erji', query: {id: id}})
            },

            /*过滤器*/

            /*用餐类型*/
            diningType(val) {
                console.log(val)
                return val;
            },


            filterTag(value, row) {
                return row.tag === value;
            },
            handleAdd() {

                this.addVisible = true;
            },
            handleDetail(row) {
                var id = row.id;
                this.id = row.id;
                this.detailVisible = true;
                this.$axios.post('/api/user/getUser',
                    {
                        id: this.id
                    }
                ).then(({data}) => {
                    this.table2 = data;
                });

                this.getData3();
                this.getData4();
                this.getData5();


            },

            handleDelete(row) {
                var id = row.id;
                this.delVisible = true;


                this.$axios.post('/api/dept/delDept',
                    {
                        id: id,
                    }
                ).then(({data}) => {
                    const result = data.data;
                    this.getData2();
                    this.$message.success('删除成功')

                });


            },
            delAll() {
                const length = this.multipleSelection.length;
                let str = '';
                this.del_list = this.del_list.concat(this.multipleSelection);
                for (let i = 0; i < length; i++) {
                    str += this.multipleSelection[i].name + ' ';
                }
                this.$message.error('删除了' + str);
                this.multipleSelection = [];
            },
            handleSelectionChange(val) {
                this.multipleSelection = val;
            },
            // 保存添加一级
            saveAdd() {
                this.$axios.post('/api/dept/addDeptLevel1',
                    {
                        "consumeIdentity": this.addyijiform.consumeIdentity,
                        "deptName": this.addyijiform.deptName
                    }
                ).then(({data}) => {
                    const result = data.data;
                    if (!!result) {
                        this.addVisible = false;
                        this.$message.success(`成功`);
                        this.getData2();
                    }
                });

            },


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
