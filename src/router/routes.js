import Layout from '@/layout'

export default [
    {
        path: '/login',
        hidden: true,
        component: () => import('@/views/login'),
    },
    {
        path: '/404',
        meta: {
            title: "element",
            icon: 'el-icon-eleme'
        },
        component: Layout,
        children: [
            {
                path: 'hggf',
                meta: {
                    title: "element",
                    icon: 'el-icon-eleme'
                },
                component: () => import('@/views/404'),
            }
        ]
    },
    {
        path: '/',
        component: Layout,
        meta: {
            title: "系统管理",
            icon: 'el-icon-eleme'
        },
        children: [
            {
                path: 'tyhgj',
                meta: {
                    title: "用户配置",
                    icon: 'el-icon-eleme'
                },
                component: () => import('@/layout/components/AppMain'),
                children: [
                    {
                        path: 'ffsdfg',
                        meta: {
                            title: "手机配置",
                        },
                        component: () => import('@/views/404'),
                    },
                    {
                        path: 'sdff',
                        meta: {
                            title: "手机配置"
                        },
                        component: () => import('@/views/404'),
                    }, {
                        path: 'ffsfdgddfg',
                        meta: {
                            title: "手机配置"
                        },
                        component: () => import('@/views/404'),
                    }
                ]
            },
            {
                path: 'aaaaa',
                meta: {
                    title: "手机配置"
                },
                component: () => import('@/views/404'),
            },
            {
                path: 'ccc',
                meta: {
                    title: "用户权限"
                },
                component: () => import('@/views/404'),
            },
            {
                path: 'dddd',
                meta: {
                    title: "自动签到"
                },
                component: () => import('@/views/404'),
            },
            {
                path: 'eee',
                meta: {
                    title: "销售类型"
                },
                component: () => import('@/views/404'),
            },
            {
                path: 'ffff',
                meta: {
                    title: "时段促销"
                },
                component: () => import('@/views/404'),
            },
            {
                path: 'gggg',
                meta: {
                    title: "搭赠销售"
                },
                component: () => import('@/views/404'),
            }
        ]
    },
    {
        path: '/Home',
        component: Layout,
        meta: {
            title: "系统管理",
            icon: 'el-icon-video-camera-solid'
        },
        children: [
            {
                path: '/',
                meta: {
                    title: "用户配置",
                },
                component: () => import('@/views/login/index'),
            },
            {
                path: 'aaaaa',
                meta: {
                    title: "手机配置"
                },
                component: () => import('@/views/404'),
            },
            {
                path: 'ccc',
                meta: {
                    title: "用户权限"
                },
                component: () => import('@/views/404'),
            },
            {
                path: 'dddd',
                meta: {
                    title: "自动签到"
                },
                component: () => import('@/views/404'),
            },
            {
                path: 'eee',
                meta: {
                    title: "销售类型"
                },
                component: () => import('@/views/404'),
            },
            {
                path: 'ffff',
                meta: {
                    title: "时段促销"
                },
                component: () => import('@/views/404'),
            },
            {
                path: 'gggg',
                meta: {
                    title: "搭赠销售"
                },
                component: () => import('@/views/404'),
            }
        ]
    },
    {
        path: '/login',
        component: () => import('@/views/login/index'),
        hidden: true
    }
]