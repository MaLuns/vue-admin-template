
<style lang="less" >
    @import "index.less";
</style>
<template>
    <div class="sidebar-menu-horizontal">
        <el-menu mode="horizontal" unique-opened router :default-active="activeMenu" :collapse="sidebarOpen">
            <sidebar-items v-for="route in routes" :key="route.path" :route="route" :base-path="route.path"></sidebar-items>
        </el-menu>
    </div>
</template>

<script>
    import { mapGetters } from "vuex";
    import SidebarItems from "../sidebar-items";

    export default {
        name: "Sidebar",
        data() {
            return {};
        },
        components: {
            SidebarItems
        },
        computed: {
            ...mapGetters(["sidebarOpen"]),
            routes() {
                return this.$router.options.routes;
            },
            activeMenu() {
                const route = this.$route;
                const { meta, path } = route;
                // if set path, the sidebar will highlight the path you set
                if (meta.activeMenu) {
                    return meta.activeMenu;
                }

                return path;
            }
        }
    };
</script>
