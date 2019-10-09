<style lang="less" scoped>
    @import "index.less";
</style>
<template>
    <el-container class="app-wrapper">
        <el-aside class="sidebar-container">
            <sidebar />
        </el-aside>
        <el-container :class="{'main-container':true,'collapse':sidebarOpen}">
            <navbar />
            <appMain />
        </el-container>
        <PageConfig />
    </el-container>
</template>
<script>
    import Navbar from "./components/Navbar";
    import AppMain from "./components/AppMain";
    import Sidebar from "./components/Sidebar";
    import PageConfig from "./components/PageConfig";
    import { mapGetters } from "vuex";

    export default {
        name: "Home",
        computed: {
            ...mapGetters(["sidebarOpen"])
        },
        components: {
            AppMain,
            Navbar,
            Sidebar,
            PageConfig
        }
    };
</script>