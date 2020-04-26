<template>
    <el-card shadow="never">
        <h2>Admin Template</h2>
        <pre>
    ┌── public                     
    │   ├── index.html             // html模板
    │   ├── favicon.ico            // favicon图标
    │ 
    ├── src                        // 源代码
    │   ├── api                    // 所有请求
    │   ├── assets                 // 静态资源
    │   ├── components             // 全局公用组件
    │   ├── config                 // 配置文件
    │   ├── libs                   // 全局公用方法
    │   ├── locale                 // 国际化 
    │   ├── mock                   // 模拟数据
    │   ├── plugin                 // vue插件
    │   ├── router                 // 路由
    │   ├── store                  // 全局 store管理
    │   ├── views                  // view
    │   ├── App.vue                // 入口页面
    │   ├── index.less             // 全局样式
    │   ├── main.js                // 入口 加载组件 初始化等
    │ 
    ├── vue.config.js              // vue-cli 配置
    ├── .gitignore                 // git 忽略项
    └── package.json               // package.json
        </pre>
    </el-card>
</template>

<script>
    import demoImg from "@/assets/demo.png";
    export default {
        name: "home",
        data() {
            return {
                src: demoImg
            };
        }
    };
</script>

<style lang="less" scoped>
    ul {
        margin-left: 20px;
        li {
            line-height: 26px;
        }
    }
</style>