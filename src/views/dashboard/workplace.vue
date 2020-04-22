<template>
    <div>
        <page-header title="工作台">
            <div slot="content" class="workplace-row">
                <div class="workplace-content">
                    <el-avatar :size="80" style="box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.1);" :src="avatar"></el-avatar>
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
        </page-header>
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
                            <div class="grid3">
                                <div class="grid-item" v-for="(item,index) in itemArr" :key="index">
                                    <div class="apps-con" :style="{backgroundImage:'url('+item.bgImg+')'}">
                                        <p class="apps-name">{{item.title}}</p>
                                        <p class="apps-desc">{{item.desc}}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </el-card>

                    <el-card class="box-card" shadow="never" :body-style="cardBodyStyle">
                        <div slot="header" class="clearfix">
                            <span class="clearfix-title">
                                <i class="el-icon-s-opportunity"></i>
                                动态
                            </span>
                        </div>
                        <ul class="list-items">
                            <li class="list-item" v-for="(item,index) in 8" :key="index">
                                <div class="list-item-meta">
                                    <el-avatar :size="40" style="box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.1);" :src="avatar"></el-avatar>
                                    <div class="list-item-meta-content">
                                        <p style="font-size:14px;color:#515a6e;">
                                            <strong>白云苍狗</strong> 发表文章
                                            <el-link :underline="false" type="primary">Vue Seo 页面优化之 Nuxt 服务器渲染</el-link>
                                        </p>
                                        <div class="el-timeline-item__timestamp is-bottom">2019-10-11 20:46</div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </el-card>
                </el-col>

                <el-col :xs="24" :sm="24" :md="24" :lg="8">
                    <el-card class="box-card" shadow="never">
                        <div slot="header" class="clearfix">
                            <span class="clearfix-title">
                                <i class="el-icon-star-on"></i>
                                快捷操作
                            </span>
                        </div>
                        <div>
                            <div class="grid3">
                                <div class="grid-item" style="height:50px;" v-for="(item,index) in 6" :key="index">
                                    <div class="shortcut-content">
                                        <i style="font-size: 30px;color: #409eff;" class="el-icon-video-camera-solid"></i>
                                        <el-link style="margin-top: 5px;" :underline="false">快捷{{item}}</el-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </el-card>
                    <el-card class="box-card" shadow="never">
                        <div slot="header" class="clearfix">
                            <span class="clearfix-title">
                                <i class="el-icon-s-custom"></i>
                                团队成员
                            </span>
                        </div>
                        <div>
                            <el-row :gutter="20">
                                <el-col :span="12" v-for="(item,index) in 9" :key="index">
                                    <div style="height:60px;display: flex;align-items: center;padding: 0 20px;">
                                        <el-avatar :size="40" style="box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.1);" :src="avatar"></el-avatar>
                                        <span style="font-size:14px;color:#515a6e;margin-left: 20px;flex: 1;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;word-break: break-all;">
                                            <strong>白云苍狗{{item}}</strong>
                                        </span>
                                    </div>
                                </el-col>
                            </el-row>
                        </div>
                    </el-card>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
    import PageHeader from "@/components/page-header";
    import itemIma from "@/assets/middle.jpg";
    import avatar from "@/assets/avatar.jpg";

    export default {
        name: "workplace",
        data() {
            return {
                avatar,
                cardBodyStyle: {
                    padding: "0 20px"
                },
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
                ]
            };
        },
        components: {
            PageHeader
        }
    };
</script>

<style lang="less" scoped>
    @media screen and (max-width: 1000px) {
        .workplace-row {
            display: block !important;
        }
        .workplace-extraContent {
            margin-top: 20px;
        }
    }

    .workplace-row {
        margin-top: 20px;
        display: flex;
        align-items: center;

        .workplace-content {
            display: flex;
            flex: 1;

            .workplace-style-content {
                margin-left: 24px;
                color: #00000073;
                line-height: 22px;
                position: relative;
                font-size: 14px;
                top: 8px;
                display: inline-block;
                vertical-align: top;
                flex: 1;

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
            text-align: center;
            
            .workplace-style-statItem {
                position: relative;
                display: inline-block;
                padding: 0 32px;

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

                + .workplace-style-statItem {
                    border-left: 1px solid #f1f1f1;
                }
            }
        }
    }

    .grid3 {
        display: grid;
        grid-template-columns: 33.33% 33.33% 33.33%;

        .grid-item {
            height: 100px;
            padding: 5px;
        }
    }
    .workplace-main {
        .box-card {
            border: none;
            margin-bottom: 16px;

            /deep/ .el-card__header {
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

        .apps-con {
            height: 100%;
            border-radius: 3px;
            background-color: #f1f1f1;
            background-repeat: no-repeat;
            background-size: cover;
            background-position: 50%;
            cursor: pointer;

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

        .list-item {
            list-style: none;
            border-top: 1px solid #f1f1f1;

            &:first-child {
                border-top: none;
            }

            .list-item-meta {
                display: flex;
                height: 80px;
                align-items: center;

                .list-item-meta-content {
                    flex: 1;
                    margin-left: 20px;
                }
            }
        }

        .shortcut-content {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100%;
            flex-direction: column;
        }
    }
</style>
