<template>
    <div class="sidebar-menu">
        <el-scrollbar wrap-class="scrollbar-wrapper" class="scrollbar">
            <el-menu router :default-active="activeMenu" :collapse="sidebarOpen" background-color="#304156" text-color="#bfcbd9" active-text-color="#409eff"
                class="el-menu-vertical">
                <sidebar-items v-for="route in routes" :key="route.path" :item="route" :base-path="route.path"></sidebar-items>
            </el-menu>
        </el-scrollbar>
    </div>
</template>

<script>
    import { mapGetters } from "vuex";
    import SidebarItems from "./SidebarItems";

    export default {
        data() {
            return {
                onlyOneChild: null,
                isNest: false
            };
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

<style lang="less">
    .sidebar-menu {
        .el-scrollbar__wrap {
            overflow-x: hidden;
        }
    }
</style>
<style lang="less" scoped>
    .sidebar-menu {
        height: 100vh;
        overflow: hidden;

        .scrollbar {
            height: 100%;
        }

        .el-menu {
            border-right: none;
        }

        .el-menu-vertical:not(.el-menu--collapse) {
            width: 210px;
            min-height: 400px;
        }
        .el-submenu .el-menu-item {
            background-color: #1f2d3d !important;
        }

        .el-submenu .el-menu-item:hover {
            background-color: #263445 !important;
        }

        .el-menu-item.is-active {
            background-color: #263445 !important;
        }
        .el-menu-item.is-active::before {
            content: " ";
            position: absolute;
            right: 0;
            height: 100%;
            width: 5px;
            background: linear-gradient(#0081ff, #22ebff);
        }

        .el-submenu [class^="el-icon-"] {
            margin-right: 15px;
        }
    }
</style>