<template>
    <section class="app-main">
        <transition name="fade-transform" mode="out-in">
            <keep-alive :include="include">
                <router-view :key="key" />
            </keep-alive>
        </transition>
    </section>
</template>

<script>
    import { mapGetters } from "vuex";

    export default {
        name: "AppMain",
        computed: {
            ...mapGetters(["tagNavList"]),
            key() {
                return this.$route.path;
            },
            include() {
                return this.tagNavList.length
                    ? this.tagNavList
                          .filter(item => !(item.meta && item.meta.notCache))
                          .map(item => item.name)
                    : [];
            }
        }
    };
</script>

<style lang="less">
    .app-main {
        width: 100%;
    }
    .el-popup-parent--hidden {
        .fixed-header {
            padding-right: 15px;
        }
    }
</style>