<template>
    <div class="container">
        <div class="handle-box">
            <el-form ref="form" :model="form" label-width="80px" size="mini">
                <el-form-item label="消费时间">
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
            <el-table-column prop="createTime" label="消费时间" >
            </el-table-column>
            <el-table-column prop="rechargeAmount" label="消费充值金额" >
            </el-table-column>
            <el-table-column prop="subsidyAmount" label="消费补助金额" >
            </el-table-column>
        </el-table>
        <div class="pagination">
            <el-pagination background @current-change="handleCurrentChange" layout="prev, pager, next" :total=total>
            </el-pagination>
        </div>
        <el-row :gutter="20">
            <el-col :span="24">
                共：{{total}}次
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: "procter",
        data() {
            return {
                tableData: [],
                total: 0,
                form: {
                    date: [],
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
                this.form.date = [];
                this.getData();
            },

            handleCurrentChange(val) {
                this.cur_page = val;
                this.getData();
            },

            getData() {
                console.log(this.form);
                this.$axios.post('api/consume-record/cleaningRecord',
                    {
                        "currentPage": this.cur_page,
                        "endTime": this.form.date[1],
                        "pageSize": 10,
                        "startTime": this.form.date[0]

                    }
                ).then(({data}) => {
                    const result = data.data.consumeRecordDtoPage;
                    this.tableData = result.records;
                    this.total = result.total;

                });
            },
            pgetData() {
                this.cur_page = 1;
                this.getData();
            },
        },
        created() {
            this.getData()
        },
    }
</script>

<style scoped>

</style>
