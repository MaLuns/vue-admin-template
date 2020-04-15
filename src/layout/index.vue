<style lang="less" scoped>
    @import "index.less";
</style>
<template>
    <div :class="this.navTheme">
        <el-container class="app-wrapper">
            <el-aside :class="classObject" v-if="ShowSidemenu">
                <Sidebar />
            </el-aside>
            <el-container :class="{'main-container':true,'collapse':sidebarOpen}">
                <TopMenu v-if="!ShowSidemenu" />
                <Navbar v-if="ShowSidemenu" />
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
        name: "Home",
        computed: {
            ...mapGetters([
                "sidebarOpen",
                "navTheme",
                "layout",
                "tagNavList",
                "fixedHeader",
                "showTagNav",
                "colorWeak"
            ]),
            classObject() {
                if (this.navTheme === "dark" || this.navTheme === "darkAll") {
                    return {
                        "sidebar-container": true,
                        "sidebar-collapse": this.sidebarOpen
                        /*  "sidebar-container-dark": true */
                    };
                } else {
                    return {
                        "sidebar-container": true,
                        "sidebar-collapse": this.sidebarOpen
                        /* "sidebar-container-light": true */
                    };
                }
            },
            ShowSidemenu() {
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

            document.documentElement.style.filter = this.colorWeak
                ? "invert(100%)"
                : "";
        }
    };
</script>