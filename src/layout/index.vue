<style lang="less">
    @import "index.less";
</style>
<template>
    <el-container class="app-wrapper">
        <el-aside :class="classObject">
            <sidebar />
        </el-aside>
        <el-container :class="{'main-container':true,'collapse':sidebarOpen}">
            <top-menu v-show="false"></top-menu>
            <navbar />
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
            ...mapGetters(["sidebarOpen", "navTheme"]),
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