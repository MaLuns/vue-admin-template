const getters = {
    sidebarCollapse: state => state.app.sidebarCollapse,
    tagNavList: state => state.app.tagNavList,
    errorList: state => state.app.errorList,

    navTheme: state => state.app.navTheme,
    layout: state => state.app.layout,
    contentWidth: state => state.app.contentWidth,
    fixedHeader: state => state.app.fixedHeader,
    fixedSiderbar: state => state.app.fixedSiderbar,
    showTagNav: state => state.app.showTagNav,
    colorWeak: state => state.app.colorWeak,

    lang: state => state.app.lang,
    
    jwtToken: state => state.user.jwt_token,
    user:state=>state.user.user
}

export default getters
