import Vue from 'vue'
import VueI18n from 'vue-i18n'
import Element from 'element-ui'
import messages from './lang'
Vue.use(VueI18n)

export const i18n = new VueI18n({
    locale: 'zh-CN',
    messages
})

Vue.use(Element, {
    i18n: (key, value) => i18n.t(key, value)
})