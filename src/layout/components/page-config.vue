<template>
    <div :class="{'config-page':true,'config-page-open':open}">
        <div class="config-mask" @click="open=false;"></div>
        <div class="config-content">
            <div>
                <p class="config-title">整体风格设置</p>
                <div class="setting-checbox">
                    <div @click="changeNavTheme('dark')" :class="{'setting-checbox-item':true,'is-check':navTheme=='dark'}"><img :src="icon.darkIcon" alt=""></div>
                    <div @click="changeNavTheme('light')" :class="{'setting-checbox-item':true,'is-check':navTheme=='light'}"><img :src="icon.lightIcon" alt=""></div>
                </div>
            </div>
            <div class="theme-color">
                <p class="config-title">主题色</p>
                <div class="theme-color-content">
                    <div class="theme-color-block" style="background-color: rgb(245, 34, 45);"></div>
                    <div class="theme-color-block" style="background-color: rgb(250, 84, 28);"></div>
                    <div class="theme-color-block" style="background-color: rgb(250, 173, 20);"></div>
                    <div class="theme-color-block" style="background-color: rgb(19, 194, 194);"></div>
                    <div class="theme-color-block" style="background-color: rgb(82, 196, 26);"></div>
                    <div class="theme-color-block" style="background-color: rgb(24, 144, 255);"></div>
                    <div class="theme-color-block" style="background-color: rgb(47, 84, 235);"></div>
                    <div class="theme-color-block" style="background-color: rgb(114, 46, 209);"></div>
                </div>
            </div>
            <div>
                <p class="config-title">导航模式</p>
                <div class="setting-checbox">
                    <div class="setting-checbox-item"><img :src="icon.darkIcon" alt=""></div>
                    <div class="setting-checbox-item"><img :src="icon.lightIcon" alt=""></div>
                </div>
            </div>
            <div class="open-btn" @click="open=!open" v-dragY :style="setBtnStyle">
                <i class="el-icon-close" v-if="open"></i>
                <i class="el-icon-setting" v-else></i>
            </div>
        </div>
    </div>
</template>

<script>
    import darkIcon from "@/assets/svg/nav-theme-dark.svg";
    import lightIcon from "@/assets/svg/nav-theme-light.svg";
    import topIcon from "@/assets/svg/nav-style-top.svg";
    import { mapGetters } from "vuex";

    export default {
        name: "PageConfig",
        data() {
            return {
                setBtnStyle: {
                    top: localStorage.getItem("setBtnTop")
                },
                icon: {
                    darkIcon,
                    lightIcon,
                    topIcon
                },
                open: false
            };
        },
        computed: {
            ...mapGetters(["navTheme"])
        },
        watch: {
            open: function(val) {
                if (val) {
                    document.body.style.overflow = "hidden";
                    if (this.hasScrollbar())
                        document.body.style.width = "calc(100% - 17px)";
                } else {
                    document.body.style.overflow = "auto";
                    if (this.hasScrollbar()) document.body.style.width = "100%";
                }
            }
        },
        methods: {
            changeNavTheme(theme) {
                this.$store.dispatch("app/changeNavTheme", theme);
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
            transform-origin: 0 0;
            transform: translateX(100%);
            transition: all 0.3s;
            padding: 24px;

            .open-btn {
                position: absolute;
                top: 25%;
                width: 48px;
                height: 48px;
                left: -48px;
                background: #409eff;
                border-radius: 5px 0 0 5px;
                color: #fff;
                font-size: 24px;
                text-align: center;
                line-height: 48px;
            }
        }

        &.config-page-open {
            .config-mask {
                transition: opacity 0.3s;
                opacity: 1;
                height: 100%;
            }

            .config-content {
                transform-origin: 0 0;
                transform: translateX(0);
            }
        }

        .theme-color {
            margin: 24px 0;
            overflow: hidden;
            padding-bottom: 24px;
            border-bottom: 1px solid #e2e2e2;

            .theme-color-block {
                float: left;
                width: 20px;
                height: 20px;
                margin-right: 8px;
                color: #fff;
                font-weight: 700;
                text-align: center;
                border-radius: 2px;
                cursor: pointer;
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