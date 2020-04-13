import { sidebarOpen, navTheme, primaryColor, layout, homeName } from '@/config'
import { routeHasExist } from "@/libs/util"
import router from '@/router'

const state = {
    sidebarOpen: localStorage.getItem("app_sidebarOpen") ? !!+localStorage.getItem("app_sidebarOpen") : sidebarOpen,
    navTheme: localStorage.getItem("app_navTheme") ? localStorage.getItem("app_navTheme") : navTheme,
    primaryColor: localStorage.getItem("app_primaryColor") ? localStorage.getItem("app_primaryColor") : primaryColor,
    layout: localStorage.getItem("app_layout") ? localStorage.getItem("app_layout") : layout,
    errorList: [],
    tagNavList: []
}

const mutations = {
    AddError(state, error) {
        state.errorList.push(error)
    },
    CHANGE_NAVTHEME(state, theme) {
        state.navTheme = theme;
        localStorage.setItem("app_navTheme", theme)
    },
    TOGGLE_SIDEBAR(state) {
        state.sidebarOpen = !state.sidebarOpen;
        if (state.sidebarOpen) {
            localStorage.setItem("app_sidebarOpen", 1)
        } else {
            localStorage.setItem("app_sidebarOpen", 0)
        }
    },
    CHANGE_LAYOUT(state, layout) {
        state.layout = layout;
        localStorage.setItem("app_layout", layout)
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
    closeTag(state, { route, checked }) {
        let index = state.tagNavList.findIndex(item => item.name === route.name);
        if (checked) {
            let nextRoute;
            if (index === state.tagNavList.length - 1) nextRoute = state.tagNavList[state.tagNavList.length - 2]
            else nextRoute = state.tagNavList[index + 1]
            router.push(nextRoute);
        }
        state.tagNavList.splice(index, 1);
        localStorage.setItem("tagNaveList", JSON.stringify(state.tagNavList))
    },
}

const actions = {
    toggleSideBar({ commit }) {
        commit('TOGGLE_SIDEBAR')
    },
    changeNavTheme({ commit }, theme) {
        commit('CHANGE_NAVTHEME', theme)
    },
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
