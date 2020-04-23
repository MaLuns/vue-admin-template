<template>
    <el-card shadow="never">
        <div>点击右上角的多语言切换按钮，尝试切换不同的语言，下面的内容会自动变化：</div>
        <br />
        1. {{ $t("message.hi") }}
        <br />
        <br />2. element-ui 组件切换
        <br />
        <br />
        <el-calendar v-model="value" style="width:50%"></el-calendar>
    </el-card>
</template>
<script>
    export default {
        name: "i18n",
        data() {
            return {
                value: ""
            };
        }
    };
</script>

<style>
</style>