<style lang="less" scoped>
    @import "index.less";
</style>
<template>
    <div :class="this.navTheme">
        <el-container class="app-wrapper">
            <el-aside :class="sidebarContainer" v-if="showSidemenu">
                <sidebar-menu></sidebar-menu>
            </el-aside>
            <el-container :class="mainContainer">
                <top-menu v-if="!showSidemenu"></top-menu>
                <header-nav-bar v-if="showSidemenu"></header-nav-bar>
                <tag-nav v-if="showTagNav && showSidemenu"></tag-nav>
                <app-main></app-main>
                <app-footer></app-footer>
            </el-container>
        </el-container>
        <page-config></page-config>
    </div>
</template>
<script>
    import HeaderNavBar from "./components/header-nav-bar/index";
    import AppMain from "./components/app-main";
    import AppFooter from "./components/app-footer";
    import SidebarMenu from "./components/sidebar/side-menu/index";
    import TopMenu from "./components/sidebar/top-menu/index";
    import TagNav from "./components/tag-nav";
    import PageConfig from "./components/page-config";
    import { mapGetters, mapMutations } from "vuex";

    export default {
        name: "layout",
        computed: {
            ...mapGetters([
                "sidebarCollapse",
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
                    "sidebar-collapse": this.sidebarCollapse,
                    "sidebar-container-fixed": this.fixedSiderbar
                };
            },
            mainContainer() {
                return {
                    "main-container": true,
                    "main-collapse": this.sidebarCollapse && this.showSidemenu,
                    "sidebar-container-not-fixed":
                        !this.fixedSiderbar || !this.showSidemenu,
                    "not-sidebar": !this.showSidemenu,
                    "main-wide": !this.showSidemenu && this.contentWidth === "fixed"
                };
            },
            showSidemenu() {
                return this.layout === "sidemenu";
            }
        },
        components: {
            AppMain,
            HeaderNavBar,
            SidebarMenu,
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