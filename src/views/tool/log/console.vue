<template>
    <div>
        <page-header title="控制台日志" desc="使用内置 $log 插件，可以在控制台打印各种日志"></page-header>
        <el-card shadow="never">
            <el-alert title="用法说明" type="info" description="打开控制台，点击不同的按，可显示不同的日志打印效果。" show-icon></el-alert>
            <el-divider>胶囊型</el-divider>
            <el-row>
                <el-button @click="log(item)" :type="item" v-for="item in btn" :key="item">胶囊型（{{item}}）</el-button>
            </el-row>
            <el-divider>普通型</el-divider>
            <el-row>
                <el-button @click="log(item,true)" :type="item" v-for="item in btn" :key="item">普通型（{{item}}）</el-button>
            </el-row>
        </el-card>
    </div>
</template>

<script>
    import PageHeader from "@/components/page-header";
    export default {
        name: "console",
        components: {
            PageHeader
        },
        data() {
            return {
                btn: ["default", "primary", "success", "warning", "error"]
            };
        },
        methods: {
            log(type, plain = false) {
                this.$log({ type, plain, text: "xxxxxxxxxxxxxx" });
            }
        }
    };
</script>
<style lang="less" scoped>
    .el-button--error {
        background: #f56c6c;
        color: #fff;
        outline: 0;

        &:focus,
        &:hover {
            background: #f78989;
            border-color: #f78989;
            color: #fff;
        }
        &:active {
            background: #dd6161;
            border-color: #dd6161;
            color: #fff;
        }
    }
</style>
