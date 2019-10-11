<style lang="less">
    @import "index.less";
</style>
<template>
    <el-container class="app-wrapper">
        <el-aside :class="classObject">
            <sidebar />
        </el-aside>
        <el-container :class="{'main-container':true,'collapse':sidebarOpen}">
            <navbar />
            <app-main />
            <app-footer />
        </el-container>
        <PageConfig />
    </el-container>
</template>
<script>
    import Navbar from "./components/Navbar";
    import AppMain from "./components/AppMain";
    import AppFooter from "./components/AppFooter";
    import Sidebar from "./components/Sidebar";
    import PageConfig from "./components/PageConfig";
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
            PageConfig,
            AppFooter
        }
    };
</script>