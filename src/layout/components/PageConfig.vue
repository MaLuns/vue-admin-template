<template>
    <div>
        <div class="ttt">
            <el-button @click="condition = !condition" type="primary" icon="el-icon-edit" circle></el-button>
        </div>
        <div v-show="condition" class="config-page">
            <div class="config-mask"></div>
            <div class="config-content"></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "PageConfig",
        data() {
            return {
                condition: false
            };
        },
        watch: {
            condition: function(val) {
                if (val) {
                    document.body.style.overflow = "hidden";
                } else {
                    document.body.style.overflow = "auto";
                }
            }
        }
    };
</script>

<style lang="less" scoped>
    .ttt {
        position: fixed;
        bottom: 20px;
        right: 20px;
        z-index: 99999;
    }

    .config-page {
        height: 100vh;
        width: 100vw;
        z-index: 2000;
        overflow: hidden;
        position: fixed;
        top: 0;
        left: 0;
    }

    .config-mask {
        height: 100%;
        width: 100%;
        position: absolute;
        background: #00000075;
        z-index: 2000;
        animation: fadeIn 0.3s 1;
    }

    .config-content {
        position: absolute;
        width: 250px;
        height: 100%;
        background: #fff;
        z-index: 2001;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        right: 0;
        animation: fadeInddd 0.3s 1;
    }

    @keyframes fadeIn {
        0% {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
    @keyframes fadeInddd {
        0% {
            opacity: 0;
            transform-origin: 0 0;
            transform: translateX(100%);
        }

        to {
            opacity: 1;
            transform-origin: 0 0;
            transform: translateX(0);
        }
    }
</style>