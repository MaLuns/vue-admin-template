<template>
    <div>
        <div class="workplace-header">
            <h2>工作台</h2>
            <div class="workplace-row">
                <div class="workplace-content">
                    <el-avatar :size="80" style="box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.1);" :src="circleUrl"></el-avatar>
                    <div class="workplace-style-content">
                        <div class="workplace-style-content-title">早安，白云苍狗，祝你开心每一天！</div>
                        <div>.Net | 某某某事业群－某某平台部－某某技术部</div>
                    </div>
                </div>
                <div class="workplace-extraContent">
                    <div class="workplace-style-statItem">
                        <div class="statistic">
                            <div class="statistic-title">项目数</div>
                            <div class="statistic-content">56</div>
                        </div>
                    </div>
                    <div class="workplace-style-statItem">
                        <div class="statistic">
                            <div class="statistic-title">团队内排名</div>
                            <div class="statistic-content">8/ 24</div>
                        </div>
                    </div>
                    <div class="workplace-style-statItem">
                        <div class="statistic">
                            <div class="statistic-title">项目访问</div>
                            <div class="statistic-content">2,223</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "",
        data() {
            return {
                circleUrl:
                    "https://thirdqq.qlogo.cn/g?b=oidb&k=rFwZsJfkEcl3nC9RAeo81g&s=0"
            };
        }
    };
</script>

<style lang="less">
    .workplace-header {
        background: #fff;
        margin: -20px;
        padding: 24px;

        .workplace-row {
            margin-top: 20px;
            display: flex;
            align-items: center;
            
            .workplace-content {
                flex: 1;
                display: flex;

                .workplace-style-content {
                    height: 80px;
                    margin-left: 24px;
                    color: #00000073;
                    line-height: 22px;
                    position: relative;
                    font-size: 14px;
                    top: 8px;

                    .workplace-style-content-title {
                        margin-bottom: 12px;
                        color: #000000d9;
                        font-weight: 500;
                        font-size: 20px;
                        line-height: 28px;
                    }
                }
            }

            .workplace-extraContent {
                width: 500px;
                text-align: right;

                .workplace-style-statItem {
                    position: relative;
                    display: inline-block;
                    padding: 0 32px;

                    &:after {
                        position: absolute;
                        top: 8px;
                        right: 0;
                        width: 1px;
                        height: 40px;
                        background-color: #e8e8e8;
                        content: "";
                    }
                    .statistic {
                        box-sizing: border-box;
                        margin: 0;
                        padding: 0;
                        color: #000000a6;
                        font-size: 14px;
                        font-variant: tabular-nums;
                        line-height: 1.5;
                        list-style: none;
                        font-feature-settings: "tnum";
                    }

                    .statistic-title {
                        margin-bottom: 4px;
                        color: #00000073;
                        font-size: 14px;
                    }
                    .statistic-content {
                        color: #000000d9;
                        font-size: 24px;
                    }
                }
            }
        }
    }
</style>