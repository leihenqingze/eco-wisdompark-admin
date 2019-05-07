<template>
    <div>
        <div class="container">
            <div class="form-box">
                <el-form :model="cardInfoDto" ref label-width="100px" class="demo-dynamic">
                    <el-form-item prop="num" label="物理ID">
                        <el-input
                            v-model="cardId"
                            :autofocus="true"
                            @change="cardIdChange"
                            :readonly="cardReadonly"
                        ></el-input>
                    </el-form-item>
                    <el-form-item label="姓名">
                        <span>{{cardInfoDto.userName}}</span>
                    </el-form-item>

                    <el-form-item label="手机号">
                        <span>{{cardInfoDto.phoneNum}}</span>
                    </el-form-item>
                    <el-form-item label="身份证号">
                        <span>{{cardInfoDto.userCardNum}}</span>
                    </el-form-item>

                    <el-form-item label="组织架构名称">
                        <span>{{cardInfoDto.deptName}}</span>
                    </el-form-item>

                    <el-form-item label="充值余额">
                        <span>{{cardInfoDto.rechargeBalance}}</span>
                    </el-form-item>

                    <el-form-item label="补助余额">
                        <span>{{cardInfoDto.subsidyBalance}}</span>
                    </el-form-item>

                    <el-form-item label="总余额">
                        <span>{{cardInfoDto.totalBalance}}</span>
                    </el-form-item>

                    <el-form-item label="充值">
                        <el-input-number
                            @change="rechargeBalanceChange"
                            v-model="rechargeBalance"
                            :min="0"
                            :max="99999"
                            :step="100"
                        ></el-input-number>
                    </el-form-item>

                    <el-form-item>
                        <el-button type="primary" @click="recharge()">提交</el-button>
                        <el-button type="primary" @click="reset()">重置</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </div>
        <div class="container">
            <!--<div class="form-box">-->
                <!--<el-upload-->
                    <!--class="upload-demo"-->
                    <!--drag-->
                    <!--action="http://localhost:60001/wisdompark/api/cpu-card/recharge/batch/fileUpload"-->
                    <!--:on-success="handleSuccess"-->
                    <!--multiple-->
                    <!--:data="pppss"-->
                <!--&gt;-->
                    <!--<i class="el-icon-upload"></i>-->
                    <!--<div class="el-upload__text">-->
                        <!--将文件拖到此处，或Å-->
                        <!--<em>点击上传</em>-->
                    <!--</div>-->
                    <!--<div class="el-upload__tip" slot="tip">只能上传EXCEL文件并且充值人数不能超过200</div>-->
                <!--</el-upload>-->
            <!--</div>-->
            <el-upload
                class="upload-file"
                drag
                :action="doUpload"
                :data="pppss">
                <i class="el-icon-upload"></i>
                <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
            </el-upload>
        </div>
    </div>
</template>
<script>
    export default {
        name: "recharge-card",
        data() {
            return {
                cardInfoDto: {
                    id: 0,
                    userName: "",
                    phoneNum: "",
                    userCardNum: "",
                    deptId: 0,
                    deptName: "",
                    rechargeBalance: "",
                    subsidyBalance: "",
                    totalBalance: "",
                    reportLossStstus: 0
                },
                cardReadonly: false,
                cardId: "",
                rechargeBalance: 0,
                pppss:{},
                doUpload:"/api/cpu-card/recharge/batch/fileUpload"

            };
        },
        mounted() {
        },
        methods: {
            handleSuccess(res, file, fileList) {
            },
            cardIdChange(value) {
                if (value != null && value != "") {
                    this.cardReadonly = true;
                    this.query(value);
                }
            },
            query(value) {
                this.$axios
                    .post("/api/cpu-card/query", {
                        cardId: value
                    })
                    .then(({data}) => {
                        if (data != null && data.code == 200) {
                            const result = data.data;
                            this.cardInfoDto = result;
                        } else {
                            this.$notify({
                                title: "警告",
                                message: data.message,
                                type: "warning"
                            });
                            this.cardReadonly = false;
                        }
                    });
            },
            recharge() {
                this.$axios
                    .post("/api/cpu-card/recharge", {
                        cardId: this.cardId,
                        rechargeAmt: this.rechargeBalance
                    })
                    .then(({data}) => {
                        const result = data.data;
                        if (result) {
                            this.$message.success("成功");
                            this.query(this.cardId);
                        } else {
                            this.$message.error(data.message);
                        }
                    });
            },
            reset() {
                this.cardReadonly = false;
                this.cardId = "";
                this.cardInfoDto.userName = "";
                this.cardInfoDto.phoneNum = "";
                this.cardInfoDto.userCardNum = "";
                this.cardInfoDto.deptName = "";
                this.cardInfoDto.rechargeBalance = "";
                this.cardInfoDto.subsidyBalance = "";
                this.cardInfoDto.totalBalance = "";
                this.rechargeBalance = 0;
            },
            rechargeBalanceChange(value) {
            }
        }
    };
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
        text-align: center;
    }

    .table {
        width: 100%;
        font-size: 14px;
    }

    .red {
        color: #ff0000;
    }
</style>
