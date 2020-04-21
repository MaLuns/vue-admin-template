<template>
    <div class="avatar-list">
        <el-tooltip :disabled="item.name==undefined" :content="item.name" placement="top" v-for="(item,index) in list" :key="index">
            <el-avatar :style="avatarStyle" :size="size" :shape="shape" :src="item.src" :icon="item.icon">{{item.text}}</el-avatar>
        </el-tooltip>
    </div>
</template>

<script>
    export default {
        name: "AvatarList",
        props: {
            list: {
                type: Array,
                default() {
                    return [];
                }
            },
            shape: {
                type: String,
                default: "circle"
            },
            size: {
                type: [String, Number],
                default: "large"
            },
            fit: {
                type: String,
                default: "cover"
            }
        },
        computed: {
            avatarStyle() {
                if (typeof this.size == "number") {
                    return {
                        margin: `0 -${parseInt(this.size / 4)}px 0`
                    };
                }
                return {};
            }
        }
    };
</script>

<style lang="less" scoped>
    .avatar-list {
        .el-avatar {
            margin: 0 -5px;
            border: 1px solid #00000021;
            cursor: pointer;

            &.el-avatar--large {
                margin: 0 -8px 0;
            }

            &.el-avatar--medium {
                margin: 0 -7px 0;
            }

            &.el-avatar--small {
                margin: 0 -6px 0;
            }
        }
    }
</style>