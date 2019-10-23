import { sidebarOpen, navTheme, primaryColor, layout } from '@/config'

const state = {
    sidebarOpen: localStorage.getItem("app_sidebarOpen") ? !!+localStorage.getItem("app_sidebarOpen") : sidebarOpen,
    navTheme: localStorage.getItem("app_navTheme") ? localStorage.getItem("app_navTheme") : navTheme,
    primaryColor: localStorage.getItem("app_primaryColor") ? localStorage.getItem("app_primaryColor") : primaryColor,
    layout: localStorage.getItem("app_layout") ? localStorage.getItem("app_layout") : layout,
    errorList: []
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
    }
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
