<style lang="less" scoped>
    @import "index.less";
</style>
<template>
    <div class="result-err">
        <div class="pic-err">
            <img :src="src" :alt="code">
        </div>
        <div class="result-title">{{code}}</div>
        <div class="result-subtitle">{{subtitle}}</div>
        <div class="result-extra">
            <el-button type="primary" @click='backHome' size="small">返回首页</el-button>
        </div>
    </div>
</template>
<script>
    export default {
        name: "error-page",
        props: {
            code: String,
            subtitle: String,
            src: String
        },
        methods: {
            backHome() {
                this.$router.push({
                    path: "/"
                });
            }
        }
    };
</script>