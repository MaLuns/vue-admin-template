
const state = {
    jwt_token: localStorage.getItem("jwt_token"),
    user: {}
}

const mutations = {
    setjwt_token(state, jwt_token) {
        state.jwt_token = jwt_token;
        localStorage.setItem("jwt_token", jwt_token)
    },
    set_user(state, user) {
        state.user = user;
    },
    update_authority(state, { key, val }) {
        state.user.authority[key] = val
    }
}


export default {
    namespaced: true,
    state,
    mutations
}
