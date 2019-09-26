import Layout from '@/layout'
import WltManage from './modules/wlt-management'
import FieldManage from './modules/field-management'
import WltDispatch from './modules/wlt-dispatch'



export default [
    WltManage,
    FieldManage,
    WltDispatch,
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