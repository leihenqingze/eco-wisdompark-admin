<template>
    <div class="table">
        <div class="container">
            <div class="handle-box">
                <el-row :gutter="20">
                    <el-col :span="10">
                        <el-form ref="form" :model="searchForm" label-width="100px" size="mini">
                            <el-form-item label="编号">
                                <el-input
                                    type="text"
                                    placeholder="请输入内容"
                                    v-model="searchForm.cardSerialNo"
                                    maxlength="10"
                                    show-word-limit
                                    style="width: 50%"
                                >
                                </el-input>
                            </el-form-item>
                            <el-form-item label="姓名">
                                <el-input
                                    type="text"
                                    placeholder="请输入内容"
                                    v-model="searchForm.userName"
                                    maxlength="6"
                                    show-word-limit
                                    style="width: 50%"
                                >
                                </el-input>
                            </el-form-item>
                            <el-form-item label="手机号">
                                <el-input
                                    type="text"
                                    placeholder="请输入内容"
                                    v-model="searchForm.userPhone"
                                    maxlength="6"
                                    show-word-limit
                                    style="width: 50%"
                                >
                                </el-input>
                            </el-form-item>
                            <el-form-item label="组织架构">
                                <el-cascader
                                    :options="deptAll"
                                    v-model="searchForm.deptIds"
                                    :filterable="true"
                                    @change="deptChange"
                                ></el-cascader>
                            </el-form-item>
                            <el-form-item>
                                <el-button type="primary" @click="search">查询</el-button>
                                <el-button type="primary" @click="reset">重置</el-button>
                            </el-form-item>
                        </el-form>
                    </el-col>
                    <el-col :span="10">

                    </el-col>
                </el-row>
            </div>
            <div class="container">

                <el-table :data="userDtos" border class="table" ref="multipleTable"
                >
                    <el-table-column prop="cardSerialNo" label="卡面序列号">
                    </el-table-column>
                    <el-table-column prop="userName" label="姓名">
                    </el-table-column>
                    <el-table-column prop="deptName" label="部门名称">
                    </el-table-column>
                    <el-table-column prop="phoneNum" label="手机号">
                    </el-table-column>
                    <el-table-column prop="userCardNum" label="身份证号码">
                    </el-table-column>
                    <el-table-column prop="rechargeBalance" label="充值余额">
                    </el-table-column>
                    <el-table-column prop="subsidyBalance" label="补助余额">
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

        </div>
    </div>
</template>

<script>
    import vZz from "../../common/zuzhijiagou";

    export default {
        name: "person",
        components: {
            vZz
        },
        data() {
            return {
                searchForm: {
                    cardSerialNo: '',
                    userName: '',
                    userPhone: '',
                    deptIds: []

                },
                deptAll: [],
                userDtos: [],
                cur_page: 0,
                total: 0,
            }
        },
        mounted() {
            this.getDeptAll();
            this.searchUserDtos();
        },
        methods: {
            /*组织架构*/
            getDeptAll() {
                this.$axios.post("/api/dept/getDeptAll", {}).then(({data}) => {
                    const result = data.data;
                    this.deptAll = result;
                });
            },
            deptChange(val) {
            },
            // 分页导航
            handleCurrentChange(val) {
                this.cur_page = val;
                this.searchUserDtos();
            },
            searchUserDtos() {

                this.$axios.post('/api/user/searchUserDtos',

                    {
                        "currentPage": this.cur_page,
                        "deptId": this.searchForm.deptIds[1],
                        "pageSize": 10,
                        "phoneNum": this.searchForm.userPhone,
                        "userName": this.searchForm.userName,
                        "cardSerialNo":this.searchForm.cardSerialNo
                    }
                ).then(({data}) => {
                    const result = data.data.userDtoIPage;
                    this.userDtos = result.records || [];
                    this.total = result.total;
                })
            },
            search() {
                this.cur_page = 0;
                this.searchUserDtos()
            },
            reset() {
                this.searchForm.cardSerialNo = '';
                this.searchForm.userName = '';
                this.searchForm.userPhone = '';
                this.searchForm.deptIds = [];
            }

        }
    }
</script>

<style scoped>

</style>
