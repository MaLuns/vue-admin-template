import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'
import store from '../store'
import { getUserInfo } from '@/api/login'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

NProgress.configure({ showSpinner: false })

Vue.use(Router)

//
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}

const router = new Router({
    routes,
   /*  mode: 'history' */
})

const LOGIN_NAME = 'login';
const NOTAUTH_NAME = 'error-403'
router.beforeEach((to, from, next) => {
    const token = store.getters.jwtToken;
    const user = store.getters.user;
    NProgress.start();

    if (to.name === LOGIN_NAME) {
        next();
    } else {
        if (!token) {
            next({ name: LOGIN_NAME })
        } else {
            if (Object.keys(user).length === 0) {
                getUserInfo({ data: { token } }).then(({ data: { data } }) => {
                    store.commit("user/set_user", data);
                    next();
                })
            } else {
                let { auth = undefined } = to.meta
                if (auth != undefined && !store.getters.user.authority[auth]) {
                    next({ name: NOTAUTH_NAME })
                } else {
                    next();
                }
            }
        }
    }
})

router.afterEach(() => {
    NProgress.done()
})

export default router;