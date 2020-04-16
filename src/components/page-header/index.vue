<template>
    <div :class="pageHeader">
        <h2>{{title}}</h2>
        <slot name="content"></slot>
        <div class="desc">{{desc}}</div>
    </div>
</template>

<script>
    import { mapGetters } from "vuex";
    export default {
        name: "PageHeader",
        props: {
            title: String,
            desc: String
        },
        computed: {
            ...mapGetters(["layout", "contentWidth"]),
            pageHeader() {
                return {
                    "page-header": true,
                    "page-wide":
                        this.layout === "topmenu" && this.contentWidth === "fixed"
                };
            }
        }
    };
</script>

<style lang="less" scoped>
    .page-header {
        background: #fff;
        margin: -10px -20px 20px;
        padding: 24px;

        .desc {
            color: #000000a6;
            font-size: 14px;
            line-height: 1.5;
            list-style: none;
            padding: 12px 0 0;
        }

        &.page-wide {
            margin: 0px 0px 20px;
        }
    }
</style>