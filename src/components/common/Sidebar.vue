<template>
    <div class="sidebar">
        <el-menu
            class="sidebar-el-menu"
            :default-active="onRoutes"
            :collapse="collapse"
            background-color="#324157"
            text-color="#bfcbd9"
            active-text-color="#20a0ff"
            unique-opened
            router
        >
            <template v-for="item in items">
                <template v-if="item.subs">
                    <el-submenu
                        :index="item.index"
                        :key="item.index"
                    >
                        <template slot="title">
                            <i :class="item.icon"></i><span slot="title">{{ item.title }}</span>
                        </template>
                        <template v-for="subItem in item.subs">
                            <el-submenu
                                v-if="subItem.subs"
                                :index="subItem.index"
                                :key="subItem.index"
                            >
                                <template slot="title">{{ subItem.title }}</template>
                                <el-menu-item
                                    v-for="(threeItem,i) in subItem.subs"
                                    :key="i"
                                    :index="threeItem.index"
                                >
                                    {{ threeItem.title }}
                                </el-menu-item>
                            </el-submenu>
                            <el-menu-item
                                v-else
                                :index="subItem.index"
                                :key="subItem.index"
                            >
                                {{ subItem.title }}
                            </el-menu-item>
                        </template>
                    </el-submenu>
                </template>
                <template v-else>
                    <el-menu-item
                        :index="item.index"
                        :key="item.index"
                    >
                        <i :class="item.icon"></i><span slot="title">{{ item.title }}</span>
                    </el-menu-item>
                </template>
            </template>
        </el-menu>
    </div>
</template>

