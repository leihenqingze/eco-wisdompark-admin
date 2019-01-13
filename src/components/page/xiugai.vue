<template>
    <div>
        <div class="container">
            <div class="handle-box">
                <el-row class="b-b-20" type="flex" align="middle">

                    <el-col :span="2">
                        <span>原密码</span>
                    </el-col>
                    <el-col :span="10">
                        <el-input v-model="form.oldPassWord" placeholder="原密码" class="handle-input mr10"></el-input>
                    </el-col>
                </el-row>
                <el-row class="b-b-20" type="flex" align="middle">
                    <el-col :span="2">
                        <span>新密码</span>
                    </el-col>
                    <el-col :span="10">

                        <el-input v-model="form.newPassWord" placeholder="新密码" class="handle-input mr10"></el-input>


                    </el-col>
                </el-row>
                <el-row class="b-b-20" type="flex" align="middle">
                    <el-col :span="2">
                        <span>确认新密码</span>
                    </el-col>
                    <el-col :span="10">

                        <el-input v-model="form.confirmNewPassWord" placeholder="新密码确认" class="handle-input mr10"></el-input>
                    </el-col>
                </el-row>



                <el-button type="primary" icon="search" @click="ok">提交</el-button>

            </div>



        </div>
    </div>
</template>

<script>
    export default {
        name: "xiugai",
        data(){
            return {
                form: {
                    oldPassWord:'',
                    newPassWord:'',
                    confirmNewPassWord:''
                }
            }
        },
        methods: {

            ok(){
                if (!(this.form.oldPassWord&&this.form.newPassWord&&this.form.confirmNewPassWord)){
                    this.$message.error('填写不可以为空')
                    return;
                }

               if (this.form.newPassWord && (this.form.newPassWord !== this.form.confirmNewPassWord)) {
                   this.$message.error('两次输入的新密码不一致')
                   return;
               }

                this.$axios.post('/api/sys-user/updateSysUserPass',
                    this.form
                ).then(({data}) => {
                    console.log(data)

                })

            },

        }
    }
</script>

<style scoped>
    .handle-box {
        margin-bottom: 20px;
    }
    .b-b-20{
       margin-bottom: 20px;
    }


</style>
