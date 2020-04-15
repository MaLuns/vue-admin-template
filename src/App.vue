<template>
    <div id="app" v-cloak>
        <router-view />
    </div>
</template>

<script>
    export default {
        name: "App",
        mounted(){
           
        }
    };
</script>

<style lang='less'>
    * {
        padding: 0;
        margin: 0;
    }
    #app,
    body,
    html {
        background: #f0f2f5;
    }
    body {
        min-height: 100vh;
    }

    #nprogress .bar {
        background-color: #589cff !important;
        height: 4px !important;
    }

    #nprogress .peg {
        box-shadow: 0 0 10px #589cff, 0 0 5px #589cff;
    }
</style>