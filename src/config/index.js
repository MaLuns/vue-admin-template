/**
 {
    "title": 标题,
    "sidebarCollapse": true|false 折叠侧栏
    "navTheme": 侧栏主题
    "layout": 导航布局
    "contentWidth": fixed|fluid  main区域顶宽和流式
    "fixedHeader": true|false    固定header
    "fixSiderbar": true|false    固定侧栏
    "showTagNav": true|false     显示标签栏
    "colorWeak": true|false      色弱模式
    "homeName": "home"           主页面路由name
    
    "primaryColor": "#1890FF"
}
 */
module.exports = {
    title: "Admin Template",
    sidebarCollapse: false,
    navTheme: "dark",
    primaryColor: "#1890FF",
    layout: "sidemenu",
    contentWidth: "fixed",
    fixedHeader: true,
    fixSiderbar: true,
    showTagNav: true,
    colorWeak: false,
    homeName: "home",
    lang: {
        use: true,
        item: {
            'zh-CN': '中文简体',
            'en': ' English'
        }

    }
}
