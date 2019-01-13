<template>
    <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="训练局职工" name="first">
            <div class="container">
                <div class="handle-box">
                    <el-form ref="form" :model="form" label-width="80px" size="mini">
                        <el-form-item label="组织架构">
                            <el-cascader
                                :options="organizationOption"
                                v-model="form.org"
                                >
                            </el-cascader>
                        </el-form-item>
                        <el-form-item label="时间">

                            <el-date-picker
                                v-model="form.date"
                                type="datetimerange"
                                range-separator="至"
                                start-placeholder="开始日期"
                                end-placeholder="结束日期">
                            </el-date-picker>
                        </el-form-item>
                        <el-form-item label="pos地点">
                            <el-radio-group v-model="form.address">
                                <el-radio label="0">东职pos</el-radio>
                                <el-radio label="1">西职pos</el-radio>
                                <el-radio label="2">中心pos</el-radio>
                                <el-radio label="3">购物pos</el-radio>

                            </el-radio-group>
                        </el-form-item>

                        <el-form-item>
                            <el-button type="primary" @click="pgetData">查询</el-button>

                        </el-form-item>

                    </el-form>



                </div>
                <el-table :data="tableData" border class="table" ref="multipleTable" >
                    <el-table-column prop="cardSerialNo" label="序列号" sortable width="150">
                    </el-table-column>

                    <el-table-column prop="type" label="消费类型" :formatter="xiaofeiType">
                    </el-table-column>
                    <el-table-column prop="diningType" label="用餐类型" :formatter="fdiningType">
                    </el-table-column>
                    <el-table-column prop="createTime" label="补助时间" >
                    </el-table-column>
                    <el-table-column prop="rechargeAmount" label="充值金额" >
                    </el-table-column>
                    <el-table-column prop="subsidyAmount" label="补助金额" >
                    </el-table-column>

                </el-table>
                <div class="pagination">




                    <el-pagination background @current-change="handleCurrentChange" layout="prev, pager, next" :total=total>
                    </el-pagination>
                </div>
                <el-row :gutter="20">
                    <el-col :span="6">
                        当前页税后总金额：{{aone}}
                    </el-col>
                    <el-col :span="6">
                        当前页总金额：{{atwo}}
                    </el-col>
                    <el-col :span="6">
                        税后总金额：{{athree}}
                    </el-col>
                    <el-col :span="6">
                        总金额：{{afour}}
                    </el-col>
                </el-row>
            </div>




        </el-tab-pane>
        <el-tab-pane label="非训练局职工" name="second">


            <div class="container">
                <div class="handle-box">
                    <el-form ref="form" :model="form2" label-width="80px">

                        <el-form-item label="组织架构">
                            <el-cascader
                                :options="organizationOption2"
                                v-model="form2.org"
                                >
                            </el-cascader>
                        </el-form-item>

                        <el-form-item label="消费类型">
                            <el-radio-group v-model="form2.resource">
                                <el-radio label="0">用餐</el-radio>
                                <el-radio label="1">购物</el-radio>
                            </el-radio-group>
                        </el-form-item>



                        <el-form-item label="时间">
                            <el-date-picker
                                v-model="form2.date"
                                type="datetimerange"
                                range-separator="至"
                                start-placeholder="开始日期"
                                end-placeholder="结束日期">
                            </el-date-picker>
                        </el-form-item>

                        <el-form-item>
                            <el-button type="primary" @click="pgetData2">搜索</el-button>
                        </el-form-item>
                    </el-form>

                </div>
                <el-table :data="tableData2" border class="table" ref="multipleTable" >
                    <el-table-column prop="cardSerialNo" label="序列号" sortable width="150">
                    </el-table-column>

                    <el-table-column prop="type" label="消费类型" :formatter="xiaofeiType">
                    </el-table-column>
                    <el-table-column prop="diningType" label="用餐类型" :formatter="fdiningType">
                    </el-table-column>
                    <el-table-column prop="createTime" label="补助时间" >
                    </el-table-column>
                    <el-table-column prop="rechargeAmount" label="充值金额" >
                    </el-table-column>
                    <el-table-column prop="subsidyAmount" label="补助金额" >
                    </el-table-column>

                </el-table>
                <div class="pagination">
                    <el-pagination background @current-change="handleCurrentChange2" layout="prev, pager, next" :total=total2>
                    </el-pagination>
                </div>

                <el-row :gutter="20">
                    <el-col :span="6">
                        当前页税后总金额：{{bone}}
                    </el-col>
                    <el-col :span="6">
                        当前页总金额：{{btwo}}
                    </el-col>
                    <el-col :span="6">
                        税后总金额：{{bthree}}
                    </el-col>
                    <el-col :span="6">
                        总金额：{{bfour}}
                    </el-col>
                </el-row>



            </div>


        </el-tab-pane>
        <el-tab-pane label="保安" name="third">

            <div class="container">
                <div class="handle-box">
                    <el-form ref="form" :model="form3" label-width="80px" size="mini">


                        <el-form-item label="报表类型">
                            <el-date-picker
                                v-model="form3.date"
                                type="datetimerange"
                                range-separator="至"
                                start-placeholder="开始日期"
                                end-placeholder="结束日期">
                            </el-date-picker>
                        </el-form-item>



                    </el-form>


                    <el-button type="primary" @click="pgetData3">查询</el-button>

                </div>
                <el-table :data="tableData3" border class="table" ref="multipleTable" >
                    <el-table-column prop="cardSerialNo" label="序列号" sortable width="150">
                    </el-table-column>

                    <el-table-column prop="type" label="消费类型" :formatter="xiaofeiType">
                    </el-table-column>
                    <el-table-column prop="diningType" label="用餐类型" :formatter="fdiningType">
                    </el-table-column>
                    <el-table-column prop="createTime" label="补助时间" >
                    </el-table-column>
                    <el-table-column prop="rechargeAmount" label="充值金额" >
                    </el-table-column>
                    <el-table-column prop="subsidyAmount" label="补助金额" >
                    </el-table-column>

                </el-table>
                <div class="pagination">
                    <el-pagination background @current-change="handleCurrentChange3" layout="prev, pager, next" :total=total3>
                    </el-pagination>
                </div>
                <el-row :gutter="20">
                    <el-col :span="24">
                        共：{{total3}}次
                    </el-col>

                </el-row>
            </div>

        </el-tab-pane>
        <el-tab-pane label="保洁" name="fourth">


            <div class="container">
                <div class="handle-box">
                    <el-form ref="form" :model="form4" label-width="80px" size="mini">


                        <el-form-item label="报表类型">
                            <el-date-picker
                                v-model="form4.date1"
                                type="datetimerange"
                                range-separator="至"
                                start-placeholder="开始日期"
                                end-placeholder="结束日期">
                            </el-date-picker>
                        </el-form-item>



                    </el-form>


                    <el-button type="primary" @click="pgetData4">查询</el-button>

                </div>
                <el-table :data="tableData4" border class="table" ref="multipleTable" >
                    <el-table-column prop="cardSerialNo" label="序列号" sortable width="150">
                    </el-table-column>

                    <el-table-column prop="type" label="消费类型" :formatter="xiaofeiType">
                    </el-table-column>
                    <el-table-column prop="diningType" label="用餐类型" :formatter="fdiningType">
                    </el-table-column>
                    <el-table-column prop="createTime" label="补助时间" >
                    </el-table-column>
                    <el-table-column prop="rechargeAmount" label="充值金额" >
                    </el-table-column>
                    <el-table-column prop="subsidyAmount" label="补助金额" >
                    </el-table-column>

                </el-table>
                <div class="pagination">
                    <el-pagination background @current-change="handleCurrentChange4" layout="prev, pager, next" :total=total4>
                    </el-pagination>
                </div>
                <el-row :gutter="20">
                    <el-col :span="24">
                        共：{{total4}}次
                    </el-col>

                </el-row>
            </div>

        </el-tab-pane>
    </el-tabs>
