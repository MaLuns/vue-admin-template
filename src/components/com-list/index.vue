<template>
    <ul class="list-items">
        <li class="list-item" v-for="(item,index) in data" :key="index">
            <slot :data="item" :index="index">
                <el-avatar :shape="shape" :size="iconSize" v-if="item.icon || item.src" :icon="item.icon" :src="item.src"></el-avatar>
                <div class="list-item-meta">
                    <div class="list-item-meta-title">{{item.title}}</div>
                    <div class="list-item-meta-description">{{item.description}}</div>
                </div>
            </slot>
            <slot name="content" :data="item" :index="index"></slot>
            <div class="list-item-action">
                <slot name="action" :data="item" :index="index">
                    <el-button type="text" v-if="!!item.btnText" @click="handClick(item,index)">{{item.btnText}}</el-button>
                </slot>
            </div>
        </li>
    </ul>
</template>

<script>
    export default {
        name: "com-list",
        props: {
            data: {
                type: Array,
                default() {
                    return [];
                }
            },
            shape: {
                type: String,
                default: "circle"
            },
            iconSize: {
                type: [Number, String],
                default: "large"
            }
        },
        methods: {
            handClick(data, index) {
                this.$emit("handclick", data, index);
            }
        }
    };
</script>

<style lang="less" scoped>
    .list-items {
        list-style: none;
        .list-item {
            display: flex;
            align-items: center;
            padding: 14px 0;

            /deep/.el-avatar {
                margin-right: 10px;
                background: transparent;
                &.el-avatar--icon {
                    background: #d3d3d3;
                }
            }

            .list-item-meta {
                flex: 1;
                display: inline-block;

                .list-item-meta-title {
                    margin-bottom: 4px;
                    color: rgba(0, 0, 0, 0.65);
                    font-size: 14px;
                    line-height: 22px;
                }

                .list-item-meta-description {
                    color: rgba(0, 0, 0, 0.45);
                    font-size: 14px;
                    line-height: 22px;
                }
            }

            .list-item-action {
                padding: 0 10px;
            }

            + .list-item {
                border-top: 1px solid #f1f1f1;
            }
        }
    }
</style>