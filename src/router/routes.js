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
        path: '/dashboard',
        name: 'dashboard',
        component: Layout,
        meta: {
            title: 'Dashboard',
            icon: 'el-icon-s-marketing'
        },
        children: [
            {
                path: 'analysis',
                name: 'analysis',
                meta: {
                    title: '分析页',
                },
                component: () => import('@/views/dashboard/analysis')
            },
            {
                path: 'monitor',
                name: 'monitor',
                meta: {
                    title: '监控页',
                },
                component: () => import('@/views/dashboard/monitor')
            },
            {
                path: 'workplace',
                name: 'workplace',
                meta: {
                    title: '工作台',
                },
                component: () => import('@/views/dashboard/workplace')
            }
        ]
    },
    {
        path: '/form',
        name: 'form',
        component: Layout,
        meta: {
            title: '表单页面',
            icon: 'el-icon-tickets'
        },
        children: [
            {
                path: 'basic-form',
                name: 'basic_form',
                meta: {
                    title: '基础表单',
                },
                component: () => import('@/views/form/basic-form')
            },
            {
                path: 'step-form',
                name: 'step_form',
                meta: {
                    title: '分步表单',
                },
                component: () => import('@/views/form/step-form')
            },
            {
                path: 'advanced-form',
                name: 'advanced_form',
                meta: {
                    title: '高级表单',
                },
                component: () => import('@/views/form/advanced-form')
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