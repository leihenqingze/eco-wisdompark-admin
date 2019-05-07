<template>
    <div class="container">
        <div class="handle-box">
            <el-form ref="form" :model="form" label-width="80px">
                <el-form-item label="组织架构">
                    <el-cascader
                        :options="organizationOption"
                        v-model="form.org"
                    >
                    </el-cascader>
                </el-form-item>
                <el-form-item label="消费类型">
                    <el-radio-group v-model="form.resource">
                        <el-radio label="0">用餐</el-radio>
                        <el-radio label="1">购物</el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="时间">
                    <el-date-picker
                        v-model="form.date"
                        type="datetimerange"
                        range-separator="至"
                        start-placeholder="开始日期"
                        end-placeholder="结束日期"
                        value-format="yyyy-MM-dd HH:mm:ss" format="yyyy-MM-dd HH:mm:ss">
                    </el-date-picker>
                </el-form-item>

                <el-form-item>
                    <el-button type="primary" @click="pgetData">查询</el-button>
                    <el-button type="primary" @click="clearForm">清空</el-button>
                </el-form-item>
            </el-form>

        </div>
        <el-table :data="tableData" border class="table" ref="multipleTable">
            <el-table-column prop="cardSerialNo" label="序列号" sortable width="150">
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
</template>

<script>
    export default {
        name: "non-staff",
        data() {
            return {
                tableData: [],
                total: 0,
                form: {
                    region: '',
                    date: [],
                    address: '',
                    org: [],
                    resource:''
                },
                organizationOption: [],
                cur_page: 1,
                cdiningType: ['早餐', '午餐', '晚餐'],
                xiaofeitype: ['用餐', '购物'],
                aone: '',
                atwo: '',
                athree: '',
                afour: '',

            };
        },
        methods: {
            fdiningType(val) {
                return this.cdiningType[val.diningType];
            },
            xiaofeiType(val) {
                return this.xiaofeitype[val.type];
            },
            clearForm() {
                this.form.region = '';
                this.form.resource = '';
                this.form.date = [];
                this.form.address = '';
                this.form.org = [];
                this.getData();
            },

            /*组织架构*/
            getOrg() {
                this.$axios.post('/api/dept/getDeptAllByConsumeIdentity',
                    {
                        /*训练局穿0*/
                        /*非训练局穿1*/

                        "consumeIdentity": 1
                    }
                ).then(({data}) => {
                    const result = data.data;
                    this.organizationOption = result

                })


            },
            handleCurrentChange(val) {
                this.cur_page = val;
                this.getData();
            },

            getData() {
                console.log(this.form);
                this.$axios.post('api/consume-record/notTrainingStaffRecord',
                    {
                        "consomeType": this.form.resource,
                        "currentPage": this.cur_page,
                        "deptId": this.form.org[1],
                        "endTime": this.form.date[1],
                        "pageSize": 10,
                        "startTime": this.form.date[0]
                    }
                ).then(({data}) => {
                    console.log(data);
                    const result = data.data.consumeRecordDtoPage;
                    const all = data.data;
                    this.tableData = result.records;
                    this.total= result.total;
                    this.aone = all.currentPageAfterTaxAmount
                    this.atwo = all.currentPageAmount
                    this.athree = all.totalAfterTaxAmount
                    this.afour = all.totalAmount
                });
            },
            pgetData() {
                this.cur_page = 1;
                this.getData();
            },
        },
        created() {
            this.getOrg();
            this.getData()
        },

    }
</script>

<style scoped>

</style>
