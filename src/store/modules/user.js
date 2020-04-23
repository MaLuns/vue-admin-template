
const state = {
    jwt_token: localStorage.getItem("jwt_token"),
    authority: localStorage.getItem("authority") ? JSON.parse(localStorage.getItem("authority")) : {}
}

const mutations = {
    setjwt_token(state, jwt_token) {
        state.jwt_token = jwt_token;
        localStorage.setItem("jwt_token", jwt_token)
    },
    set_authority(state, authority) {
        state.authority = authority;
        localStorage.setItem("authority", JSON.stringify(authority))
    }
}


export default {
    namespaced: true,
    state,
    mutations
}
