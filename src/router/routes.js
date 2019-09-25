import Layout from '@/layout'
import WltManage from './modules/wlt-manage'


export default [
    WltManage,
    {
        path: '/home',
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
]