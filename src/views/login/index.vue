<style lang="less" scoped>
    @import "index.less";
</style>

<template>
    <div style="height: 100%;">
        <div class="login">
            <div class="content">
                <div class="wlt-title">
                    <div>
                        <img :src="logSvg" alt="">
                        <h1>Admin Pro</h1>
                    </div>
                    <div class="user-layout-desc">基于 vue 和 element-ui 中后台前端模板</div>
                </div>
                <div class="login-main">
                    <el-tabs v-model="from.type" class="dddd">
                        <el-tab-pane label="账户密码登录" name="0">
                            <el-form :model="from">
                                <el-form-item>
                                    <el-input prefix-icon="el-icon-s-custom" placeholder="用户名" v-model="from.loginName"></el-input>
                                </el-form-item>
                                <el-form-item>
                                    <el-input show-password prefix-icon="el-icon-lock" placeholder="密码" v-model="from.passWorld"></el-input>
                                </el-form-item>
                            </el-form>
                        </el-tab-pane>
                        <el-tab-pane label="手机号登录" name="1">
                            <el-form :model="from">
                                <el-form-item>
                                    <el-input prefix-icon="el-icon-mobile-phone" placeholder="手机号" v-model="from.mobile"></el-input>
                                </el-form-item>
                                <el-form-item>
                                    <el-input class="captcha-input" prefix-icon="el-icon-message" placeholder="验证码" v-model="from.captcha"></el-input>
                                    <el-button plain style="float: right;">获取验证码</el-button>
                                </el-form-item>
                            </el-form>
                        </el-tab-pane>
                    </el-tabs> 
                    <el-form :model="from">
                        <el-form-item class="">
                            <el-checkbox v-model="from.autologin">自动登录</el-checkbox>
                            <el-button type="text" style="float: right;">忘记密码</el-button>
                        </el-form-item>
                        <el-form-item>
                            <el-button style="width:100%;" type="primary" @click="SubmitLogin">登录</el-button>
                        </el-form-item>
                    </el-form>
                </div>
            </div>
            <footer class="footer">
                <div>Copyright &copy; 2019 白云苍狗</div>
            </footer>
        </div>
    </div>
</template>
<script>
    import logSvg from "@/assets/log.svg";

    export default {
        name: "Login",
        data() {
            return {
                logSvg,
                labelPosition: "right",
                from: {
                    type:0,
                    autologin: true,
                    loginName: "",
                    passWorld: "",
                    mobile:"",
                    captcha:""
                }
            };
        },
        methods: {
            SubmitLogin() {
                this.$store.dispatch("user/setjwt_token", "admin");
                this.$router.push({name: "Home"});
            }
        }
    };
</script>
