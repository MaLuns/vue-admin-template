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
                            <el-select v-model='from.check' placeholder="请选择" style="width:100%">
                                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"> </el-option>
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
                            <el-button style="width:100%;" type="primary" @click="Submit">登录</el-button>
                        </el-form-item>
                    </el-form>
                </div>
            </div>
        </div>
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
                    check: "选项1",
                    name: "",
                    loginName: "超级用户",
                    passWorld: ""
                },
                options: [
                    {
                        value: "选项1",
                        label: "黄金糕"
                    },
                    {
                        value: "选项2",
                        label: "双皮奶"
                    },
                    {
                        value: "选项3",
                        label: "蚵仔煎"
                    }
                ],
                url:
                    "https://apd-8dae7dee4fe79c6ca9c6bf999fbf2190.v.smtcdns.com/vhot2.qqvideo.tc.qq.com/AM0bvafER4V1po-iCrjg2Ccr5GuuT6MDk5o5nkBVu4Ck/uwMROfz2r5zCIaQXGdGnC2dfDmavB6NbsWKJAiRTQBPbT70a/p0909g4jyei.mp4?sdtfrom=v1104&guid=6c0202f582b786433369ee91a6dd33fc&vkey=DD845FC0AA622147F1CB4CA73676F642FB9CF2063D8601B1AA5FC2A97332CC94B670E4390AFCCED311FE10FEEFC68A58EC6A3656F9EC5D1F30B5F347E4EFA24CC62FEB0F99D4DC72BC291470B21BBE167985533CFBA3739C355A5202338FF7C5C3F1C66B46CB4DC722DC9771CFE6A447E32D767D8FDD25DA519BEE7C39AEF3DD"
            };
        },
        mounted() {
            ajax({
                url: "/GetZTList",
                method: "post"
            }).then(res => {
                console.log(res);
            });
        },
        methods: {
            Submit() {
                this.$store.dispatch("user/setjwt_token", "adasdadsasd");
                this.$router.push({
                    path: "/home"
                });
            }
        }
    };
</script>
