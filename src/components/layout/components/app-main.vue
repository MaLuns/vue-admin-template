<template>
    <section class="app-main" ref="appMain">
        <transition name="fade-transform" mode="out-in">
            <keep-alive :include="include">
                <router-view :key="$route.path" />
            </keep-alive>
        </transition>
    </section>
</template>

<script>
    import { mapGetters } from "vuex";

    export default {
        name: "AppMain",
        computed: {
            ...mapGetters(["tagNavList", "fixedHeader", "showTagNav", "layout"]),
            include() {
                return [
                    "cache-view",
                    ...(this.tagNavList.length
                        ? this.tagNavList
                              .filter(item => !(item.meta && item.meta.notCache))
                              .map(item => item.name)
                        : [])
                ];
            },
            obj() {
                let { fixedHeader, showTagNav, layout } = this;
                return { fixedHeader, showTagNav, layout };
            }
        },
        mounted() {
            this.setLayout();
        },
        watch: {
            obj() {
                this.setLayout();
            }
        },
        methods: {
            setLayout() {
                if (this.fixedHeader && this.layout == "sidemenu") {
                    this.$refs.appMain.style.marginTop = this.showTagNav
                        ? "110px"
                        : "64px";
                } else {
                    this.$refs.appMain.style.marginTop = 0;
                }
            }
        }
    };
</script>

<style lang="less">
    .app-main {
        width: 100%;
        padding: 10px 0;
    }
</style>