<template>
    <div class="tags-nav fixed" ref="tagsNav">
        <div class="btn-con left-btn" v-show="showLeftRightBtn">
            <el-button type="text" icon="el-icon-arrow-left" @click="handleScroll(240)"></el-button>
        </div>
        <div ref="tagsNavScroll" class="tags-nav-scroll" @DOMMouseScroll.prevent="handlescroll" @mousewheel.prevent="handlescroll">
            <div ref="scrollBody" class="scroll-body" :style="scrollNavCss">
                <div ref="tagNavList" v-for="tag in tagNavList" :key="tag.name" class="tag-item" @click="handleClick($event,tag)">
                    <div :class="{'tag-title':true,'tab-active':active(tag)}">{{ tag.meta.title }}</div>
                    <i class="el-icon-close" @click="handleCloseTag(tag)" v-if="homeName!==tag.name"></i>
                </div>
            </div>
        </div>
        <div class="btn-con right-btn" v-show="showLeftRightBtn">
            <el-button type="text" icon="el-icon-arrow-right" @click="handleScroll(-240)"></el-button>
        </div>
        <el-dropdown class="tags-nav-close">
            <i class="el-icon-arrow-down"></i>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item icon="el-icon-circle-close">关闭其他</el-dropdown-item>
                <el-dropdown-item icon="el-icon-error">全部关闭</el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
    </div>
</template>

<script>
    import { homeName } from "@/config";
    import { mapGetters, mapMutations } from "vuex";

    export default {
        name: "TagNav",
        data() {
            return {
                scrollBodyTranslateX: 0,
                homeName,
                showLeftRightBtn: false
            };
        },
        computed: {
            ...mapGetters(["tagNavList", "fixedHeader"]),
            scrollNavCss() {
                return {
                    transform: `translateX(${this.scrollBodyTranslateX}px)`
                };
            }
        },
        mounted() {
            this.setShowLeftRightBtn();

            let resizeFn = this.resize();
            window.addEventListener("resize", resizeFn);
            this.$on("hook:beforeDestroy", () => {
                window.removeEventListener("resize", resizeFn);
            });
        },
        methods: {
            setLayout() {
                let tagsNav = this.$refs.tagsNav;
                this.fixedHeader
                    ? tagsNav.classList.add("fixed")
                    : tagsNav.classList.remove("fixed");
            },
            ...mapMutations("app", ["closeTag", "SetTagNavList"]),
            setShowLeftRightBtn() {
                this.$nextTick(() => {
                    this.showLeftRightBtn =
                        this.$refs.tagsNavScroll.offsetWidth <
                        this.$refs.scrollBody.offsetWidth;
                });
            },
            resize() {
                //监听页面变化
                let timer = null;
                return () => {
                    window.clearTimeout(timer);
                    timer = setTimeout(() => {
                        this.setShowLeftRightBtn();
                        const outerWidth = this.$refs.tagsNavScroll.offsetWidth;
                        const bodyWidth = this.$refs.scrollBody.offsetWidth;

                        if (bodyWidth < outerWidth) {
                            this.scrollBodyTranslateX = 0;
                        } else if (
                            bodyWidth + this.scrollBodyTranslateX <
                            outerWidth
                        ) {
                            this.scrollBodyTranslateX = outerWidth - bodyWidth;
                        }
                    }, 200);
                };
            },
            active(route) {
                return this.$route.name === route.name;
            },
            handlescroll({ type, wheelDelta, detail }) {
                //鼠标滚动
                let delta = 0;
                if (type === "DOMMouseScroll" || type === "mousewheel") {
                    delta = wheelDelta ? wheelDelta : -(detail || 0) * 40;
                }
                this.handleScroll(delta);
            },
            handleScroll(offset) {
                //偏移
                const outerWidth = this.$refs.tagsNavScroll.offsetWidth;
                const bodyWidth = this.$refs.scrollBody.offsetWidth;
                const stx = this.scrollBodyTranslateX;

                if (offset > 0) {
                    this.scrollBodyTranslateX = Math.min(0, stx + offset);
                } else {
                    if (outerWidth < bodyWidth) {
                        if (stx >= -(bodyWidth - outerWidth)) {
                            this.scrollBodyTranslateX = Math.max(
                                stx + offset,
                                outerWidth - bodyWidth
                            );
                        }
                    } else {
                        this.scrollBodyTranslateX = 0;
                    }
                }
                return false;
            },
            handleClick(e, route) {
                //点击标签切换页面
                if (e.target.tagName.toLowerCase() == "i") return;
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
            },
            handleCloseTag(route) {
                //关闭标签
                this.closeTag({ route, checked: route.name === this.$route.name });
            },

            moveToView(tag) {
                //将当前选中的标签移动到可视区域

                const outerWidth = this.$refs.tagsNavScroll.offsetWidth;
                const bodyWidth = this.$refs.scrollBody.offsetWidth;

                if (bodyWidth < outerWidth) {
                    this.scrollBodyTranslateX = 0;
                } else if (tag.offsetLeft < -this.scrollBodyTranslateX) {
                    // 标签在可视区域左侧
                    this.scrollBodyTranslateX = Math.min(0, -tag.offsetLeft);
                } else if (
                    tag.offsetLeft + tag.offsetWidth + this.scrollBodyTranslateX >
                    outerWidth
                ) {
                    // 标签在可视区域右侧
                    this.scrollBodyTranslateX =
                        outerWidth - tag.offsetLeft - tag.offsetWidth;
                }
            },
            findCheckedTag() {
                //找到当前选中的
                this.$nextTick(() => {
                    this.$refs.tagNavList.forEach(item => {
                        item.firstChild.classList.forEach(cls => {
                            if (cls === "tab-active") {
                                this.moveToView(item);
                            }
                        });
                    });
                });
            }
        },
        watch: {
            $route() {
                this.findCheckedTag();
            },
            fixedHeader() {
                this.setLayout();
            }
        }
    };
</script>

<style lang="less" scoped>
    .tags-nav {
        height: 46px;
        /* top: 64px; */
        
        background: #f0f2f5;
        overflow: hidden;
        z-index: 989 !important;
        display: flex;
        align-items: center;

        .tags-nav-scroll {
            overflow: hidden;
            flex: 1;
            position: relative;

            .scroll-body {
                display: inline-block;
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
                            color: rgb(36, 36, 36);
                        }

                        &.tab-active {
                            color: #2d8cf0;
                        }
                    }

                    i {
                        &:hover {
                            color: rgb(36, 36, 36);
                        }
                    }
                }
            }
        }

        .tags-nav-close {
            border-radius: 2px;
            background: #ffffff;
            width: 30px;
            margin-right: 10px;
            text-align: center;
            line-height: 30px;
            cursor: pointer;

            > i {
                font-weight: 800;
            }
        }
        .btn-con {
            /deep/ .el-button {
                height: 30px;
                width: 30px;
                padding: 0;
                text-align: center;
                line-height: 30px;
                color: #808695;
                i {
                    font-weight: 800;
                }
            }
        }
    }
</style>