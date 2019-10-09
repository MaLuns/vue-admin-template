<template>
    <div id="app">
        <router-view />
    </div>
</template>

<script>
    export default {
        name: "App"
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
        height: 100%;
        background: #f1f1f1;
    }

    #nprogress .bar {
        background-color: #589cff !important;
        height: 4px !important;
	}
	
    #nprogress .peg {
        box-shadow: 0 0 10px #589cff, 0 0 5px #589cff;
    }
</style>