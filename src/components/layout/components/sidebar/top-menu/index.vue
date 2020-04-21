
<style lang="less" >
    @import "index.less";
</style>
<template>
    <div class="top-menu">
        <el-menu mode="horizontal" unique-opened router :default-active="$route.path">
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
            }
        }
    };
</script>
