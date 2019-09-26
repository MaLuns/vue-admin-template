import Layout from '@/layout'

export default {
    path: '/wlt-dispatch',
    component: Layout,
    meta: {
        title: '配送管理',
        icon: 'el-icon-s-ticket'
    },
    children: [
        {
            path: 'dispatch-carinfo',
            meta: {
                title: '车辆管理',
                icon: 'el-icon-eleme'
            },
            component: () => import('@/views/test')
        }, {
            path: 'car-loadbill',
            meta: {
                title: '仓库装车单',
                icon: 'el-icon-eleme'
            },
            component: () => import('@/views/test')
        }, {
            path: 'carloadbill-of-map',
            meta: {
                title: '地图选单',
                icon: 'el-icon-eleme'
            },
            component: () => import('@/views/test')
        }, {
            path: 'wlt-dispatch-billset',
            meta: {
                title: '配送业务配置',
                icon: 'el-icon-eleme'
            },
            component: () => import('@/views/test')
        }, {
            path: 'dispatch-report',
            meta: {
                title: '配送送达率',
                icon: 'el-icon-eleme'
            },
            component: () => import('@/views/test')
        },
    ]
}