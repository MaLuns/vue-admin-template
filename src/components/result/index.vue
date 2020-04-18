<template>
    <el-card shadow="never">
        <div :class="['result',type]">
            <div class="result-icon">
                <i class="el-icon-success" v-if="type=='success'"></i>
                <i class="el-icon-error" v-else></i>
                <h2 v-if="type=='success'">提交成功</h2>
                <h2 v-else>提交失败</h2>
                <p>{{text}}</p>
            </div>
            <div class="result-content">
                <slot></slot>
            </div>
            <div style=" text-align: center;">
                <slot name="footer"></slot>
            </div>
        </div>
    </el-card>
</template>

<script>
    export default {
        name: "com-result",
        props: {
            type: {
                type: String,
                default: "success"
            },
            text: {
                type: String
            }
        }
    };
</script>
<style lang="less" scoped>
    .result {
        position: relative;
        margin: 0 auto;
        margin-top: 50px;
        left: 0;
        right: 0;

        .result-icon {
            text-align: center;
            i {
                font-size: 80px;
                color: #67c23a;
                margin-bottom: 20px;
            }
            h2 {
                color: #000000d9;
                font-size: 24px;
                line-height: 1.8;
                font-weight: 500;
            }
            p {
                color: #00000073;
                font-size: 14px;
                line-height: 1.6;
            }
        }

        &.error {
            .result-icon {
                i {
                    color: red;
                }
            }
        }

        .result-content {
            background-color: #fafafa;
            padding: 10px 30px;
            margin: 20px auto;
            width: 70%;
        }
    }
</style>