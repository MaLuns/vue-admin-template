<template>
    <div class="navbar">
        <div style="padding: 0 15px;" @click="toggleSideBar" class="hamburger-container">
            <svg :class="{'is-active':!sidebarOpen}" class="hamburger" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="64" height="64">
                <path
                    d="M408 442h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm-8 204c0 4.4 3.6 8 8 8h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56zm504-486H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 632H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM142.4 642.1L298.7 519a8.84 8.84 0 0 0 0-13.9L142.4 381.9c-5.8-4.6-14.4-.5-14.4 6.9v246.3a8.9 8.9 0 0 0 14.4 7z" />
            </svg>
        </div>

        <div class="header-index-right">
            <div class="item">
                <!--  <el-popover trigger="click" placement='bottom-end' width='350'> -->
                <el-badge :value="99" slot="reference">
                    <i class="el-icon-bell" style="padding: 2px;"></i>
                </el-badge>
                <!--  <el-tabs v-model="activeName">
                        <el-tab-pane label="通知" name="notice">

                        </el-tab-pane>
                        <el-tab-pane label="消息" name="message">

                        </el-tab-pane>
                        <el-tab-pane label="待办" name="todo">

                        </el-tab-pane>
                    </el-tabs> -->
                <!-- </el-popover> -->
            </div>
            <div class="item">
                <el-dropdown :hide-on-click="false">
                    <span class="avatar-link">
                        <el-avatar size="small">白</el-avatar> 白云苍狗
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
        watch: {},
        computed: {
            ...mapGetters(["sidebarOpen"])
        },
        methods: {
            toggleSideBar() {
                this.$store.dispatch("app/toggleSideBar");
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
        width: 100%;
        height: 64px;
        overflow: hidden;
        display: flex;
        position: relative;
        background: #fff;
        box-shadow: 2px 0 8px 0 rgba(29, 35, 41, 0.05);

        .hamburger-container {
            display: flex;
            align-items: center;
            height: 100%;
        }

        .hamburger {
            vertical-align: middle;
            width: 20px;
            height: 20px;
            &.is-active {
                transform: rotate(180deg);
            }
        }

        .header-index-right {
            position: absolute;
            right: 0;
            width: 200px;
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
    }
</style>