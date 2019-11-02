<style lang="less" scoped>
    @import "index.less";
</style>

<template>
    <div style="height: 100%;">
        <canvas id="bgcanvas"></canvas>
        <div class="login">
            <div class="content">
                <div class="wlt-title">
                    <h1>Admin Template</h1>
                    <!--<div class="user-layout-desc">西湖区最好用的Vue Admin Template</div> -->
                </div>
                <div class="login-main">
                    <el-form :model="from">
                        <el-form-item>
                            <el-input prefix-icon="el-icon-s-custom" placeholder="用户名" v-model="from.loginName"></el-input>
                        </el-form-item>
                        <el-form-item>
                            <el-input show-password prefix-icon="el-icon-lock" placeholder="密码" v-model="from.passWorld"></el-input>
                        </el-form-item>
                        <el-form-item>
                            <el-checkbox v-model="from.autologin">自动登录</el-checkbox>
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
    import ajax from "@/libs/ajax";
    import logSvg from "@/assets/log.svg";

    export default {
        name: "Login",
        data() {
            return {
                logSvg,
                labelPosition: "right",
                from: {
                    autologin: true,
                    loginName: "超级用户",
                    passWorld: ""
                },
                options: []
            };
        },
        mounted() {
            this.GetZTList();
            this.InitCanvas("bgcanvas");
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
            },
            InitCanvas(id) {
                if (document.getElementById(id)) {
                    var canvas = document.getElementById(id),
                        ctx = canvas.getContext("2d"),
                        pr = window.devicePixelRatio || 1,
                        w = window.innerWidth,
                        h = 300, //window.innerHeight,
                        f = 90,
                        q,
                        m = Math,
                        r = 0,
                        u = m.PI * 2,
                        cos = m.cos,
                        random = m.random;
                    canvas.width = w * pr;
                    canvas.height = h * pr;
                    canvas.style.position = "absolute";
                    canvas.style.bottom = 0;
                    ctx.scale(pr, pr);
                    ctx.globalAlpha = 0.6;

                    canvas.init = () => {
                        ctx.clearRect(0, 0, w, h);
                        q = [{ x: 0, y: h * 0.7 + f }, { x: 0, y: h * 0.7 - f }];
                        while (q[1].x < w + f) canvas.draw(q[0], q[1]);
                    };

                    canvas.newPointsY = p => {
                        var t = p + (random() * 2 - 1.1) * f;
                        return t > h || t < 0 ? canvas.newPointsY(p) : t;
                    };

                    canvas.draw = (i, j) => {
                        ctx.beginPath();
                        ctx.moveTo(i.x, i.y);
                        ctx.lineTo(j.x, j.y);
                        var k = j.x + (random() * 2 - 0.25) * f,
                            n = canvas.newPointsY(j.y);
                        ctx.lineTo(k, n);
                        ctx.closePath();
                        r -= u / -50;
                        ctx.fillStyle =
                            "#" +
                            (
                                ((cos(r) * 127 + 128) << 16) |
                                ((cos(r + u / 3) * 127 + 128) << 8) |
                                (cos(r + (u / 3) * 2) * 127 + 128)
                            ).toString(16);
                        ctx.fill();
                        q[0] = q[1];
                        q[1] = { x: k, y: n };
                    };

                    document.onclick = canvas.init;
                    document.ontouchstart = canvas.init;
                    canvas.init();
                }
            }
        }
    };
</script>
