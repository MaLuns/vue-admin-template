const state = {
    sidebarOpen: localStorage.getItem("app_sidebarOpen") ? !!+localStorage.getItem("app_sidebarOpen") : true,
    errorList: []
}

const mutations = {
    AddError(state, error) {
        state.errorList.push(error)
    },
    TOGGLE_SIDEBAR: state => {
        state.sidebarOpen = !state.sidebarOpen;
        if (state.sidebarOpen) {
            localStorage.setItem("app_sidebarOpen", 1)
        } else {
            localStorage.setItem("app_sidebarOpen", 0)
        }
    }
}

const actions = {
    toggleSideBar({ commit }) {
        commit('TOGGLE_SIDEBAR')
    },
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}