<script>
    import bus from '../common/bus';

    export default {
        data() {
            return {
                collapse: false,
                items: [
                    {
                        icon: 'el-icon-lx-calendar',
                        index: 'consumption',
                        title: '消费管理',

                    },
                    {
                        icon: 'el-icon-lx-emoji',
                        index: 'Finance',
                        title: '财务统计',

                    },
                    {
                        icon: 'el-icon-lx-home',
                        index: 'people',
                        title: '人员管理'
                    },
                    {
                        icon: 'el-icon-location',
                        index: 'bus',
                        title: '班车管理',

                    },
                    {
                        icon: 'el-icon-lx-calendar',
                        index: 'restaurant',
                        title: '餐厅管理',

                    },
                    {
                        icon: 'el-icon-lx-calendar',
                        index: 'apartment',
                        title: '公寓管理',

                    },
                    {
                        icon: 'el-icon-lx-calendar',
                        index: 'fitness',
                        title: '全民健身',

                    },
                    {
                        icon: 'el-icon-lx-calendar',
                        index: 'knowledge',
                        title: '知识图谱',

                    },
                    {
                        icon: 'el-icon-lx-calendar',
                        index: 'smartsearch',
                        title: '智能搜索',

                    },
                    {
                        icon: 'el-icon-lx-calendar',
                        index: 'dietary',
                        title: '运动膳食',

                    },
                    {
                        icon: 'el-icon-lx-calendar',
                        index: 'training',
                        title: '训练指标',

                    },
                    {
                        icon: 'el-icon-lx-calendar',
                        index: 'tactical',
                        title: '战术分析',

                    },

                    {
                        icon: 'el-icon-setting',
                        index: 'sys',
                        title: '系统管理',

                    },
                    /*{
                        icon: 'el-icon-lx-home',
                        index: 'dashboard',
                        title: '系统首页'
                    },
                    {
                        icon: 'el-icon-lx-cascades',
                        index: 'table',
                        title: '基础表格'
                    },*/
                    /*{
                        icon: 'el-icon-lx-copy',
                        index: 'tabs',
                        title: 'tab选项卡'
                    },
                    {
                        icon: 'el-icon-lx-calendar',
                        index: '3',
                        title: '表单相关',
                        subs: [
                            {
                                index: 'form',
                                title: '基本表单'
                            },
                            {
                                index: '3-2',
                                title: '三级菜单',
                                subs: [
                                    {
                                        index: 'editor',
                                        title: '富文本编辑器'
                                    },
                                    {
                                        index: 'markdown',
                                        title: 'markdown编辑器'
                                    },
                                ]
                            },
                            {
                                index: 'upload',
                                title: '文件上传'
                            }
                        ]
                    },
                    {
                        icon: 'el-icon-lx-emoji',
                        index: 'icon',
                        title: '自定义图标'
                    },
                    {
                        icon: 'el-icon-lx-favor',
                        index: 'charts',
                        title: 'schart图表'
                    },
                    {
                        icon: 'el-icon-rank',
                        index: 'drag',
                        title: '拖拽列表'
                    },
                    {
                        icon: 'el-icon-lx-warn',
                        index: '6',
                        title: '错误处理',
                        subs: [
                            {
                                index: 'permission',
                                title: '权限测试'
                            },
                            {
                                index: '404',
                                title: '404页面'
                            }
                        ]
                    }*/
                ]
            }
        },
        computed: {
            onRoutes() {
                if (!this.$route.redirectedFrom) {
                    return this.$route.path.replace('/', '');
                } else {
                    if (this.$route.redirectedFrom == '/consumption/consumption') {
                        this.$router.push('/consumption');
                    }
                    if (this.$route.redirectedFrom == '/consumption/Finance') {
                        this.$router.push('/Finance');
                    }
                    if (this.$route.redirectedFrom == '/consumption/people') {
                        this.$router.push('/people');
                    }
                    if (this.$route.redirectedFrom == '/consumption/bus') {
                        this.$router.push('/bus');
                    }
                    if (this.$route.redirectedFrom == '/consumption/sys') {
                        this.$router.push('/sys');
                    }
                    if (this.$route.redirectedFrom == '/Finance/consumption') {
                        this.$router.push('/consumption');
                    }
                    if (this.$route.redirectedFrom == '/Finance/Finance') {
                        this.$router.push('/Finance');
                    }
                    if (this.$route.redirectedFrom == '/Finance/people') {
                        this.$router.push('/people');
                    }
                    if (this.$route.redirectedFrom == '/Finance/bus') {
                        this.$router.push('/bus');
                    }
                    if (this.$route.redirectedFrom == '/Finance/sys') {
                        this.$router.push('/sys');
                    }
                    if (this.$route.redirectedFrom == '/people/consumption') {
                        this.$router.push('/consumption');
                    }
                    if (this.$route.redirectedFrom == '/people/Finance') {
                        this.$router.push('/Finance');
                    }
                    if (this.$route.redirectedFrom == '/people/people') {
                        this.$router.push('/people');
                    }
                    if (this.$route.redirectedFrom == '/people/bus') {
                        this.$router.push('/bus');
                    }
                    if (this.$route.redirectedFrom == '/people/sys') {
                        this.$router.push('/sys');
                    }
                }
                console.log(this.$route.redirectedFrom)


            }
        },
        created() {
            console.log(localStorage.getItem("dep"));
            console.log(this.items);

            if (localStorage.getItem("dep") == 0) {

                this.items = [
                    {
                        icon: 'el-icon-lx-calendar',
                        index: 'consumption',
                        title: '消费管理',

                    }
                ];
                this.$router.push('/consumption');

                console.log("膳食处");

            }
            if (localStorage.getItem("dep") == 1) {
                this.items = [
                    {
                        icon: 'el-icon-lx-emoji',
                        index: 'Finance',
                        title: '财务统计',

                    }
                ];
                this.$router.push('/Finance');

            }
            if (localStorage.getItem("dep") == 2) {
                this.items = [
                    {
                        icon: 'el-icon-location',
                        index: 'bus',
                        title: '班车管理',
                    }
                ];
                this.$router.push('/bus');

            }
            // 通过 Event Bus 进行组件间通信，来折叠侧边栏
            bus.$on('collapse', msg => {
                this.collapse = msg;
            })
        }
    }
</script>

<style scoped>
    .sidebar {
        display: block;
        position: absolute;
        left: 0;
        top: 70px;
        bottom: 0;
        overflow-y: scroll;
    }

    .sidebar::-webkit-scrollbar {
        width: 0;
    }

    .sidebar-el-menu:not(.el-menu--collapse) {
        width: 250px;
    }

    .sidebar > ul {
        height: 100%;
    }
</style>
