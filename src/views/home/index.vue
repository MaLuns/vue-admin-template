<template>
    <el-card shadow="never">
        <h2>Admin Template</h2>

        <ul>
            项目结构
            <li>
                assets
                <span>静态资源文件</span>
            </li>
            <li>
                config
                <span>配置文件</span>
            </li>
            <li>
                libs
                <span>依赖文件</span>
                <ul>
                    <li>
                        ajax.js
                        <span>axios封装</span>
                    </li>
                    <li>
                        util.js
                        <span>公用方法</span>
                    </li>
                </ul>
            </li>
            <li>
                plugin
                <span>插件</span>
                <ul>
                    <li>
                        log.js
                        <span>日志打印</span>
                    </li>
                </ul>
            </li>
            <li>
                router
                <span>路由</span>
                <ul>
                    <li>routes.js</li>
                    <li>index.js</li>
                </ul>
            </li>
            <li>
                store
                <span>Vuex</span>
                <ul>
                    <li>modules</li>
                    <li>getter.js</li>
                    <li>index.js</li>
                </ul>
            </li>
            <li>
                views
                <span>视图</span>
            </li>
            <li>
                App.vue
                <span>页面入口</span>
            </li>
            <li>
                index.less
                <span>全局样式</span>
            </li>
            <li>
                main.js
                <span>入口</span>
            </li>
        </ul>
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