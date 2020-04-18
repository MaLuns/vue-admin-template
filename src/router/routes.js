import Layout from '@/layout'
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
                path: 'monitor',
                name: 'monitor',
                meta: {
                    title: '监控页',
                    notCache: true
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
            },
            {
                path: 'advanced-form',
                name: 'advanced-form',
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
                component: () => import('@/views/home')
            },
            {
                path: 'table-list',
                name: 'table-list',
                meta: {
                    title: '查询表格',
                },
                component: () => import('@/views/home')
            },
            {
                path: 'card-list',
                name: 'card-list',
                meta: {
                    title: '卡片列表',
                },
                component: () => import('@/views/home')
            }
        ]
    }, {
        path: '/result',
        name: 'result',
        component: Layout,
        meta: {
            title: '结果页面',
            icon: 'el-icon-warning'
        },
        children: [
            {
                path: 'success',
                name: 'success',
                meta: {
                    title: '成功页',
                },
                component: () => import('@/views/result/success')
            }, {
                path: 'fail',
                name: 'fail',
                meta: {
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
            icon: 'el-icon-warning'
        },
        children: [
            {
                path: 'center',
                name: 'center',
                meta: {
                    title: '个人中心',
                },
                component: () => import('@/views/result/success')
            }, {
                path: 'settings',
                name: 'settings',
                meta: {
                    title: '个人设置',
                },
                component: () => import('@/views/result/fail')
            }
        ]
    },
    {
        path: '/level',
        name: 'level',
        component: Layout,
        meta: {
            title: '多级菜单',
            icon: 'el-icon-s-operation'
        },
        children: [
            {
                path: 'level_2',
                name: 'level_2',
                meta: {
                    icon: 'el-icon-s-operation',
                    title: '二级-1'
                },
                component: () => import('@/views/level/level-2.vue')
            },
            {
                path: 'level_2_1',
                name: 'level_2_1',
                meta: {
                    icon: 'el-icon-s-operation',
                    title: '二级-2'
                },
                component: CacheView,
                children: [
                    {
                        path: 'level_3_1',
                        name: 'level_3_1',
                        meta: {
                            icon: 'el-icon-s-operation',
                            title: '三级-1'
                        },
                        component: () => import('@/views/level/level_2_1/level_3.vue')
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