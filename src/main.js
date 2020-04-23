import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import { i18n } from '@/locale'
import log from "@/plugin/log"
import 'element-ui/lib/theme-chalk/index.css'
import '@/index.less'
import '@/mock'

Vue.use(log)
Vue.use(ElementUI)
Vue.config.productionTip = false
Vue.config.devtools = true



import router from './router'
import store from './store'


Vue.config.errorHandler = function (err, vm, info) {
  store.commit("app/AddError", {
    message: `${info}  ${err}`,
    type: "error",
    meta: {
      error: err,
      path: vm.$route.path
    }
  })
}

new Vue({
  el: '#app',
  router,
  store,
  i18n,
  render: h => h(App)
})