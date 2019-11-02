<template>
    <canvas></canvas>
</template>

<script>
    export default {
        name: "Home",
        data() {
            return {
                value: 0
            };
        },
        mounted() {},
        methods: {}
    };
</script>

<style lang="less">
    .user-config {
        .box {
            width: 100px;
            height: 100px;
            background: red;
        }
        .el-tabs__item {
            text-align: left !important;
            margin: 4px 0;
            font-size: 14px;
            color: #000000a6;
            min-width: 160px;

            &.is-active {
                color: #409eff;
                background: #e6f7ff;
                font-weight: 800;
            }

            &::before {
                position: absolute;
                top: 0;
                right: 0;
                bottom: 0;
                border-right: 3px solid #1890ff;
                transform: scaleY(0.0001);
                opacity: 0;
                transition: transform 0.15s cubic-bezier(0.215, 0.61, 0.355, 1),
                    opacity 0.15s cubic-bezier(0.215, 0.61, 0.355, 1);
                content: "";
            }

            &.is-active::before {
                transform: scaleY(1);
                opacity: 1;
                transition: transform 0.15s cubic-bezier(0.645, 0.045, 0.355, 1),
                    opacity 0.15s cubic-bezier(0.645, 0.045, 0.355, 1);
            }

            &:hover {
                color: #1890ff;
            }
        }
        .el-tabs__active-bar {
            display: none !important;
        }
    }
</style>