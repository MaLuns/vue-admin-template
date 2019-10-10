
const state = {
    jwt_token: localStorage.getItem("jwt_token"),
}

const mutations = {
    SETJWT_TOKEN: (state, jwt_token) => {
        state.jwt_token = jwt_token;
        localStorage.setItem("jwt_token", jwt_token)
    }
}

const actions = {
    setjwt_token({ commit }, jwt_token) {
        commit('SETJWT_TOKEN', jwt_token)
    },
}


export default {
    namespaced: true,
    state,
    mutations,
    actions
}
