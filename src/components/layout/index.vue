<style lang="less" scoped>
    @import "index.less";
</style>
<template>
    <div :class="this.navTheme">
        <el-container class="app-wrapper">
            <el-aside :class="sidebarContainer" v-if="showSidemenu">
                <Sidebar />
            </el-aside>
            <el-container :class="mainContainer">
                <TopMenu v-if="!showSidemenu" />
                <Navbar v-if="showSidemenu" />
                <TagNav v-show="showTagNav" />
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
        name: "layout",
        computed: {
            ...mapGetters([
                "sidebarOpen",
                "navTheme",
                "layout",
                "contentWidth",
                "tagNavList",
                "fixedHeader",
                "fixedSiderbar",
                "showTagNav",
                "colorWeak"
            ]),
            sidebarContainer() {
                return {
                    "sidebar-container": true,
                    "sidebar-collapse": this.sidebarOpen,
                    "sidebar-container-fixed": this.fixedSiderbar
                };
            },
            mainContainer() {
                return {
                    "main-container": true,
                    "main-collapse": this.sidebarOpen && this.showSidemenu,
                    "sidebar-container-not-fixed":
                        !this.fixedSiderbar || !this.showSidemenu,
                    "main-wide": !this.showSidemenu && this.contentWidth === "fixed"
                };
            },
            showSidemenu() {
                return this.layout === "sidemenu";
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

            document.documentElement.style.filter = this.colorWeak
                ? "invert(100%)"
                : "";
        }
    };
</script>