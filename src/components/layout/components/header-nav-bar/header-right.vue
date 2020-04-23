<template>
    <div class="header-index-right">
        <el-tooltip :content="logTitle" placement="bottom" :effect="effect">
            <div class="navbar-btn" @click="$router.push({name:'log-list'})">
                <el-badge :value="logNum" :max="99" slot="reference" :hidden="logNum==0">
                    <i class="el-icon-aim"></i>
                </el-badge>
            </div>
        </el-tooltip>
        <div class="navbar-btn">
            <i class="el-icon-full-screen"></i>
        </div>
        <div class="navbar-btn">
            <el-badge :value="5" slot="reference">
                <i class="el-icon-bell"></i>
            </el-badge>
        </div>
        <div class="navbar-btn">
            <el-dropdown :hide-on-click="false" placement="bottom" @command="setLang">
                <i class="el-icon-full-screen"></i>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item v-for="(val, key) in lang" :command="key" :key="key">{{val}}</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
        <div class="item">
            <el-dropdown :hide-on-click="false">
                <span class="avatar-link">
                    <el-avatar size="small">白</el-avatar>白云苍狗
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>个人中心</el-dropdown-item>
                    <el-dropdown-item>个人设置</el-dropdown-item>
                    <el-dropdown-item divided>退出登录</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
    </div>
</template>

<script>
    import { mapGetters } from "vuex";
    export default {
        name: "HeaderRight",
        computed: {
            ...mapGetters(["navTheme", "errorList", "lang"]),
            effect() {
                return this.navTheme === "darkAll" ? "light" : "dark";
            },
            logTitle() {
                if (this.errorList.length > 0) {
                    let title = `${this.errorList.length}条日志`;
                    return (
                        title +
                        (this.logNum > 0 ? ` | 包含${this.logNum}条异常` : "")
                    );
                } else {
                    return "没有日志信息";
                }
            },
            logNum() {
                return this.errorList.filter(item => item.type === "error").length;
            }
        },
        methods: {
            setLang(val) {
                this.$i18n.locale = val;
            }
        }
    };
</script>

<style lang="less" scoped>
    .header-index-right {
        position: absolute;
        right: 0;
        top: 0;
        height: 100%;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: flex-end;

        .item {
            margin: 0 15px;
            cursor: pointer;
        }

        .avatar-link {
            display: flex;
            align-items: center;
            span {
                margin-right: 5px;
            }
        }
    }

    .navbar-btn {
        display: flex;
        align-items: center;
        height: 100%;
        padding: 0 11px;
        transition: background 0.3s;
        cursor: pointer;

        .hamburger {
            vertical-align: middle;
            width: 20px;
            height: 20px;
            &.is-active {
                transform: rotate(180deg);
            }
        }

        &:hover {
            background: rgba(0, 0, 0, 0.025);
        }
    }
</style>