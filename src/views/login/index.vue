<style lang="less" scoped>
    @import "index.less";
</style>

<template>
    <div class="login">
        <div class="content">
            <div class="wlt-title"></div>
            <el-form :model="from">
                <el-form-item>
                    <el-select v-model='from.ztCode' placeholder="请选择" style="width:100%">
                        <el-option v-for="item in options" :key="item.ZTCode" :label="item.ZTname" :value="item.ZTCode"> </el-option>
                        <i slot="prefix" class="el-input__icon el-icon-s-platform"></i>
                    </el-select>
                </el-form-item>
                <el-form-item>
                    <el-input prefix-icon="el-icon-s-custom" placeholder="用户名" v-model="from.loginName"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-input show-password prefix-icon="el-icon-lock" placeholder="密码" v-model="from.type"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button style="width:100%;" type="primary" @click="SubmitLogin">登录</el-button>
                </el-form-item>
            </el-form>
        </div>
        <footer class="footer">
            <div>Copyright &copy; 2019 白云苍狗</div>
        </footer>

    </div>
</template>
<script>
    import ajax from "@/libs/ajax";

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
                    name: "Home"
                });
            }
        }
    };
</script>
