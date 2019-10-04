<template>
    <section class="app-main">
        <transition name="fade-transform" mode="out-in">
            <router-view :key="key" />
        </transition>
    </section>
</template>

<script>
    export default {
        name: "AppMain",
        computed: {
            key() {
                return this.$route.path;
            }
        }
    };
</script>

<style lang="less">
    .app-main {
        padding: 20px;
    }
    .el-popup-parent--hidden {
        .fixed-header {
            padding-right: 15px;
        }
    }
</style>