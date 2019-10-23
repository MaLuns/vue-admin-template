<style lang="less">
    @import "index.less";
</style>
<template>
    <el-container class="app-wrapper">
        <el-aside :class="classObject" v-show="ShowSidemenu">
            <sidebar />
        </el-aside>
        <el-container :class="{'main-container':true,'collapse':sidebarOpen}">
            <top-menu v-show="!ShowSidemenu"></top-menu>
            <navbar v-show="ShowSidemenu" />
            <app-main />
            <app-footer />
        </el-container>
        <PageConfig />
    </el-container>
</template>
<script>
    import Navbar from "./components/nav-bar";
    import AppMain from "./components/app-main";
    import AppFooter from "./components/app-footer";
    import Sidebar from "./components/sidebar/side-menu/index";
    import TopMenu from "./components/sidebar/top-menu/index";
    import PageConfig from "./components/page-config";
    import { mapGetters } from "vuex";

    export default {
        name: "Home",
        computed: {
            ...mapGetters(["sidebarOpen", "navTheme", "layout"]),
            classObject: function() {
                if (this.navTheme === "dark") {
                    return {
                        "sidebar-container": true,
                        "sidebar-collapse": this.sidebarOpen,
                        "sidebar-container-dark": true
                    };
                } else {
                    return {
                        "sidebar-container": true,
                        "sidebar-collapse": this.sidebarOpen,
                        "sidebar-container-light": true
                    };
                }
            },
            ShowSidemenu: function() {
                return this.layout == "sidemenu";
            }
        },
        components: {
            AppMain,
            Navbar,
            Sidebar,
            TopMenu,
            PageConfig,
            AppFooter
        }
    };
</script>