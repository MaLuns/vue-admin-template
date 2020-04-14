const getters = {
    sidebarOpen: state => state.app.sidebarOpen,
    jwtToken: state => state.user.jwt_token,
    navTheme: state => state.app.navTheme,
    layout: state => state.app.layout,
    tagNavList: state => state.app.tagNavList,
    fixedHeader: state => state.app.fixedHeader, 
    showTagNav: state => state.app.showTagNav, 
    colorWeak: state => state.app.colorWeak,
}

export default getters
