<style lang="less">
    @import "index.less";
</style>
<template>
    <div>
        <el-container class="app-wrapper">
            <el-aside :class="classObject" v-if="ShowSidemenu">
                <Sidebar />
            </el-aside>
            <el-container :class="{'main-container':true,'collapse':sidebarOpen}">
                <TopMenu v-if="!ShowSidemenu" />
                <Navbar v-if="ShowSidemenu" />
                <TagNav />
                <AppMain />
                <AppFooter />
            </el-container>
        </el-container>
        <PageConfig />
    </div>
</template>
<script>
    import Navbar from "./components/nav-bar";
    import AppMain from "./components/app-main";
    import AppFooter from "./components/app-footer";
    import Sidebar from "./components/sidebar/side-menu/index";
    import TopMenu from "./components/sidebar/top-menu/index";
    import TagNav from "./components/tag-nav";
    import PageConfig from "./components/page-config";
    import { mapGetters, mapMutations } from "vuex";

    export default {
        name: "Home",
        computed: {
            ...mapGetters(["sidebarOpen", "navTheme", "layout", "tagNavList"]),
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
            AppFooter,
            TagNav
        },
        methods: {
            ...mapMutations("app", ["SetCacheTagNavList", "AddTagNav"])
        },
        watch: {
            $route(newRoute) {
                this.AddTagNav(newRoute);
            }
        },
        mounted() {
            this.SetCacheTagNavList();
            this.AddTagNav(this.$route);
        }
    };
</script>