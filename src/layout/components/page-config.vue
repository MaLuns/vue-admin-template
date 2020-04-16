/* 配置页 */
<template>
    <div :class="{'config-page':true,'config-page-open':open}">
        <div class="config-mask" @click="open=false;"></div>
        <div class="config-content">
            <div class="config-content-item">
                <p class="config-title">整体风格设置</p>
                <div class="setting-checbox">
                    <div @click="SetGlobalConfig('navTheme','dark')" :class="{'setting-checbox-item':true,'is-check':navTheme==='dark'}">
                        <img :src="icon.darkIcon" alt />
                    </div>
                    <div @click="SetGlobalConfig('navTheme','darkAll')" :class="{'setting-checbox-item':true,'is-check':navTheme==='darkAll'}">
                        <img :src="icon.darkAllIcon" alt />
                    </div>
                    <div @click="SetGlobalConfig('navTheme','light')" :class="{'setting-checbox-item':true,'is-check':navTheme==='light'}">
                        <img :src="icon.lightIcon" alt />
                    </div>
                </div>
            </div>
            <div class="config-content-item">
                <p class="config-title">导航模式</p>
                <div class="setting-checbox">
                    <div @click="SetGlobalConfig('layout','sidemenu')" :class="{'setting-checbox-item':true,'is-check':layout==='sidemenu'}">
                        <img :src="icon.darkIcon" alt />
                    </div>
                    <div @click="SetGlobalConfig('layout','topmenu')" :class="{'setting-checbox-item':true,'is-check':layout==='topmenu'}">
                        <img :src="icon.topIcon" alt />
                    </div>
                </div>
            </div>
            <div class="config-content-item">
                <p class="config-title">其他配置</p>
                <div class="set-config-item" v-show="layout==='topmenu'">
                    内容区域宽度
                    <el-radio-group v-model="content_width" @change="(val)=>SetGlobalConfig('contentWidth',val)">
                        <el-radio label="fluid" style="display: block;margin-bottom: 10px;">流式</el-radio>
                        <el-radio label="fixed">定宽</el-radio>
                    </el-radio-group>
                </div>
                <div class="set-config-item">
                    固定 Header
                    <el-switch :value="fixedHeader" @change="(val)=>SetGlobalConfig('fixedHeader',val)"></el-switch>
                </div>
                <div class="set-config-item">
                    固定侧边菜单
                    <el-switch :value="fixedSiderbar" @change="(val)=>SetGlobalConfig('fixedSiderbar',val)"></el-switch>
                </div>
                <div class="set-config-item">
                    开启标签页
                    <el-switch :value="showTagNav" @change="(val)=>SetGlobalConfig('showTagNav',val)"></el-switch>
                </div>
                <div class="set-config-item">
                    色弱模式
                    <el-switch :value="colorWeak" @change="(val)=>{SetGlobalConfig('colorWeak',val);ChangeColorWeak(val)}"></el-switch>
                </div>
            </div>
            <div class="open-btn" @click="open=!open" :style="setBtnStyle">
                <i class="el-icon-close" v-if="open"></i>
                <i class="el-icon-setting" v-else></i>
                <!-- <i class="el-icon-setting"></i> -->
            </div>
        </div>
    </div>
</template>

