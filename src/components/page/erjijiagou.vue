<template>
    <div class="table">

        <div class="container">
            <div class="handle-box">

                <el-input v-model="m_deptName" placeholder="筛选关键词" class="handle-input mr10"></el-input>
                <el-button type="primary" icon="search" @click="search2">搜索</el-button>
                <el-button type="text" icon="el-icon-edit" @click="handleAdd()">添加二级组织</el-button>
            </div>
            <el-table :data="table2" border class="table" ref="multipleTable" @selection-change="handleSelectionChange">
                <el-table-column type="selection" width="55" align="center"></el-table-column>
                <el-table-column prop="id" label="ID" sortable >
                </el-table-column>
                <el-table-column prop="deptName" label="一级名称" >
                </el-table-column>
                <el-table-column prop="consumeIdentity" label="消费者身份" >
                </el-table-column>

                <el-table-column label="操作"  align="center">
                    <template slot-scope="scope">

                        <el-button type="text" icon="el-icon-delete" class="red" @click="handleDelete(scope.row)">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>

        </div>

        <el-dialog title="添加二级组织" :visible.sync="addVisible" width="30%">
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
</template>

<script>
    export default {
        name: "erjijiagou",
        data() {
            return {

                id:null,
                multipleSelection: [],
                select_cate: '',
                select_word: '',
                del_list: [],


                /*主表查询*/

                m_name :'',
                m_phone:'',


                m_deptName:'',

                /*table表格*/
                table: [],
                table2:[],
                table3:[],
                table4:[],


                total: 0,
                total2: 0,
                total3: 0,
                total4: 0,



                is_search: false,
                addVisible: false,
                delVisible: false,
                detailVisible: false,
                form: {
                    name: '',
                    date: '',
                    address: ''
                },

                addyijiform:{
                    consumeIdentity: null,
                    deptName: ""

                },



                idx: -1,

                /**/
                time1:'',
                time2:''

            }
        },
        created() {
            this.id = this.$route.query.id
            this.getData2();
        },
        computed: {
            data() {
                return this.tableData
            }
        },
        methods: {


            getData2() {
                var id = this.id;

                this.$axios.post('/api/dept/getLevel2Dept',

                    {
                        id:id,
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
                        id: 11,
                        pageSize: 10,
                        startTime: this.time1[0],
                        endTime:this.time1[1],
                        currentPage: this.cur_page3,

                    }
                ).then(({data}) => {
                    const result = data.data;
                    console.log(result,11111)
                    // this.table3 = result.records;
                });
            },

            getData4() {

                console.log(2222222222)
                /*补助记录*/
                this.$axios.post('/api/subsidy-record/searchUserSubsidyRecordDtos',
                    {
                        id: 11,
                        pageSize: 10,
                        startTime: this.time2[0],
                        endTime:this.time2[1],
                        currentPage: this.cur_page4
                    }
                ).then(({data}) => {
                    const result = data.data;
                    console.log(result,11111)
                    /* this.table4 = result.records;*/
                })
            },





            search2() {
                this.getData2()
            },

            look() {

                this.$router.push('erji')
            },


            formatter(row, column) {
                return row.address;
            },
            filterTag(value, row) {
                return row.tag === value;
            },
            handleAdd() {

                this.addVisible = true;
            },
            handleDetail(row) {

                var id = row.id;
                this.detailVisible = true;
                this.$axios.post('/api/user/searchUserDtos',
                    {
                        id: id,
                        pageSize: 1,
                    }
                ).then(({data}) => {
                    const result = data.data;
                    console.log(result,11111)
                    this.table2 = result.records;
                });

                this.getData3();
                this.getData4();


            },

            handleDelete( row) {
                var id = row.id
                this.delVisible = true;


                this.$axios.post('/api/dept/delDept',
                    {
                        id: id,
                    }
                ).then(({data}) => {
                    const result = data.data;
                    console.log(result,11111)


                    this.getData2();

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
            // 保存添加二级级
            saveAdd() {
                this.$axios.post('/api/dept/addDeptLevel2',
                    {
                        id: this.id,
                        consumeIdentity: this.addyijiform.consumeIdentity,
                        deptName: this.addyijiform.deptName
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
