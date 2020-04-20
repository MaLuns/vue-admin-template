<template>
    <keep-alive>
        <router-view :include="include"></router-view>
    </keep-alive>
</template>

<script>
    import { mapGetters } from "vuex";
    export default {
        name: "cache-view",
        computed: {
            ...mapGetters(["tagNavList"]),
            include() {
                return [
                    "cache-view",
                    ...(this.tagNavList.length
                        ? this.tagNavList
                              .filter(item => !(item.meta && item.meta.notCache))
                              .map(item => item.name)
                        : [])
                ];
            }
        }
    };
</script>

<style>
</style>