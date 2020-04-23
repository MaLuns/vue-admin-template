import { sidebarCollapse, navTheme, primaryColor, layout, contentWidth, fixedHeader, fixSiderbar, showTagNav, colorWeak, homeName, lang } from '@/config'
import { routeHasExist, getTime } from "@/libs/util"
import router from '@/router'

const state = {
    sidebarCollapse: localStorage.getItem("app_sidebarCollapse") ? JSON.parse(localStorage.getItem("app_sidebarCollapse")) : sidebarCollapse,
    navTheme: localStorage.getItem("app_navTheme") || navTheme,
    primaryColor: localStorage.getItem("app_primaryColor") || primaryColor,
    layout: localStorage.getItem("app_layout") || layout,
    contentWidth: localStorage.getItem("app_contentWidth") || contentWidth,
    fixedHeader: localStorage.getItem("app_fixedHeader") ? JSON.parse(localStorage.getItem("app_fixedHeader")) : fixedHeader,
    fixedSiderbar: localStorage.getItem("app_fixedSiderbar") ? JSON.parse(localStorage.getItem("app_fixedSiderbar")) : fixSiderbar,
    showTagNav: localStorage.getItem("app_showTagNav") ? JSON.parse(localStorage.getItem("app_showTagNav")) : showTagNav,
    colorWeak: localStorage.getItem("app_colorWeak") ? JSON.parse(localStorage.getItem("app_colorWeak")) : colorWeak,
    lang: lang.item,
    errorList: [],
    tagNavList: []
}

const mutations = {
    AddError(state, { message, type, meta }) {
        state.errorList.push({
            message,
            time: getTime(),
            type,
            meta: {
                ...meta,
            }
        })
    },
    ClearLogInfo(state) {
        state.errorList = []
    },
    SetGlobalConfig(state, { key, val }) {
        state[key] = val
        localStorage.setItem(`app_${key}`, val)
    },
    SetCacheTagNavList(state) {
        let tagList = localStorage.tagNaveList ? JSON.parse(localStorage.tagNaveList) : []
        state.tagNavList = tagList;
    },
    AddTagNav(state, { path, name, params, query, meta }) {
        let route = { path, name, params, query, meta }
        if (!routeHasExist(state.tagNavList, route)) {
            state.tagNavList.push(route);
            let homeTagIndex = state.tagNavList.findIndex(item => item.name === homeName);
            if (homeTagIndex > 0) {
                let homeTag = state.tagNavList.splice(homeTagIndex, 1)[0]
                state.tagNavList.unshift(homeTag)
            }
            localStorage.setItem("tagNaveList", JSON.stringify(state.tagNavList))
        }
    },
    CloseTag(state, { route, checked, type = '' }) {
        if (type === 'other') {
            state.tagNavList = state.tagNavList.filter(item => item.name === homeName || item.name === route.name);
        } else if (type === 'all') {
            let homeRoute = state.tagNavList.filter(item => item.name === homeName);
            state.tagNavList = homeRoute;
            if (route.name !== homeName) router.push({ name: homeName, ...homeRoute[0] });
        } else {
            let index = state.tagNavList.findIndex(item => item.name === route.name);
            if (checked) {
                let nextRoute;
                if (index === state.tagNavList.length - 1) nextRoute = state.tagNavList[state.tagNavList.length - 2]
                else nextRoute = state.tagNavList[index + 1]
                router.push(nextRoute);
            }
            state.tagNavList.splice(index, 1);
        }
        localStorage.setItem("tagNaveList", JSON.stringify(state.tagNavList))
    },
}

const actions = {
    changeLayout({ commit }, layout) {
        commit('CHANGE_LAYOUT', layout)
    },
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}
