<template>
    <ul class="list-items">
        <li class="list-item" v-for="(item,index) in data" :key="index">
            <el-avatar v-if="item.avatarUrl!=undefined" :src="item.avatarUrl"></el-avatar>
            <div class="list-item-meta">
                <div class="list-item-meta-title">{{item.title}}</div>
                <div class="list-item-meta-description">{{item.des}}</div>
            </div>
            <div class="list-item-action">
                <slot name="action" :data="item" :index="index"></slot>
            </div>
        </li>
    </ul>
</template>

<script>
    export default {
        name: "com-list",
        props: {
            data: {
                type: Array
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