<script>
    import darkIcon from "@/assets/svg/nav-theme-dark.svg";
    import darkAllIcon from "@/assets/svg/nav-theme-dark-all.svg";
    import lightIcon from "@/assets/svg/nav-theme-light.svg";
    import topIcon from "@/assets/svg/nav-style-top.svg";
    import { mapGetters } from "vuex";

    export default {
        name: "PageConfig",
        data() {
            return {
                setBtnStyle: {
                    top: localStorage.getItem("setBtnTop"),
                    transition: "all 0s ease 0.3s"
                },
                icon: {
                    darkIcon,
                    lightIcon,
                    darkAllIcon,
                    topIcon
                },
                open: false,
                value: true,
                content_width: null
            };
        },
        created() {
            this.content_width = this.contentWidth;
        },
        computed: {
            ...mapGetters([
                "navTheme",
                "layout",
                "contentWidth",
                "fixedHeader",
                "fixedSiderbar",
                "showTagNav",
                "colorWeak"
            ])
        },
        watch: {
            open: function(val) {
                if (val) {
                    if (this.hasScrollbar()) {
                        document.body.style.overflow = "hidden";
                        document.body.style.width = "calc(100% - 17px)";
                    }
                } else {
                    if (this.hasScrollbar()) {
                        document.body.style.width = "";
                        document.body.style.overflow = "";
                    }
                }
            }
        },
        methods: {
            ChangeColorWeak(val) {
                document.documentElement.style.filter = val ? "invert(100%)" : "";
            },
            SetGlobalConfig(key, val) {
                console.log(key, val);
                this.$store.commit("app/SetGlobalConfig", { key, val });
            },
            hasScrollbar() {
                return (
                    document.body.scrollHeight >
                    (window.innerHeight || document.documentElement.clientHeight)
                );
            }
        },
        directives: {
            dragY: {
                bind: function(el) {
                    let odiv = el;
                    let winY = document.body.clientHeight;
                    odiv.onmousedown = e => {
                        e = e || window.event;
                        e.preventDefault
                            ? e.preventDefault()
                            : (e.returnValue = false);

                        let disY = e.clientY - odiv.offsetTop;

                        document.onmousemove = e => {
                            let height = e.clientY - disY;
                            height = height < 100 ? 100 : height;
                            height = height > winY - 100 ? winY - 100 : height;
                            odiv.style.top = height + "px";
                            localStorage.setItem("setBtnTop", height + "px");
                        };

                        document.onmouseup = () => {
                            document.onmousemove = null;
                            document.onmouseup = null;
                        };
                    };
                }
            }
        }
    };
</script>

<style lang="less" scoped>
    .config-page {
        .config-title {
            margin-bottom: 12px;
            color: #000000d9;
            font-size: 14px;
            line-height: 22px;
            font-weight: 900;
        }
        .config-mask {
            height: 0;
            width: 100vw;
            top: 0;
            left: 0;
            position: fixed;
            background: #00000073;
            z-index: 2000;
            opacity: 0;
            transition: opacity 0.3s linear, height 0s ease 0.3s;
        }

        .config-content {
            position: fixed;
            width: 252px;
            height: ~"calc(100% - 48px)";
            background: #fff;
            z-index: 2001;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
            right: 0;
            top: 0;
            transform-origin: 0 0;
            transform: translateX(100%);
            transition: transform 0.3s;
            padding: 24px;

            .open-btn {
                position: absolute;
                top: 25%;
                width: 48px;
                height: 48px;
                transform: translateX(-72px);
                background: #409eff;
                border-radius: 5px 0 0 5px;
                color: #fff;
                font-size: 24px;
                text-align: center;
                line-height: 48px;
            }

            .config-content-item {
                margin: 24px 0;
                overflow: hidden;
                padding-bottom: 24px;
                border-bottom: 1px solid #e2e2e2;

                .set-config-item {
                    display: flex;
                    justify-content: space-between;
                    color: rgb(32, 32, 32);
                    font-size: 12px;
                    align-items: center;

                    + .set-config-item {
                        margin-top: 16px;
                    }
                }
            }
        }

        &.config-page-open {
            .config-mask {
                transition: opacity 0.3s;
                opacity: 1;
                height: 100%;
            }

            .config-content {
                transform: translateX(0);
            }
        }

        .setting-checbox {
            .setting-checbox-item {
                display: inline-block;
                margin-right: 15px;
                position: relative;

                img {
                    width: 48px;
                }

                &.is-check::before {
                    content: " ";
                    width: 10px;
                    height: 10px;
                    position: absolute;
                    background-color: #409eff;
                    border-radius: 50%;
                    bottom: 15px;
                    right: 10px;
                }
            }
        }
    }
</style>