</template>

<script>
    export default {
        name: "Finance",
        data() {
            return {
                activeName: 'first',
                tableData: [],
                tableData2: [],
                tableData3: [],
                tableData4: [],
                tableData5: [],



                total:0,
                total2:0,
                total3:0,
                total4:0,

                /*职工*/


                dynamicValidateForm: {

                    num: '',
                    phone: '',
                    money: '',
                    organization: [],
                    id:'',
                    name:'',
                    sex:''

                },

                form: {
                    name: '',
                    region: '',
                    date1: '',
                    date2: '',
                    delivery: false,
                    type: [],
                    resource: '',
                    desc: '',
                    address:'',
                    org:[]
                },
                organizationOption: [],
                organizationOption2: [],

                /*非职工*/

                form2: {
                    name: '',
                    region: '',
                    date1: '',
                    date2: '',
                    delivery: false,
                    type: [],
                    resource: '',
                    desc: '',
                    org:[]
                },
                tableData1: [
                    {
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1517 弄'
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1519 弄'
                }, {
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1516 弄'
                }],
                dynamicValidateForm1: {

                    num: '',
                    phone: '',
                    money: '',
                    organization: [],
                    id:'',
                    name:'',
                    sex:''
                },


                /*保安*/
                dynamicValidateForm2: {

                    num: '',
                    phone: '',
                    money: '',
                    organization: [],
                    id:'',
                    name:'',
                    sex:''
                },
                form3: {
                    name: '',
                    region: '',
                    date1: '',
                    date2: '',
                    delivery: false,
                    type: [],
                    resource: '',
                    desc: ''
                },



                /*保洁*/


                form4: {
                    name: '',
                    region: '',
                    date1: '',
                    date2: '',
                    delivery: false,
                    type: [],
                    resource: '',
                    desc: ''
                },
                dynamicValidateForm3: {

                    num: '',
                    phone: '',
                    money: '',
                    organization: [],
                    id:'',
                    name:'',
                    sex:''
                },









                cur_page:1,
                cur_page2:1,
                cur_page3:1,
                cur_page4:1,

                cdiningType:['早餐','午餐','晚餐'],
                xiaofeitype:['用餐','购物'],


                aone:'',
                atwo:'',
                athree:'',
                afour:'',

                bone:'',
                btwo:'',
                bthree:'',
                bfour:''


            };
        },
        methods: {
            fdiningType(val) {
                console.log(val,21312312312321)
                return this.cdiningType[val.diningType];
            },
            xiaofeiType(val) {
                console.log(val,21312312312321)
                return this.xiaofeitype[val.type];
            },


            /*组织架构*/
            getOrg(){


                this.$axios.post('/api/dept/getDeptAllByConsumeIdentity',
                    {
                            /*训练局穿0*/
                        /*非训练局穿1*/

                        "consumeIdentity": 0

                    }
                ).then(({data}) => {
                    console.log(data)

                    const result = data.data;
                    this.organizationOption = result

                })


            },
            getOrg2(){


                this.$axios.post('/api/dept/getDeptAllByConsumeIdentity',
                    {
                        /*训练局穿0*/
                        /*非训练局穿1*/

                        "consumeIdentity": 1

                    }
                ).then(({data}) => {
                    console.log(data)

                    const result = data.data;
                    this.organizationOption2 = result

                })


            },
            handleClick(tab, event) {
                console.log(tab, event);
            },
            onSubmit() {
                console.log('submit!');
            },



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

            getData() {
                this.$axios.post('/api/consume-record/trainingStaffRecord',
                    {
                        "currentPage": this.cur_page,
                        "deptId": this.form.org[1],
                        "endTime": this.form.date1[0],
                        "pageSize": 10,
                        "posPositionId": this.form.address,
                        "startTime": this.form.date1[0]

                    }
                ).then(({data}) => {
                    const result = data.data.consumeRecordDtoPage;


                    const all = data.data;

                    this.tableData = result.records;
                    this.total = result.total;
                    this.aone = all.currentPageAfterTaxAmount
                    this.atwo = all.currentPageAmount
                    this.athree = all.totalAfterTaxAmount
                    this.afour = all.totalAmount

                });
            },
            getData2() {
                this.$axios.post('api/consume-record/notTrainingStaffRecord',
                    {
                        "consomeType": this.form2.resource,
                        "currentPage": this.cur_page2,
                        "deptId": this.form2.org[1],
                        "endTime": this.form2.date1[1],
                        "pageSize": 10,
                        "startTime": this.form2.date1[0]

                    }
                ).then(({data}) => {
                    const result = data.data.consumeRecordDtoPage;
                    const all = data.data;

                    this.tableData2 = result.records;
                    this.total2= result.total;

                    this.bone = all.currentPageAfterTaxAmount
                    this.btwo = all.currentPageAmount
                    this.bthree = all.totalAfterTaxAmount
                    this.bfour = all.totalAmount
                });
            },
            getData3() {
                this.$axios.post('api/consume-record/securityRecord',
                    {
                        "currentPage": this.cur_page3,
                        "endTime": this.form3.date1[1],
                        "pageSize": 10,
                        "startTime": this.form3.date1[0]

                    }
                ).then(({data}) => {
                    console.log(data,1111111)
                    const result = data.data.consumeRecordDtoPage;

                    this.tableData3 = result.records;
                    this.total3 = result.total;


                });
            },
            getData4() {
                this.$axios.post('api/consume-record/cleaningRecord',
                    {
                        "currentPage": this.cur_page4,
                        "endTime": this.form4.date1[1],
                        "pageSize": 10,
                        "startTime": this.form4.date1[0]

                    }
                ).then(({data}) => {
                    const result = data.data.consumeRecordDtoPage;

                    this.tableData4 = result.records;
                    this.total4 = result.total;

                });
            },


            pgetData() {
                this.cur_page = 1;
                this.getData();
            },


            pgetData2() {
                this.cur_page2 = 1;
                this.getData2();
            },


            pgetData3() {
                this.cur_page3 = 1;
                this.getData3();
            },

            pgetData4() {
                this.cur_page4 = 1;
                this.getData4();
            },





        },
        created() {
            this.getOrg();
            this.getOrg2();

            this.getData()
            this.getData2()
            this.getData3()
            this.getData4()




        },

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
