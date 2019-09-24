import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/en'

Vue.use(ElementUI, { locale })
Vue.config.productionTip = false

import router from './router'
import store from './store'

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})