<template>
    <!-- <el-card shadow="never"> -->
    <el-tabs tab-position="left" class="settings-main">
        <el-tab-pane label="基本设置">
            <div class="settings-content">
                <div class="settings-content-title">基本设置</div>
            </div>
        </el-tab-pane>
        <el-tab-pane label="安全设置">
            <div class="settings-content">
                <div class="settings-content-title">安全设置</div>
                <com-list :data="test">
                    <template slot="action" slot-scope="{data}">
                        <el-button type="text">{{data.btnText}}</el-button>
                    </template>
                </com-list>
            </div>
        </el-tab-pane>
        <el-tab-pane label="账号绑定">
            <div class="settings-content">
                <div class="settings-content-title">账号绑定</div>
                <com-list :data="test2">
                    <template slot="action" slot-scope="{data}">
                        <el-button type="text">{{data.btnText}}</el-button>
                    </template>
                </com-list>
            </div>
        </el-tab-pane>
        <el-tab-pane label="新消息通知">
            <div class="settings-content">
                <div class="settings-content-title">新消息通知</div>
                <com-list :data="test3">
                    <template slot="action" slot-scope="{data}">
                        <el-switch v-model="data.open"></el-switch>
                    </template>
                </com-list>
            </div>
        </el-tab-pane>
    </el-tabs>
    <!-- </el-card> -->
</template>

<script>
    import comList from "@/components/com-list";
    import iconTwitter from "@/assets/svg/icon-twitter.svg";
    import iconWechat from "@/assets/svg/icon-wechat.svg";
    import iconFacebook from "@/assets/svg/icon-facebook.svg";

    export default {
        name: "settings",
        components: {
            comList
        },
        data() {
            return {
                test: [
                    {
                        title: "账户密码",
                        des: "当前密码强度：强",
                        btnText: "修改"
                    },
                    {
                        title: "密保手机",
                        des: "已绑定手机：138****8293",
                        btnText: "修改"
                    },
                    {
                        title: "密保问题",
                        des: "未设置密保问题，密保问题可有效保护账户安全",
                        btnText: "设置"
                    },
                    {
                        title: "备用邮箱",
                        des: "已绑定邮箱：ant***sign.com",
                        btnText: "修改"
                    },
                    {
                        title: "MFA 设备",
                        des: "未绑定 MFA 设备，绑定后，可以进行二次确认",
                        btnText: "绑定"
                    }
                ],
                test2: [
                    {
                        title: "微信",
                        des: "当前未绑定微信账号",
                        avatarUrl: iconWechat,
                        btnText: "绑定"
                    },
                    {
                        title: "支付宝",
                        des: "当前未绑定支付宝账号",
                        avatarUrl:
                            "https://file.iviewui.com/admin-pro-dist/img/icon-social-wechat.c69ec08c.svg",
                        btnText: "绑定"
                    },
                    {
                        title: "Facebook",
                        des: "当前未绑定 Facebook 账号",
                        avatarUrl: iconFacebook,
                        btnText: "绑定"
                    },
                    {
                        title: "Twitter",
                        des: "当前未绑定 Twitter 账号",
                        avatarUrl: iconTwitter,
                        btnText: "绑定"
                    }
                ],
                test3: [
                    {
                        title: "账户密码",
                        des: "其他用户的消息将以站内信的形式通知",
                        open: true
                    },
                    {
                        title: "系统消息",
                        des: "系统消息将以站内信的形式通知",
                        open: true
                    },
                    {
                        title: "待办任务",
                        des: "待办任务将以站内信的形式通知",
                        open: true
                    }
                ]
            };
        }
    };
</script>

<style lang="less" scoped>
    .settings-main {
        display: flex;
        padding: 16px 0;
        border-radius: 4px;
        background-color: #fff;

        /deep/ .el-tabs__header {
            height: auto;

            .el-tabs__nav {
                min-width: 200px;

                .el-tabs__active-bar {
                    display: none;
                }

                .el-tabs__item {
                    text-align: left;
                    transition: all 0.3s;
                    margin: 5px 0;

                    &::before {
                        position: absolute;
                        right: 0;
                        height: 100%;
                        width: 3px;
                        background: linear-gradient(#0081ff, #22ebff);
                        transform: scaleY(0);
                        opacity: 0;
                        transition: transform 0.15s
                                cubic-bezier(0.215, 0.61, 0.355, 1),
                            opacity 0.15s cubic-bezier(0.215, 0.61, 0.355, 1);
                        content: "";
                    }

                    &.is-active {
                        font-weight: 800;
                        background: #e6f7ff;

                        &::before {
                            transform: scaleY(1);
                            opacity: 1;
                            transition: transform 0.15s
                                    cubic-bezier(0.645, 0.045, 0.355, 1),
                                opacity 0.15s cubic-bezier(0.645, 0.045, 0.355, 1);
                        }
                    }
                }
            }
        }
        /deep/.el-tabs__content {
            padding: 8px 40px;
            flex: 1;
        }

        .settings-content {
            .settings-content-title {
                margin-bottom: 12px;
                color: rgba(0, 0, 0, 0.85);
                font-weight: 500;
                font-size: 20px;
                line-height: 28px;
            }
        }
    }
</style>