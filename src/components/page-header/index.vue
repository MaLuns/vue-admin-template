<template>
    <div class="page-header">
        <h2>{{title}}</h2>
        <slot name="content"></slot>
        <div class="desc">
            {{desc}}
        </div>
    </div>
</template>

<script>
    export default {
        name: "PageHeader",
        props: {
            title: String,
            desc: String
        },
        data() {
            return {};
        }
    };
</script>

<style lang="less" scoped>
    .page-header {
        background: #fff;
        margin: 0px -20px 20px;
        padding: 24px;

        .desc {
            color: #000000a6;
            font-size: 14px;
            line-height: 1.5;
            list-style: none;
            padding: 12px 0 0;
        }
    }
</style>