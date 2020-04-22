import Vue from 'vue'
import VueI18n from 'vue-i18n'
import Element from 'element-ui'
import zhcn from './lang/zh-cn'
import en from './lang/en'

Vue.use(VueI18n)


export const i18n = new VueI18n({
    locale: 'zh-CN',
    messages: {
        'zh-CN': zhcn,
        en
    },
})

Vue.use(Element, {
    i18n: (key, value) => i18n.t(key, value)
})