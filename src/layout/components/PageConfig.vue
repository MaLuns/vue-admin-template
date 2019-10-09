<template>
    <div>
        <div class="ttt">
            <el-button type="primary" icon="el-icon-edit" circle></el-button>
        </div>
        <div class="tttttt">
            <div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {};
</script>

<style lang="less" scoped>
    .ttt {
        position: fixed;
        bottom: 20px;
        right: 20px;
        z-index: 99999;
    }
    .tttttt {
        height: 100vh;
        width: 100vw;
        position: fixed;
        background: #00000075;
        top: 0;
        left: 0;
        z-index: 9999;
        > div {
            position: absolute;
            width: 300px;
            height: 100%;
            background: #fff;
            right: 0;
            
        }
    }
</style>