
<style lang="less" >
    @import "index.less";
</style>
<template>
    <div class="top-menu">
        <div class="top-meno-content">
            <div class="sidebar-logo-container">
                <a>
                    <img class="sidebar-logo" :src="logo" alt="logo" />
                    <h1>Admin System</h1>
                </a>
            </div>
            <header-right></header-right>
        </div>
    </div>
</template>

<script>
    import { mapGetters } from "vuex";
    import HeaderRight from "../../header-nav-bar/header-right";
    import logo from "@/assets/log.svg";

    export default {
        name: "Sidebar",
        data() {
            return { logo };
        },
        components: {
            HeaderRight
        },
        computed: {
            ...mapGetters(["sidebarCollapse"]),
            routes() {
                return this.$router.options.routes;
            }
        }
    };
</script>
