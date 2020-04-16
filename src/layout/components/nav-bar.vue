<template>
    <div class="navbar fixed" ref="navbar">
        <div @click="toggleSideBar" class="navbar-btn">
            <svg :class="{'is-active':!sidebarOpen}" class="hamburger" viewBox="64 64 896 896" focusable="false" data-icon="menu-fold" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                <path d="M408 442h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm-8 204c0 4.4 3.6 8 8 8h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56zm504-486H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 632H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM115.4 518.9L271.7 642c5.8 4.6 14.4.5 14.4-6.9V388.9c0-7.4-8.5-11.5-14.4-6.9L115.4 505.1a8.74 8.74 0 000 13.8z" />
            </svg>
        </div>
        <div class="header-index-right">
            <el-tooltip content="没有日志信息" placement="bottom" :effect="effect">
                <div class="navbar-btn">
                    <i class="el-icon-help"></i>
                </div>
            </el-tooltip>
            <div class="navbar-btn">
                <i class="el-icon-full-screen"></i>
            </div>
            <div class="navbar-btn">
                <el-badge :value="5" slot="reference">
                    <i class="el-icon-bell"></i>
                </el-badge>
            </div>
            <div class="item">
                <el-dropdown :hide-on-click="false">
                    <span class="avatar-link">
                        <el-avatar size="small">白</el-avatar>白云苍狗
                    </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>个人中心</el-dropdown-item>
                        <el-dropdown-item>个人设置</el-dropdown-item>
                        <el-dropdown-item divided>退出登录</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapGetters } from "vuex";
    export default {
        name: "Navbar",
        data() {
            return {
                levelList: null,
                activeName: "notice"
            };
        },
        watch: {
            fixedHeader() {
                this.setLayout();
            }
        },
        computed: {
            ...mapGetters(["sidebarOpen", "fixedHeader", "navTheme"]),
            effect() {
                return this.navTheme === "darkAll" ? "light" : "dark";
            }
        },
        mounted() {
            this.setLayout();
        },
        methods: {
            setLayout() {
                let navbar = this.$refs.navbar;
                this.fixedHeader
                    ? navbar.classList.add("fixed")
                    : navbar.classList.remove("fixed");
            },
            toggleSideBar() {
                this.$store.commit("app/SetGlobalConfig", {
                    key: "sidebarOpen",
                    val: !this.sidebarOpen
                });
            },
            getBreadcrumb() {
                // only show routes with meta.title
                let matched = this.$route.matched.filter(
                    item => item.meta && item.meta.title
                );
                const first = matched[0];

                if (!this.isDashboard(first)) {
                    matched = [
                        { path: "/dashboard", meta: { title: "Dashboard" } }
                    ].concat(matched);
                }

                this.levelList = matched.filter(
                    item =>
                        item.meta &&
                        item.meta.title &&
                        item.meta.breadcrumb !== false
                );
            }
        }
    };
</script>

<style lang="less" scoped>
    .navbar {
        height: 64px;
        overflow: hidden;
        display: flex;
        background: #fff;
        box-shadow: 2px 0 8px 0 rgba(53, 54, 56, 0.18);

        .header-index-right {
            position: absolute;
            right: 0;
            height: 100%;
            overflow: hidden;
            display: flex;
            align-items: center;
            justify-content: flex-end;

            .item {
                margin: 0 15px;
                cursor: pointer;
            }

            .avatar-link {
                display: flex;
                align-items: center;
                span {
                    margin-right: 5px;
                }
            }
        }

        .navbar-btn {
            display: flex;
            align-items: center;
            height: 100%;
            padding: 0 11px;
            transition: background 0.3s;
            cursor: pointer;

            .hamburger {
                vertical-align: middle;
                width: 20px;
                height: 20px;
                &.is-active {
                    transform: rotate(180deg);
                }
            }

            &:hover {
                background: rgba(0, 0, 0, 0.025);
            }
        }
    }
</style>