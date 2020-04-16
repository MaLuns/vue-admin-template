const getters = {
    sidebarOpen: state => state.app.sidebarOpen,
    jwtToken: state => state.user.jwt_token,
    tagNavList: state => state.app.tagNavList,

    navTheme: state => state.app.navTheme,
    layout: state => state.app.layout,
    contentWidth: state => state.app.contentWidth,
    fixedHeader: state => state.app.fixedHeader,
    fixedSiderbar: state => state.app.fixedSiderbar,
    showTagNav: state => state.app.showTagNav,
    colorWeak: state => state.app.colorWeak,
}

export default getters
