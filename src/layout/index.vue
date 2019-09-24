<style lang="less" scoped>
    @import "index.less";
</style>
<template>
    <el-container class="app-wrapper">
        <el-aside class="sidebar-container">
            <sidebar />
        </el-aside>
        <el-container>
            <div class="main-container">
                <navbar />
                <appMain />
            </div>
        </el-container>
    </el-container>
</template>
<script>
    import Navbar from "./components/Navbar";
    import AppMain from "./components/AppMain";
    import Sidebar from "./components/Sidebar";

    export default {
        name: "Home",
        components: {
            AppMain,
            Navbar,
            Sidebar
        }
    };
</script>