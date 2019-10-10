const getters = {
    sidebarOpen: state => state.app.sidebarOpen,
    jwtToken: state => state.user.jwt_token,
    navTheme: state => state.app.navTheme,
}

export default getters
