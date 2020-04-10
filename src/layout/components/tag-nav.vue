<template>
    <div class="tags-nav">
        <div class="tags-nav-scroll" :style="scrollNavCss">
            <div
                v-for="tag in tagNavList"
                :key="tag.name"
                class="tag-item"
                @click="handleClick(tag)"
            >
                <div class="tag-title">{{tag.meta.title}}</div>
                <i class="el-icon-close"></i>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapGetters } from "vuex";

    export default {
        name: "TagNav",
        data() {
            return {
                translateX: 0
            };
        },
        computed: {
            ...mapGetters(["tagNavList"]),
            scrollNavCss() {
                return {
                    transform: `translateX(${this.translateX}px)`
                };
            }
        },
        methods: {
            handleClick(route) {
                this.translateX += 40;
                let { name, params, query } = {};
                if (typeof route === "string") name = route;
                else {
                    name = route.name;
                    params = route.params;
                    query = route.query;
                }

                this.$router.push({
                    name,
                    params,
                    query
                });
            }
        }
    };
</script>

<style lang="less" scoped>
    .tags-nav {
        padding: 8px 0;
        position: fixed;
        top: 64px;
        z-index: 9999;
        background: rgb(216, 216, 216);
        overflow: hidden;

        .tags-nav-scroll {
            white-space: nowrap;
            transition: transform 0.5s ease-in-out;

            .tag-item {
                display: inline-block;
                background: #fff;
                margin: 0 5px;
                color: #808695;
                font-size: 14px;
                padding: 5px 15px;
                border-radius: 3px;
                cursor: pointer;
                user-select: none;

                .tag-title {
                    display: inline-block;
                    margin-right: 10px;
                    transition: all 0.2s ease-in-out;

                    &:hover {
                        color: rgb(56, 56, 56);
                    }
                }
                i {
                    &:hover {
                        color: rgb(56, 56, 56);
                    }
                }
            }
        }
    }
</style>