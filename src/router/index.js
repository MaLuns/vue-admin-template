import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'
import store from '../store'
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
    mode: 'history'
})

const LOGIN_NAME = 'login';

router.beforeEach((to, from, next) => {
    const token = store.getters.jwtToken;
    NProgress.start()
    if (to.name === LOGIN_NAME) {
        next();
    } else {
        if (!token) {
            next({
                name: LOGIN_NAME
            })
        } else {
            next();
        }
    }
})

router.afterEach(() => {
    NProgress.done()
})

export default router;