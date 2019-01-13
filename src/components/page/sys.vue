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
                <el-form-item label="组织架构">
                    <el-cascader
                        placeholder="请输入你想要查找的架构名称 "
                        :options="org"
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
                        value: '',
                        label: '全部'
                    },{
                    value: '0',
                    label: '膳食处'
                    }, {
                    value: '1',
                    label: '财务处'
                    }, {
                    value: '2',
                    label: '保卫处'
                    }],
                sysUserDepartmentArry:['膳食处','财务处','保卫处'],

                addVisible:false,
                org: [
                    {
                        value: 'zhinan',
                        label: '指南',
                        children: [{
                            value: 'shejiyuanze',
                            label: '设计原则',
                            children: [{
                                value: 'yizhi',
                                label: '一致'
                            }, {
                                value: 'fankui',
                                label: '反馈'
                            }, {
                                value: 'xiaolv',
                                label: '效率'
                            }, {
                                value: 'kekong',
                                label: '可控'
                            }]
                        }, {
                            value: 'daohang',
                            label: '导航',
                            children: [{
                                value: 'cexiangdaohang',
                                label: '侧向导航'
                            }, {
                                value: 'dingbudaohang',
                                label: '顶部导航'
                            }]
                        }]
                    },
                    {
                        value: 'zujian',
                        label: '组件',
                        children: [{
                            value: 'basic',
                            label: 'Basic',
                            children: [{
                                value: 'layout',
                                label: 'Layout 布局'
                            }, {
                                value: 'color',
                                label: 'Color 色彩'
                            }, {
                                value: 'typography',
                                label: 'Typography 字体'
                            }, {
                                value: 'icon',
                                label: 'Icon 图标'
                            }, {
                                value: 'button',
                                label: 'Button 按钮'
                            }]
                        }, {
                            value: 'form',
                            label: 'Form',
                            children: [{
                                value: 'radio',
                                label: 'Radio 单选框'
                            }, {
                                value: 'checkbox',
                                label: 'Checkbox 多选框'
                            }, {
                                value: 'input',
                                label: 'Input 输入框'
                            }, {
                                value: 'input-number',
                                label: 'InputNumber 计数器'
                            }, {
                                value: 'select',
                                label: 'Select 选择器'
                            }, {
                                value: 'cascader',
                                label: 'Cascader 级联选择器'
                            }, {
                                value: 'switch',
                                label: 'Switch 开关'
                            }, {
                                value: 'slider',
                                label: 'Slider 滑块'
                            }, {
                                value: 'time-picker',
                                label: 'TimePicker 时间选择器'
                            }, {
                                value: 'date-picker',
                                label: 'DatePicker 日期选择器'
                            }, {
                                value: 'datetime-picker',
                                label: 'DateTimePicker 日期时间选择器'
                            }, {
                                value: 'upload',
                                label: 'Upload 上传'
                            }, {
                                value: 'rate',
                                label: 'Rate 评分'
                            }, {
                                value: 'form',
                                label: 'Form 表单'
                            }]
                        }, {
                            value: 'data',
                            label: 'Data',
                            children: [{
                                value: 'table',
                                label: 'Table 表格'
                            }, {
                                value: 'tag',
                                label: 'Tag 标签'
                            }, {
                                value: 'progress',
                                label: 'Progress 进度条'
                            }, {
                                value: 'tree',
                                label: 'Tree 树形控件'
                            }, {
                                value: 'pagination',
                                label: 'Pagination 分页'
                            }, {
                                value: 'badge',
                                label: 'Badge 标记'
                            }]
                        }, {
                            value: 'notice',
                            label: 'Notice',
                            children: [{
                                value: 'alert',
                                label: 'Alert 警告'
                            }, {
                                value: 'loading',
                                label: 'Loading 加载'
                            }, {
                                value: 'message',
                                label: 'Message 消息提示'
                            }, {
                                value: 'message-box',
                                label: 'MessageBox 弹框'
                            }, {
                                value: 'notification',
                                label: 'Notification 通知'
                            }]
                        }, {
                            value: 'navigation',
                            label: 'Navigation',
                            children: [{
                                value: 'menu',
                                label: 'NavMenu 导航菜单'
                            }, {
                                value: 'tabs',
                                label: 'Tabs 标签页'
                            }, {
                                value: 'breadcrumb',
                                label: 'Breadcrumb 面包屑'
                            }, {
                                value: 'dropdown',
                                label: 'Dropdown 下拉菜单'
                            }, {
                                value: 'steps',
                                label: 'Steps 步骤条'
                            }]
                        }, {
                            value: 'others',
                            label: 'Others',
                            children: [{
                                value: 'dialog',
                                label: 'Dialog 对话框'
                            }, {
                                value: 'tooltip',
                                label: 'Tooltip 文字提示'
                            }, {
                                value: 'popover',
                                label: 'Popover 弹出框'
                            }, {
                                value: 'card',
                                label: 'Card 卡片'
                            }, {
                                value: 'carousel',
                                label: 'Carousel 走马灯'
                            }, {
                                value: 'collapse',
                                label: 'Collapse 折叠面板'
                            }]
                        }]
                    },
                    {
                        value: 'ziyuan',
                        label: '资源',
                        children: [{
                            value: 'axure',
                            label: 'Axure Components'
                        }, {
                            value: 'sketch',
                            label: 'Sketch Templates'
                        }, {
                            value: 'jiaohu',
                            label: '组件交互文档'
                        }]
                    }
                    ],

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
                    console.log(data)

                    const result = data.data;
                    this.org = result

                })


            },
            getData(){

                this.ruleForm2.currentPage = this.cur_page;
                this.$axios.post('/api/sys-user/getSysUserList',
                    this.ruleForm2
                ).then(({data}) => {
                    console.log(data)
                    const result = data.data;
                    this.tableData = result.records || [];
                    this.total = result.total;
                })


            },

            fbumen(val){
                console.log(val.sysUserDepartment)
                return this.sysUserDepartmentArry[val.sysUserDepartment]

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






                this.$axios.post('/api/sys-user/updateSysUserPass',
                    {
                        "sysUserDepartment": this.addForm.sysUserDepartment[1],
                        "sysUserName": this.addForm.sysUserName,
                        "sysUserPhone": this.addForm.sysUserPhone
                    }
                ).then(({data}) => {
                    console.log(data)

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

