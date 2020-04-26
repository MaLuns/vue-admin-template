<script>
    import { mapGetters } from "vuex";
    import { strToI18n } from "@/libs/util";

    export default {
        name: "SidebarItem",
        props: {
            route: {
                type: Object,
                required: true
            },
            isNest: {
                type: Boolean,
                default: false
            },
            basePath: {
                type: String,
                default: ""
            }
        },
        render(h) {
            return this.renderItem(h, this.route);
        },
        computed: {
            ...mapGetters(["navTheme", "user"]),
            authority() {
                return this.user.authority;
            }
        },
        methods: {
            renderItem(h, route, basePath = "") {
                let {
                    children = [],
                    path,
                    meta: {
                        title,
                        icon = "",
                        hideInMenu = false,
                        auth = undefined
                    } = {
                        title: path,
                        icon: "",
                        hideInMenu: false,
                        auth: undefined
                    }
                } = route;
                title = strToI18n(title, this);
                let urlPath =
                    (basePath == "/" ? "" : basePath) +
                    (path.indexOf("/") === 0 ? path : "/" + path);

                if (!hideInMenu) {
                    let iconEl =
                        icon !== "" ? h("i", { attrs: { class: icon } }) : null;

                    if (children.length > 0) {
                        let theme = this.navTheme === "light" ? "light" : "dark";
                        let childrens = children
                            .map(element => this.renderItem(h, element, urlPath))
                            .filter(res => res !== undefined);

                        if (childrens.length > 0)
                            return h(
                                "el-submenu",
                                {
                                    props: {
                                        index: urlPath,
                                        "popper-class": `sidebar-menu-vertical ${theme}`
                                    }
                                },
                                [
                                    h(
                                        "div",
                                        {
                                            slot: "title",
                                            class: "sidebar-menu-text"
                                        },
                                        [iconEl, h("span", title)]
                                    ),
                                    ...childrens
                                ]
                            );
                    } else {
                        if (auth === undefined || this.authority[auth]) {
                            return h(
                                "el-menu-item",
                                { props: { index: urlPath, route } },
                                [iconEl, h("span", { slot: "title" }, title)]
                            );
                        }
                    }
                }
            }
        }
    };
</script>
