import Layout from '@/layout'

export default
    {
        path: '/wlt-manage',
        component: Layout,
        meta: {
            title: '系统管理',
            icon: 'el-icon-video-camera-solid'
        },
        children: [
            {
                path: 'user-configuration',
                meta: {
                    title: '用户配置', icon: 'el-icon-s-help'
                },
                component: () => import('@/views/wlt-manage/user-configuration'),
                children: [
                    {
                        path: 'print-configuration',
                        meta: {
                            title: '系统全局配置', icon: 'el-icon-eleme'
                        },
                        component: () => import('@/views/test')
                    }
                ],
            },
            {
                path: 'print-configuration',
                meta: {
                    title: '打印配置', icon: 'el-icon-s-finance'
                },
                component: () => import('@/views/test')
            },
            {
                path: 'mobile-configuration',
                meta: {
                    title: '手机配置', icon: 'el-icon-s-marketing'
                },
                component: () => import('@/views/test')
            },
            {
                path: 'user-limit',
                meta: {
                    title: '用户权限', icon: 'el-icon-eleme'
                },
                component: () => import('@/views/test')
            },
            {
                path: 'auto-sign',
                meta: {
                    title: '自动签到', icon: 'el-icon-eleme'
                },
                component: () => import('@/views/test')
            },
            {
                path: 'bill-sale-item',
                meta: {
                    title: '销售类型', icon: 'el-icon-eleme'
                },
                component: () => import('@/views/test')
            },
            {
                path: 'time-promotion',
                meta: {
                    title: '时段促销', icon: 'el-icon-eleme'
                },
                component: () => import('@/views/test')
            },
            {
                path: 'partner-gift',
                meta: {
                    title: '搭赠销售', icon: 'el-icon-eleme'
                },
                component: () => import('@/views/test')
            },
            {
                path: 'ptype-info',
                meta: {
                    title: '商品信息', icon: 'el-icon-eleme'
                },
                component: () => import('@/views/test')
            },
            {
                path: 'btype-info',
                meta: {
                    title: '客户信息', icon: 'el-icon-eleme'
                },
                component: () => import('@/views/test')
            },
            {
                path: 'btype-modify',
                meta: {
                    title: '修改客户', icon: 'el-icon-eleme'
                },
                component: () => import('@/views/test')
            },
            {
                path: 'QRCode-url',
                meta: {
                    title: '地址二维码', icon: 'el-icon-eleme'
                },
                component: () => import('@/views/test')
            },
            {
                path: 'clean-data',
                meta: {
                    title: '数据清理', icon: 'el-icon-eleme'
                },
                component: () => import('@/views/test')
            },
            {
                path: 'clean-data',
                meta: {
                    title: '数据清理', icon: 'el-icon-eleme'
                },
                component: () => import('@/views/test')
            },
            {
                path: 'clean-data',
                meta: {
                    title: '数据清理', icon: 'el-icon-eleme'
                },
                component: () => import('@/views/test')
            },
            {
                path: 'clean-data',
                meta: {
                    title: '数据清理', icon: 'el-icon-eleme'
                },
                component: () => import('@/views/test')
            },
            {
                path: 'clean-data',
                meta: {
                    title: '数据清理', icon: 'el-icon-eleme'
                },
                component: () => import('@/views/test')
            },
            {
                path: 'clean-data',
                meta: {
                    title: '数据清理', icon: 'el-icon-eleme'
                },
                component: () => import('@/views/test')
            }
        ]
    }
