<template>
    <div>
        <page-header title="捕获错误信息" desc="系统会自动记录捕获到的错误信息。可在右上角点击'日志'按钮查看。"></page-header>
        <el-card shadow="never">
            <el-alert title="错误信息" type="info" description="打开浏览器控制台，点击按钮，会触发一个错误，系统会自动记录。可在右上角点击'日志'按钮查看。" show-icon></el-alert>
            <el-button type="danger" style="margin: 20px 0;" @click="handclick">触发一个错误</el-button>

            <el-alert title="请求错误" type="info" description="打开浏览器控制台，点击按钮，会请求一个无效的 URL，系统会自动记录。可在右上角点击'日志'按钮查看。" show-icon></el-alert>
            <el-button type="danger" @click="http" style="margin: 20px 0;">发起一个错误请求</el-button>

            <el-alert title="记录自定义日志信息" type="info" description="输入要记录的内容，点击记录按钮后，系统会自动记录。可在右上角点击'日志'按钮查看。" show-icon></el-alert>
            <el-input v-model="input" placeholder="请输入内容" style="width:300px"></el-input>
            <el-button @click="save" type="primary" style="margin: 20px;">保存</el-button>
        </el-card>
    </div>
</template>

<script>
    import PageHeader from "@/components/page-header";
    import ajax from "@/libs/ajax";
    export default {
        name: "error",
        components: {
            PageHeader
        },
        data() {
            return {
                input: ""
            };
        },
        methods: {
            handclick() {
                this.test();
            },
            http() {
                ajax({
                    url: "/Not"
                });
            },
            save() {
                this.$store.commit("app/AddError", {
                    message: this.input,
                    type: "info",
                    meta: {
                        path: this.$route.path
                    }
                });
            }
        }
    };
</script>

<style>
</style>