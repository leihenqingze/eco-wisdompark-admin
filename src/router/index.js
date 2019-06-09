import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    routes: [{
            path: '/',
            redirect: '/consumption'
        },
        {
            path: '/',
            component: resolve => require(['../components/common/Home.vue'], resolve),
            meta: { title: '自述文件' },
            children: [

                {
                    path: '/consumption',
                    component: resolve => require(['../components/page/consumption.vue'], resolve),
                    meta: { title: '消费管理' },
                    children: [
                        { path: '/making-card', redirect: 'making-card' },
                        { path: 'making-card', component: resolve => require(['../components/page/consumption-admin-page/making-card.vue'], resolve) },
                        { path: 'recharge-card', component: resolve => require(['../components/page/consumption-admin-page/recharge-card.vue'], resolve) },
                        { path: 'auto-subsidy', component: resolve => require(['../components/page/consumption-admin-page/auto-subsidy.vue'], resolve) },
                        { path: 'manual-subsidy', component: resolve => require(['../components/page/consumption-admin-page/manual-subsidy.vue'], resolve) },
                        { path: 'report-loss', component: resolve => require(['../components/page/consumption-admin-page/report-loss.vue'], resolve) },
                        { path: 'return-card', component: resolve => require(['../components/page/consumption-admin-page/return-card.vue'], resolve) }
                    ]
                },
                {
                    path: '/Finance',
                    component: resolve => require(['../components/page/Finance.vue'], resolve),
                    meta: { title: '财务管理' },
                    children: [
                        { path: '/staff', redirect: 'staff' },
                        { path: 'staff', component: resolve => require(['../components/page/finance-admin-page/staff.vue'], resolve) },
                        { path: 'non-staff', component: resolve => require(['../components/page/finance-admin-page/non-staff.vue'], resolve) },
                        { path: 'guard', component: resolve => require(['../components/page/finance-admin-page/guard.vue'], resolve) },
                        { path: 'procter', component: resolve => require(['../components/page/finance-admin-page/procter.vue'], resolve) },
                    ]
                },
                {
                    path: '/people',
                    component: resolve => require(['../components/page/peopel.vue'], resolve),
                    meta: { title: '人员管理' },
                    children: [
                        { path: '/person', redirect: 'person' },
                        { path: 'person', component: resolve => require(['../components/page/person-manager/person.vue'], resolve) },
                        { path: 'dept', component: resolve => require(['../components/page/person-manager/dept.vue'], resolve) },
                    ]
                },
                {
                    path: '/bus',
                    component: resolve => require(['../components/page/bus.vue'], resolve),
                    meta: { title: '班车管理' }
                },
                {
                    path: '/sys',
                    component: resolve => require(['../components/page/sys.vue'], resolve),
                    meta: { title: '系统管理' }
                },
                {
                    path: '/restaurant',
                    component: resolve => require(['../components/page/restaurant.vue'], resolve),
                    meta: { title: '餐厅管理' }
                },
                {
                    path: '/apartment',
                    component: resolve => require(['../components/page/apartment.vue'], resolve),
                    meta: { title: '公寓管理' }
                },
                {
                    path: '/fitness',
                    component: resolve => require(['../components/page/fitness.vue'], resolve),
                    meta: { title: '全民健身' }
                },
                {
                    path: '/knowledge',
                    component: resolve => require(['../components/page/knowledge.vue'], resolve),
                    meta: { title: '知识图谱' }
                },
                {
                    path: '/dietary',
                    component: resolve => require(['../components/page/dietary.vue'], resolve),
                    meta: { title: '运动膳食' }
                },
                {
                    path: '/tactical',
                    component: resolve => require(['../components/page/tactical.vue'], resolve),
                    meta: { title: '战术分析' }
                },

                {
                    path: '/erji',
                    component: resolve => require(['../components/page/erjijiagou.vue'], resolve),
                    meta: { title: '二级架构' }
                },


                {
                    path: '/xiugai',
                    component: resolve => require(['../components/page/xiugai.vue'], resolve),
                    meta: { title: '修改密码' }
                },



















                {
                    path: '/dashboard',
                    component: resolve => require(['../components/page/Dashboard.vue'], resolve),
                    meta: { title: '系统首页' }
                },
                {
                    path: '/icon',
                    component: resolve => require(['../components/page/Icon.vue'], resolve),
                    meta: { title: '自定义图标' }
                },
                {
                    path: '/table',
                    component: resolve => require(['../components/page/BaseTable.vue'], resolve),
                    meta: { title: '基础表格' }
                },
                {
                    path: '/tabs',
                    component: resolve => require(['../components/page/Tabs.vue'], resolve),
                    meta: { title: 'tab选项卡' }
                },
                {
                    path: '/form',
                    component: resolve => require(['../components/page/BaseForm.vue'], resolve),
                    meta: { title: '基本表单' }
                },
                {
                    // 富文本编辑器组件
                    path: '/editor',
                    component: resolve => require(['../components/page/VueEditor.vue'], resolve),
                    meta: { title: '富文本编辑器' }
                },
                {
                    // markdown组件
                    path: '/markdown',
                    component: resolve => require(['../components/page/Markdown.vue'], resolve),
                    meta: { title: 'markdown编辑器' }
                },
                {
                    // 图片上传组件
                    path: '/upload',
                    component: resolve => require(['../components/page/Upload.vue'], resolve),
                    meta: { title: '文件上传' }
                },
                {
                    // vue-schart组件
                    path: '/charts',
                    component: resolve => require(['../components/page/BaseCharts.vue'], resolve),
                    meta: { title: 'schart图表' }
                },
                {
                    // 拖拽列表组件
                    path: '/drag',
                    component: resolve => require(['../components/page/DragList.vue'], resolve),
                    meta: { title: '拖拽列表' }
                },
                {
                    // 权限页面
                    path: '/permission',
                    component: resolve => require(['../components/page/Permission.vue'], resolve),
                    meta: { title: '权限测试', permission: true }
                },
                {
                    path: '/404',
                    component: resolve => require(['../components/page/404.vue'], resolve),
                    meta: { title: '404' }
                },
                {
                    path: '/403',
                    component: resolve => require(['../components/page/403.vue'], resolve),
                    meta: { title: '403' }
                }
            ]
        },
        {
            path: '/login',
            component: resolve => require(['../components/page/Login.vue'], resolve)
        },
        {
            path: '*',
            redirect: '/404'
        }
    ]
})
