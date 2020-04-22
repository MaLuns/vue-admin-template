<template>
    <el-tabs tab-position="left" class="settings-main">
        <el-tab-pane label="基本设置">
            <div class="settings-content">
                <div class="settings-content-title">基本设置</div>
                <div>
                    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-position="top">
                        <el-form-item label="邮箱" prop="email">
                            <el-input v-model="ruleForm.email" style="width:300px"></el-input>
                        </el-form-item>
                        <el-form-item label="昵称" prop="name">
                            <el-input v-model="ruleForm.name" style="width:300px"></el-input>
                        </el-form-item>
                        <el-form-item label="联系电话" prop="phone">
                            <el-input v-model="ruleForm.phone" style="width:300px"></el-input>
                        </el-form-item>
                        <el-form-item label="个人简介" prop="desc">
                            <el-input type="textarea" v-model="ruleForm.desc" :autosize="{ minRows: 3}" style="width:300px"></el-input>
                        </el-form-item>
                        <el-form-item>
                            <el-button type="primary" @click="submitForm('ruleForm')">更新基本信息</el-button>
                        </el-form-item>
                    </el-form>
                </div>
            </div>
        </el-tab-pane>
        <el-tab-pane label="安全设置">
            <div class="settings-content">
                <div class="settings-content-title">安全设置</div>
                <com-list :data="dataArr"></com-list>
            </div>
        </el-tab-pane>
        <el-tab-pane label="账号绑定">
            <div class="settings-content">
                <div class="settings-content-title">账号绑定</div>
                <com-list :data="dataArr2"></com-list>
            </div>
        </el-tab-pane>
        <el-tab-pane label="新消息通知">
            <div class="settings-content">
                <div class="settings-content-title">新消息通知</div>
                <com-list :data="dataArr3">
                    <template #action="{data}">
                        <el-switch v-model="data.open"></el-switch>
                    </template>
                </com-list>
            </div>
        </el-tab-pane>
    </el-tabs>
</template>

<script>
    import ComList from "@/components/com-list";
    import iconTwitter from "@/assets/svg/icon-twitter.svg";
    import iconWechat from "@/assets/svg/icon-wechat.svg";
    import iconFacebook from "@/assets/svg/icon-facebook.svg";
    import iconZhifubao from "@/assets/svg/icon-zhifubao.svg";
    import avatar from "@/assets/avatar.jpg";

    export default {
        name: "settings",
        components: {
            ComList
        },
        data() {
            return {
                avatar,
                ruleForm: {
                    email: "test@test.com",
                    name: "白云苍狗",
                    phone: "18288888888",
                    des: ""
                },
                rules: {
                    email: [
                        {
                            required: true,
                            message: "请填写您的邮箱!",
                            trigger: "blur"
                        }
                    ],
                    name: [
                        {
                            required: true,
                            message: "请填写您的昵称!",
                            trigger: "blur"
                        }
                    ],
                    phone: [
                        {
                            required: true,
                            message: "请填写您的联系方式！",
                            trigger: "blur"
                        }
                    ],
                    desc: [
                        {
                            required: true,
                            message: "请填写个人简介!",
                            trigger: "blur"
                        }
                    ]
                },
                dataArr: [
                    {
                        title: "账户密码",
                        description: "当前密码强度：强",
                        btnText: "修改"
                    },
                    {
                        title: "密保手机",
                        description: "已绑定手机：138****8293",
                        btnText: "修改"
                    },
                    {
                        title: "密保问题",
                        description: "未设置密保问题，密保问题可有效保护账户安全",
                        btnText: "设置"
                    },
                    {
                        title: "备用邮箱",
                        description: "已绑定邮箱：ant***sign.com",
                        btnText: "修改"
                    },
                    {
                        title: "MFA 设备",
                        description: "未绑定 MFA 设备，绑定后，可以进行二次确认",
                        btnText: "绑定"
                    }
                ],
                dataArr2: [
                    {
                        title: "微信",
                        description: "当前未绑定微信账号",
                        src: iconWechat,
                        btnText: "绑定"
                    },
                    {
                        title: "支付宝",
                        description: "当前未绑定支付宝账号",
                        src: iconZhifubao,
                        btnText: "绑定"
                    },
                    {
                        title: "Facebook",
                        description: "当前未绑定 Facebook 账号",
                        src: iconFacebook,
                        btnText: "绑定"
                    },
                    {
                        title: "Twitter",
                        description: "当前未绑定 Twitter 账号",
                        src: iconTwitter,
                        btnText: "绑定"
                    }
                ],
                dataArr3: [
                    {
                        title: "账户密码",
                        description: "其他用户的消息将以站内信的形式通知",
                        open: true
                    },
                    {
                        title: "系统消息",
                        description: "系统消息将以站内信的形式通知",
                        open: true
                    },
                    {
                        title: "待办任务",
                        description: "待办任务将以站内信的形式通知",
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