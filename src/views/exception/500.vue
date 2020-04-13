<template>
    <error-page :src="src" code="500" subtitle="抱歉，服务器出错了。"></error-page>
</template>

<script>
    import error500 from "@/assets/error_images/500.svg";
    import errorPage from "./error-page.vue";
    export default {
        name: "error-500",
        components: {
            errorPage
        },
        data() {
            return {
                src: error500
            };
        }
    };
</script>
