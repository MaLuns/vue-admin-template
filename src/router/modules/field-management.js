import Layout from '@/layout'

export default {
    path: '/field-manage',
    component: Layout,
    meta: {
        title: '巡店管理',
        icon: 'el-icon-s-ticket'
    },
    children: [
        {
            path: 'exchange-prizeset',
            meta: {
                title: '兑奖券设置',
                icon: 'el-icon-eleme'
            },
            component: () => import('@/views/test')
        }, {
            path: 'sale-protocol',
            meta: {
                title: '配货协议',
                icon: 'el-icon-eleme'
            },
            component: () => import('@/views/test')
        }, {
            path: 'lineset',
            meta: {
                title: '线路设置',
                icon: 'el-icon-eleme'
            },
            component: () => import('@/views/test')
        }, {
            path: 'customer-line',
            meta: {
                title: '线路客户',
                icon: 'el-icon-eleme'
            },
            component: () => import('@/views/test')
        }, {
            path: 'call-planning',
            meta: {
                title: '拜访规划',
                icon: 'el-icon-eleme'
            },
            component: () => import('@/views/test')
        }, {
            path: 'jurisdiction',
            meta: {
                title: '管辖人员',
                icon: 'el-icon-eleme'
            },
            component: () => import('@/views/test')
        }, {
            path: 'workbench-flowset',
            meta: {
                title: '工作流程',
                icon: 'el-icon-eleme'
            },
            component: () => import('@/views/test')
        }
    ]
}