<template>
    <div class="navbar">
        <div style="padding: 0 15px;" @click="toggleSideBar" class="hamburger-container">
            <svg :class="{'is-active':!sidebarOpen}" class="hamburger" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="64" height="64">
                <path
                    d="M408 442h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm-8 204c0 4.4 3.6 8 8 8h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56zm504-486H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 632H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM142.4 642.1L298.7 519a8.84 8.84 0 0 0 0-13.9L142.4 381.9c-5.8-4.6-14.4-.5-14.4 6.9v246.3a8.9 8.9 0 0 0 14.4 7z" />
            </svg>
        </div>
        <el-breadcrumb class="app-breadcrumb" separator="/">
            <transition-group name="breadcrumb">
                <el-breadcrumb-item v-for="(item,index) in levelList" :key="item.path">
                    <span v-if="item.redirect==='noRedirect'||index==levelList.length-1" class="no-redirect">{{ item.meta.title }}</span>
                    <a v-else @click.prevent="handleLink(item)">{{ item.meta.title }}</a>
                </el-breadcrumb-item>
            </transition-group>
        </el-breadcrumb>
        <!--   <div class="breadcrumb-container">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>Dashboard</el-breadcrumb-item>
                <el-breadcrumb-item>Example</el-breadcrumb-item>
                <el-breadcrumb-item>Tree</el-breadcrumb-item>
            </el-breadcrumb>
        </div> -->
    </div>
</template>

<script>
    import { mapGetters } from "vuex";
    export default {
        name: "Navbar",
        data() {
            return {
                levelList: null
            };
        },
        watch: {
          /*   $route() {
                this.getBreadcrumb();
            } */
        },
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
        height: 50px;
        overflow: hidden;
        display: flex;
        position: relative;
        background: #fff;
        box-shadow: 0 0 1px 0 #d0d0d0;

        .hamburger-container,
        .breadcrumb-container {
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
        .breadcrumb-container {
            margin-left: 8px;
        }
    }
</style>