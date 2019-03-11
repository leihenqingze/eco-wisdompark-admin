<template>
    <div>
        <div class="container">
            <div class="handle-box">
                <el-form :model="ruleForm2" status-icon   label-width="100px" class="demo-ruleForm">
                    <el-row >
                        <el-col :span="4">
                            <el-form-item label="用户ID" >
                                <el-input  v-model="ruleForm2.id" autocomplete="off"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="4">


                            <el-form-item label="用户名" >
                                <el-input v-model="ruleForm2.sysUserName" autocomplete="off"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="6">
                            <el-form-item label="手机号" >
                                <el-input v-model="ruleForm2.sysUserPhone"></el-input>
                            </el-form-item>

                        </el-col>
                        <el-col :span="6">
                            <el-form-item label="部门">
                                <el-select v-model="ruleForm2.sysUserDepartment" placeholder="请选择">
                                    <el-option
                                        v-for="item in options"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                    </el-option>
                                </el-select>
                            </el-form-item>

                        </el-col>
                        <el-col :span="3">
                            <el-form-item>
                                <el-button type="primary" @click="search">提交</el-button>

                            </el-form-item>
                        </el-col>
                    </el-row>
                </el-form>
                <el-button type="text" icon="el-icon-edit" @click="open">添加用户</el-button>
            </div>
            <el-table :data="tableData" border class="table" ref="multipleTable" >

                <el-table-column prop="id" label="卡面序列号" >
                </el-table-column>

                <el-table-column prop="sysUserName" label="姓名" sortable width="150">
                </el-table-column>

                <el-table-column prop="sysUserPhone" label="手机号" >
                </el-table-column>
                <el-table-column prop="sysUserDepartment" label="部门" :formatter="fbumen">
                </el-table-column>


            </el-table>
            <div class="pagination">
                <el-pagination background @current-change="handleCurrentChange" layout="prev, pager, next" :total=total>
                </el-pagination>
            </div>
        </div>




        <el-dialog title="添加用户" :visible.sync="addVisible" width="30%">
            <el-form ref="form" :model="addForm" label-width="100px">
                <el-form-item label="部门">
                    <el-cascader
                        placeholder="请选择部门 "
                        :options="options"
                        v-model="addForm.sysUserDepartment"
                        filterable
                    ></el-cascader>
                </el-form-item>
                <el-form-item label="姓名">
                    <el-input v-model="addForm.sysUserName"></el-input>
                </el-form-item>
                <el-form-item label="手机号码">
                    <el-input v-model="addForm.sysUserPhone"></el-input>
                </el-form-item>


            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="addVisible = false">取 消</el-button>
                <el-button type="primary" @click="addUser">确 定</el-button>
            </span>
        </el-dialog>

    </div>
</template>

<script>
    export default {
        name: "sys",
        data() {
            return {
                cur_page:1,
                ruleForm2:{
                    id: '',
                    sysUserName:'',
                    sysUserPhone:'',
                    sysUserDepartment:'',
                    currentPage:'',
                    pageSize:10
                },

                addForm:{
                    "sysUserDepartment": 0,
                    "sysUserName": "",
                    "sysUserPhone": ""
                },
                total:0,
                options: [
                   {
                    value: 0,
                    label: '膳食处'
                    }, {
                    value: 1,
                    label: '财务处'
                    }, {
                    value: 2,
                    label: '保卫处'
                    },
                    {
                       value: 3,
                        label: '管理员'
                    }],
                sysUserDepartmentArry:['膳食处','财务处','保卫处'],

                addVisible:false,


                tableData: []
            }
        },
        methods:{
            // 分页导航
            handleCurrentChange(val) {
                this.cur_page = val;
                this.getData();
            },
            /*组织架构*/
            getOrg(){
                this.$axios.post('/api/dept/getDeptAll',
                    {}
                ).then(({data}) => {
                    const result = data.data;
                    this.org = result
                })

            },
            getData(){

                this.ruleForm2.currentPage = this.cur_page;
                this.$axios.post('/api/sys-user/getSysUserList',
                    this.ruleForm2
                ).then(({data}) => {
                    const result = data.data;
                    this.tableData = result.records || [];
                    this.total = result.total;
                })


            },

            fbumen(val){
                return this.options[val.sysUserDepartment].label

            },
            search(){

                this.ruleForm2.currentPage = 1;
                console.log( this.ruleForm2)
                this.getData()
            },


            open(){
                this.addVisible = true;
            },
            addUser(){
                this.$axios.post('/api/sys-user/saveSysUser',
                    {
                        "sysUserDepartment": this.addForm.sysUserDepartment[0],
                        "sysUserName": this.addForm.sysUserName,
                        "sysUserPhone": this.addForm.sysUserPhone
                    }
                ).then(({data}) => {


                })

            }

        },
        created() {
            this.getOrg();
            this.getData()
        },
    }
</script>

<style scoped>

    .container {
        margin-bottom: 20px;

    }
</style>

