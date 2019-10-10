<template>
    <div>
        <div class="workplace-header">
            <h2>工作台</h2>
            <div class="workplace-row">
                <div class="workplace-content">
                    <el-avatar
                        :size="80"
                        style="box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.1);"
                        src="https://thirdqq.qlogo.cn/g?b=oidb&k=rFwZsJfkEcl3nC9RAeo81g&s=0"
                    ></el-avatar>
                    <div class="workplace-style-content">
                        <div class="workplace-style-content-title">早安，白云苍狗，开始您一天的工作吧！</div>
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
        <div class="workplace-main">
            <el-row :gutter="10">
                <el-col :xs="24" :sm="24" :md="24" :lg="16">
                    <el-card class="box-card" shadow="never">
                        <div slot="header" class="clearfix">
                            <span class="clearfix-title">
                                <i class="el-icon-s-grid"></i>
                                我的项目
                            </span>
                            <el-button class="right-btn" type="text">全部项目</el-button>
                        </div>
                        <div>
                            <div class="grid">
                                <div class="grid-item" v-for="(item,index) in itemArr" :key="index">
                                    <div :style="{backgroundImage:'url('+item.bgImg+')'}">
                                        <p class="apps-name">{{item.title}}</p>
                                        <p class="apps-desc">{{item.desc}}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </el-card>

                    <el-card class="box-card" shadow="never" :body-style="{ padding: '0 20px' }">
                        <div slot="header" class="clearfix">
                            <span class="clearfix-title">
                                <i class="el-icon-s-opportunity"></i>
                                动态
                            </span>
                        </div>
                        <div>
                            <div class="tttttttt" v-for="(item,index) in 8" :key="index">
                                <el-avatar
                                    :size="40"
                                    style="box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.1);"
                                    src="https://thirdqq.qlogo.cn/g?b=oidb&k=rFwZsJfkEcl3nC9RAeo81g&s=0"
                                ></el-avatar>
                                <div class="ffffff">
                                    <p style="font-size:14px;color:#515a6e;"> 
                                        <strong>白云苍狗</strong> 发表文章
                                        <el-link
                                            :underline="false"
                                            type="primary"
                                        >Vue Seo 页面优化之 Nuxt 服务器渲染</el-link>
                                    </p>
                                    <div
                                        class="el-timeline-item__timestamp is-bottom"
                                    >2019-10-11 20:46</div>
                                </div>
                            </div>
                        </div>
                    </el-card>
                </el-col>

                <el-col :xs="24" :sm="24" :md="24" :lg="8">
                    <el-card class="box-card" shadow="never">
                        <div slot="header" class="clearfix">
                            <span class="clearfix-title">
                                <i class="el-icon-star-on"></i>
                                快捷操作
                            </span>
                            <el-button class="right-btn" type="text">操作按钮</el-button>
                        </div>
                        <div></div>
                    </el-card>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
    import itemIma from "@/assets/middle.jpg";
    export default {
        name: "",
        data() {
            return {
                itemArr: [
                    {
                        title: "Vue",
                        desc: "渐进式JavaScript 框架",
                        bgImg:
                            "https://dev-file.iviewui.com/ttkIjNPlVDuv4lUTvRX8GIlM2QqSe0jg/middle"
                    },
                    {
                        title: "Vuex",
                        desc: "为 Vue.js 应用程序开发的状态管理模式",
                        bgImg: itemIma
                    },
                    {
                        title: "Vue CLI",
                        desc: "一个基于 Vue.js 进行快速开发的完整系统",
                        bgImg:
                            "https://dev-file.iviewui.com/fAenQ8nvRjL7x0i0jEfuDBZHvJfHf3v6/middle"
                    },
                    {
                        title: "React",
                        desc: "用于构建用户界面的 JavaScript 库",
                        bgImg: itemIma
                    },
                    {
                        title: "Angular",
                        desc: "构建一个单页面应用程序",
                        bgImg:
                            "https://dev-file.iviewui.com/WLXm7gp1EbLDtvVQgkeQeyq5OtDm00Jd/middle"
                    },
                    {
                        title: "jQuery",
                        desc: "一个快速、简洁的JavaScript框架",
                        bgImg: itemIma
                    }
                ],
                activities: [
                    {
                        content: "支持使用图标",
                        timestamp: "2018-04-12 20:46",
                        size: "large",
                        type: "primary",
                        icon: "el-icon-more"
                    },
                    {
                        content: "支持自定义颜色",
                        timestamp: "2018-04-03 20:46",
                        color: "#0bbd87"
                    },
                    {
                        content: "支持自定义尺寸",
                        timestamp: "2018-04-03 20:46",
                        size: "large"
                    },
                    {
                        content: "默认样式的节点",
                        timestamp: "2018-04-03 20:46"
                    }
                ]
            };
        }
    };
</script>

<style lang="less">
    .workplace-header {
        background: #fff;
        margin: -20px -20px 20px;
        padding: 24px;

        .workplace-row {
            margin-top: 20px;
            display: flex;
            align-items: center;

            .workplace-content {
                flex: 1;

                .workplace-style-content {
                    margin-left: 24px;
                    color: #00000073;
                    line-height: 22px;
                    position: relative;
                    font-size: 14px;
                    top: 8px;
                    display: inline-grid;
                    vertical-align: top;

                    .workplace-style-content-title {
                        margin-bottom: 12px;
                        color: #515a6e;
                        font-weight: 700;
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

    .workplace-main {
        .box-card {
            border: none;
            margin-bottom: 16px;

            .el-card__header {
                padding: 12px 20px;

                .clearfix {
                    font-size: 14px;
                    .clearfix-title {
                        color: #515a6e;
                        i {
                            color: rgb(24, 144, 255);
                            padding: 5px;
                            background: rgb(230, 247, 255);
                            border-radius: 50%;
                            margin-right: 5px;
                        }
                    }

                    .right-btn {
                        float: right;
                        padding: 3px 0;
                    }
                }
            }
        }

        .grid {
            .grid-item {
                height: 100px;
                width: 33.33%;
                display: inline-grid;
                margin: 5px 0;

                > div {
                    height: 100%;
                    border-radius: 3px;

                    background-color: #f1f1f1;
                    background-repeat: no-repeat;
                    background-size: cover;
                    background-position: 50%;
                    cursor: pointer;
                    margin: 0 5px;

                    .apps-name {
                        color: #fff;
                        font-weight: 700;
                        padding: 4px 0 0 8px;
                        font-size: 16px;
                        margin-right: 45px;
                    }
                    .apps-desc {
                        font-weight: 400;
                        font-size: 12px;
                        margin-right: 45px;
                        color: #fff;
                        padding: 4px 0 0 8px;
                    }
                }
            }
        }
    }

    .tttttttt {
        display: flex;
        height: 80px;
        align-items: center;
        border-top: 1px solid #f1f1f1;

        &:first-child {
            border-top: none;
        }

        .ffffff {
            flex: 1;
            margin-left: 20px;
        }
    }
</style>