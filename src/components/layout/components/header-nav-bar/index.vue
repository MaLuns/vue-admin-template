<template>
    <div :class="navbarClass" ref="navbar">
        <div @click="toggleSideBar" class="navbar-btn">
            <svg :class="{'is-active':!sidebarOpen}" class="hamburger" viewBox="64 64 896 896" focusable="false" data-icon="menu-fold" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                <path d="M408 442h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm-8 204c0 4.4 3.6 8 8 8h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56zm504-486H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 632H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM115.4 518.9L271.7 642c5.8 4.6 14.4.5 14.4-6.9V388.9c0-7.4-8.5-11.5-14.4-6.9L115.4 505.1a8.74 8.74 0 000 13.8z" />
            </svg>
        </div>
        <HeaderRight />
    </div>
</template>

<script>
    import { mapGetters } from "vuex";
    import HeaderRight from "./header-right";
    export default {
        name: "HeaderNavBar",
        data() {
            return {};
        },
        components: {
            HeaderRight
        },
        computed: {
            ...mapGetters(["sidebarOpen", "fixedHeader"]),
            navbarClass() {
                return {
                    navbar: true,
                    fixed: this.fixedHeader
                };
            }
        },
        methods: {
            toggleSideBar() {
                this.$store.commit("app/SetGlobalConfig", {
                    key: "sidebarOpen",
                    val: !this.sidebarOpen
                });
            }
        }
    };
</script>

<style lang="less" scoped>
    .navbar {
        height: 64px;
        overflow: hidden;
        display: flex;
        background: #fff;
        box-shadow: 2px 0 8px 0 rgba(53, 54, 56, 0.18);

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
    }
</style>