const getters = {
    sidebarOpen: state => state.app.sidebarOpen,
    jwtToken: state => state.user.jwt_token,
}

export default getters
