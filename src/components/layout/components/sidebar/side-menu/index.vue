
<style lang="less">
    @import "index.less";
</style>
<template>
    <div :class="sidebarMenu">
        <div :class="sidebarLogoContainer">
            <a>
                <img class="sidebar-logo" :src="logo" alt="logo" />
                <h1>Admin System</h1>
            </a>
        </div>
        <el-scrollbar wrap-class="scrollbar-wrapper" class="scrollbar">
            <el-menu router :default-active="$route.path" :collapse="sidebarOpen" class="el-menu-vertical">
                <sidebar-items v-for="route in $router.options.routes" :key="route.path" :route="route" :base-path="route.path"></sidebar-items>
            </el-menu>
        </el-scrollbar>
    </div>
</template>

<script>
    import { mapGetters } from "vuex";
    import SidebarItems from "../sidebar-items";
    import logo from "@/assets/log.svg";

    export default {
        name: "Sidebar",
        data() {
            return { logo };
        },
        components: {
            SidebarItems
        },
        computed: {
            ...mapGetters(["sidebarOpen", "fixedSiderbar"]),
            sidebarMenu() {
                return {
                    "sidebar-menu": true,
                    "sidebar-container-not-fixed": !this.fixedSiderbar
                };
            },
            sidebarLogoContainer() {
                return {
                    "sidebar-logo-container": true,
                    collapse: this.sidebarOpen
                };
            }
        }
    };
</script>
