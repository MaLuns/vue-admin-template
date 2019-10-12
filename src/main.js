import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import G2 from "@antv/g2";
import 'element-ui/lib/theme-chalk/index.css'
import '@/index.less'
import locale from 'element-ui/lib/locale/lang/en'


require('@/mock')

Vue.use(G2)
Vue.use(ElementUI, { locale })
Vue.config.productionTip = false
Vue.config.devtools = true

import router from './router'
import store from './store'

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
