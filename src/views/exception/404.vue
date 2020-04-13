<template>
    <error-page :src="src" code="404" subtitle="抱歉，你访问的页面不存在。"></error-page>
</template>

<script>
    import error404 from "@/assets/error_images/404.svg";
    import errorPage from "./error-page.vue";
    export default {
        name: "error-404",
        components: {
            errorPage
        },
        data() {
            return {
                src: error404
            };
        }
    };
</script>
