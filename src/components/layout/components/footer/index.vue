<template>
    <footer class="app-footer">
        <div class="footer-links">
            <a title="Vue" target="_blank" href="https://cn.vuejs.org/">Vue 2.0</a>
            <a title="Element Ui" target="_blank" href="https://element.eleme.cn/#/zh-CN">Element UI</a>
            <a title="博客" target="_blank" href="https://www.imalun.com">博客</a>
        </div>
        <div class="footer-copyright">Copyright &copy; 2020 白云苍狗 出品</div>
    </footer>
</template>

<script>
    export default {
        name: "footer"
    };
</script>
<style lang="less" scoped>
    .app-footer {
        padding: 24px 50px;
        color: #00000073;
        font-size: 14px;
        background: #f0f2f5;
        text-align: center;

        .footer-links {
            margin: 10px 0;

            a {
                color: #00000073;
                margin: 0 10px;
                text-decoration: none;
                outline: none;
                cursor: pointer;
            }
        }
    }
</style>