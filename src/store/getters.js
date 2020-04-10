const getters = {
    sidebarOpen: state => state.app.sidebarOpen,
    jwtToken: state => state.user.jwt_token,
    navTheme: state => state.app.navTheme,
    layout: state => state.app.layout,
    tagNavList: state => state.app.tagNavList,
}

export default getters
