<style lang="less">
    @import "index.less";
</style>

<template>
    <div class="login">
        <div class="content">
            <div class="left"></div>
            <div class="right">
                <div class="login-from">
                    <div class="wlt-title"></div>
                    <el-form :model="from">
                        <el-form-item>
                            <el-select v-model='from.ztCode' placeholder="请选择" style="width:100%">
                                <el-option v-for="item in options" :key="item.ZTCode" :label="item.ZTname" :value="item.ZTCode"> </el-option>
                                <i slot="prefix" class="el-input__icon el-icon-s-platform"></i>
                            </el-select>
                        </el-form-item>
                        <el-form-item>
                            <el-input prefix-icon="el-icon-s-custom" v-model="from.loginName"></el-input>
                        </el-form-item>
                        <el-form-item>
                            <el-input show-password prefix-icon="el-icon-lock" v-model="from.type"></el-input>
                        </el-form-item>
                        <el-form-item>
                            <el-button style="width:100%;" type="primary" @click="SubmitLogin">登录</el-button>
                        </el-form-item>
                    </el-form>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import ajax from "@/libs/ajax";
    window.ajax = ajax;

    export default {
        name: "Login",
        data() {
            return {
                labelPosition: "right",
                from: {
                    ztCode: "",
                    loginName: "超级用户",
                    passWorld: ""
                },
                options: []
            };
        },
        mounted() {
            this.GetZTList();
        },
        methods: {
            GetZTList() {
                ajax({
                    url: "/WebApi/Login/GetZtData",
                    method: "post"
                }).then(({ data }) => {
                    let { ReCode = 1, ResponseData = [] } = data;
                    if (ReCode == 0) {
                        this.options = ResponseData;
                        if (ResponseData.length > 0) {
                            this.from.ztCode = ResponseData[0].ZTCode;
                        }
                    }
                });
            },
            SubmitLogin() {
                this.$store.dispatch("user/setjwt_token", "adasdadsasd");
                this.$router.push({
                    path: "/home"
                });
            }
        }
    };
</script>
