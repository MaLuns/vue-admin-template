<template>
    <div class="sidebar-menu">
        <div class="sidebar-logo-container" :class="{'collapse':sidebarOpen}">
            <div class='logo-text'>
                <img src="http://ys.wltrj.com:6869/icon/logo.png" class="sidebar-logo">
                <!--    <p>物联通系统</p> -->
            </div>
        </div>
        <el-scrollbar wrap-class="scrollbar-wrapper" class="scrollbar">
            <el-menu router :default-active="activeMenu" :collapse="sidebarOpen" background-color="#fff" text-color="#515a6e" active-text-color="#409eff" class="el-menu-vertical">
                <sidebar-items v-for="route in routes" :key="route.path" :item="route" :base-path="route.path"></sidebar-items>
            </el-menu>
        </el-scrollbar>
    </div>
</template>

<script>
    import { mapGetters } from "vuex";
    import SidebarItems from "./SidebarItems";

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

<style lang="less" >
    .sidebar-menu {
        height: 100vh;
        overflow: hidden;

        .scrollbar {
            height: calc(~"100% - 120px");
        }

        .el-menu {
            border-right: none;
        }

        .el-scrollbar__wrap {
            overflow-x: hidden;
        }
        .el-scrollbar__thumb {
            background: transparent !important;
        }

        .el-menu-vertical:not(.el-menu--collapse) {
            width: 220px;
            min-height: 400px;
        }
        .el-submenu [class^="el-icon-"] {
            /*  margin-right: 15px; */
            /*  font-weight: bold; */
            color: #515a6e;
        }

        .el-submenu .el-submenu__title,
        .el-submenu .el-menu-item {
            background-color: #fff !important;
            font-weight: bold;
        }

        .el-submenu .el-submenu__title:hover,
        .el-submenu .el-menu-item:hover {
            background-color: #f0faff !important;
        }

        .el-menu-item.is-active {
            background-color: #f0faff !important;
        }

        .el-menu-item.is-active::before {
            content: " ";
            position: absolute;
            right: 0;
            height: 100%;
            width: 5px;
            background: linear-gradient(#0081ff, #22ebff);
        }

        .sidebar-logo-container {
            position: relative;
            max-width: 220px;
            height: 50px;
            text-align: center;
            transition: all 0.3s;
            /*   background: linear-gradient(-22deg, #eef2ff, #dbdbdb); */
            display: flex;
            align-items: center;
            justify-content: center;

            .sidebar-logo {
                max-width: 40px;
            }

            .logo-text {
                display: flex;
                align-items: center;
                justify-content: center;

                p {
                    transition: all 0.3s;
                    padding-left: 20px;
                    width: 100px;
                    font-size: 18px;
                    font-weight: 900;
                    color: #393b46;
                    overflow: hidden;
                    white-space: nowrap;
                }
            }

            &.collapse {
                .logo-text > p {
                    opacity: 0;
                    width: 0;
                    padding-left: 0px;
                    height: 0;
                    overflow: hidden;
                }

                .sidebar-logo {
                    width: 40px;
                    max-width: 40px;
                }
            }
        }
    }
/* 
    .wlt-menu-vertical {
        background: #fff;
        margin: 0 12px;
        box-shadow: 0 0 1px 0 #d0d0d0;

        .el-menu--popup {
            max-height: 50vh;
            overflow-y: auto;
            box-shadow: none;
            margin: 0;

            &::-webkit-scrollbar {
                width: 4px;
            }
            &::-webkit-scrollbar-thumb {
                background: #ffffff00;
                border-radius: 20px;
            }
            &::-webkit-scrollbar-track-piece {
                background: #ffffff00;
            }
        }

        .el-submenu__title:hover,
        .el-menu-item:focus,
        .el-menu-item:hover {
            background-color: #f0faff !important;
        }
    } */
</style>