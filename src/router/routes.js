import Layout from '@/components/layout'
import CacheView from '@/components/cache-view'

/**
 * meta: {
 *   title:String 显示在侧边栏、面包屑和标签栏的文字
 *   hideInMenu: (false) 设为true后在左侧菜单不会显示该页面选项
 *   icon: 左侧菜单、面包屑和标签导航处显示的图标
 *   notCache: (false) 设为true后对页面不进行缓存, 如果需要缓存,需要设置页面组件name属性和路由配置的name一致
 * }
 */

export default [
    {
        path: '/',
        name: "_Layout",
        component: Layout,
        redirect: '/home',
        meta: {
            hideInMenu: true,
        },
        children: [
            {
                path: 'home',
                name: "home",
                meta: {
                    hideInMenu: true,
                    title: '首页',
                },
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
                name: 'basic-form',
                meta: {
                    title: '基础表单',
                },
                component: () => import('@/views/form/basic-form')
            },
            {
                path: 'step-form',
                name: 'step-form',
                meta: {
                    title: '分步表单',
                },
                component: () => import('@/views/form/step-form')
            }
        ]
    },
    {
        path: '/list',
        name: 'list',
        component: Layout,
        meta: {
            title: '列表页面',
            icon: 'el-icon-s-management'
        },
        children: [
            {
                path: 'basic-list',
                name: 'basic-list',
                meta: {
                    title: '标准列表',
                },
                component: () => import('@/views/list/basic-list')
            },
            {
                path: 'table-list',
                name: 'table-list',
                meta: {
                    title: '查询表格',
                },
                component: () => import('@/views/list/table-list')
            },
            {
                path: 'card-list',
                name: 'card-list',
                meta: {
                    title: '卡片列表',
                },
                component: () => import('@/views/list/card-list')
            }
        ]
    }, {
        path: '/result',
        name: 'result',
        component: Layout,
        meta: {
            title: '结果页面',
            icon: 'el-icon-circle-check'
        },
        children: [
            {
                path: 'success',
                name: 'success',
                meta: {
                    icon: 'el-icon-success',
                    title: '成功页',
                },
                component: () => import('@/views/result/success')
            }, {
                path: 'fail',
                name: 'fail',
                meta: {
                    icon: 'el-icon-error',
                    title: '失败页',
                },
                component: () => import('@/views/result/fail')
            }
        ]
    },
    {
        path: '/exception',
        name: 'exception',
        component: Layout,
        meta: {
            title: '异常页面',
            icon: 'el-icon-warning'
        },
        children: [
            {
                path: '403',
                name: 'error-403',
                meta: {
                    title: '无权限页面(403)'
                },
                component: () => import('@/views/exception/403')
            },
            {
                path: '404',
                name: 'error-404',
                meta: {
                    title: '未找到页面(404)',
                },
                component: () => import('@/views/exception/404')
            },
            {
                path: '500',
                name: 'error-500',
                meta: {
                    title: '服务器异常(500)',
                },
                component: () => import('@/views/exception/500')
            }
        ]
    },
    {
        path: '/account',
        name: 'account',
        component: Layout,
        meta: {
            title: '个人页面',
            icon: 'el-icon-s-custom'
        },
        children: [
            {
                path: 'center',
                name: 'center',
                meta: {
                    title: '个人中心',
                },
                component: () => import('@/views/account/center')
            }, {
                path: 'settings',
                name: 'settings',
                meta: {
                    title: '个人设置',
                },
                component: () => import('@/views/account/settings')
            }
        ]
    },
    {
        path: '/tool',
        name: 'tool',
        component: Layout,
        meta: {
            title: '工具',
            icon: 'el-icon-s-platform'
        },
        children: [
            {
                path: 'log',
                name: 'log',
                meta: {
                    icon: 'el-icon-bangzhu',
                    title: '日志'
                },
                component: CacheView,
                children: [
                    {
                        path: 'error',
                        name: 'error',
                        meta: {
                            title: '错误捕获'
                        },
                        component: () => import('@/views/tool/log/error.vue')
                    }, {
                        path: 'console',
                        name: 'console',
                        meta: {
                            title: '控制台日志'
                        },
                        component: () => import('@/views/tool/log/console.vue')
                    }, {
                        path: 'log-list',
                        name: 'log-list',
                        meta: {
                            title: '日志列表'
                        },
                        component: () => import('@/views/tool/log/log-list.vue')
                    },
                ]
            },
        ]
    },
    {
        path: '/login',
        name: 'login',
        meta: {
            hideInMenu: true
        },
        component: () => import('@/views/login'),
    },
    {
        path: '/404',
        hidden: true,
        meta: {
            hideInMenu: true
        },
        component: () => import('@/views/exception/404')
    },
    {
        path: '*',
        name: "error_404",
        meta: {
            hideInMenu: true
        },
        component: () => import('@/views/exception/404')
    }
]