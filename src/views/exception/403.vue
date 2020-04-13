<template>
    <error-page :src="src" code="403" subtitle="抱歉，你无权访问该页面。"></error-page>
</template>

<script>
    import error403 from "@/assets/error_images/403.svg";
    import errorPage from "./error-page.vue";
    export default {
        name: "error-403",
        components: {
            errorPage
        },
        data() {
            return {
                src: error403
            };
        }
    };
</script>
