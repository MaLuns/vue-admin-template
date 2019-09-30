import Layout from '@/layout'
/* import WltManage from './modules/wlt-management'
import FieldManage from './modules/field-management'
import WltDispatch from './modules/wlt-dispatch'



export default [
    WltManage,
    FieldManage,
    WltDispatch,
    {
        path: '/',
        name: "Home",
        hidden: true,
        component: Layout,
        children: [
            {
                path: '/',
                component: () => import('@/views/home')
            }
        ]
    },
    {
        path: '/login',
        name: 'login',
        hidden: true,
        component: () => import('@/views/login'),
    },
    {
        path: '/404',
        hidden: true,
        component: () => import('@/views/404')
    },
    {
        path: '*',
        redirect: '/404',
        hidden: true
    }
] */



export default [
    {
        path: '/',
        name: "Home",
        hidden: true,
        component: Layout,
        children: [
            {
                path: '/',
                component: () => import('@/views/home')
            }
        ]
    },
    {
        path: '/chart',
        name: 'chart',
        component: Layout,
        meta: {
            title: '图表',
            icon: 'el-icon-s-marketing'
        },
        children: [
            {
                path: 'basic-chart',
                meta: {
                    title: '标准列表',
                },
                component: () => import('@/views/chart-demo')
            }
        ]
    },
    {
        path: '/list',
        name: 'list',
        component: Layout,
        meta: {
            title: '列表页',
            icon: 'el-icon-s-management'
        },
        children: [
            {
                path: 'basic-list',
                meta: {
                    title: '标准列表',
                },
                component: () => import('@/views/home')
            },
            {
                path: 'table-list',
                meta: {
                    title: '查询表格',
                },
                component: () => import('@/views/home')
            },
            {
                path: 'card-list',
                meta: {
                    title: '卡片列表',
                },
                component: () => import('@/views/home')
            }
        ]
    },
    {
        path: '/exception',
        name: 'exception',
        component: Layout,
        meta: {
            title: '异常页',
            icon: 'el-icon-warning'
        },
        children: [
            {
                path: '403',
                meta: {
                    title: '无权限页面(403)',
                },
                component: () => import('@/views/exception/403')
            },
            {
                path: '404',
                meta: {
                    title: '未找到页面(404)',
                },
                component: () => import('@/views/exception/404')
            },
            {
                path: '500',
                meta: {
                    title: '服务器异常(500)',
                },
                component: () => import('@/views/exception/500')
            }
        ]
    },
    {
        path: '/login',
        name: 'login',
        hidden: true,
        component: () => import('@/views/login'),
    },
    {
        path: '/404',
        hidden: true,
        component: () => import('@/views/exception/404')
    },
    {
        path: '*',
        redirect: '/404',
        hidden: true
    }
]