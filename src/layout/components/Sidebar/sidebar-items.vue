<script>
    import { mapGetters } from "vuex";
    export default {
        data() {
            return {};
        },
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
            ...mapGetters(["navTheme"])
        },
        methods: {
            renderItem(h, route, basePath = "") {
                let {
                    children = [],
                    path,
                    meta: { title, icon = "", hideInMenu = false } = {
                        title: path,
                        icon: "",
                        hideInMenu: false
                    }
                } = route;

                let urlPath =
                    (basePath == "/" ? "" : basePath) +
                    (path.indexOf("/") === 0 ? path : "/" + path);

                if (!hideInMenu) {
                    if (children.length > 0) {
                        return h(
                            "el-submenu",
                            {
                                props: {
                                    index: urlPath,
                                    /* "popper-append-to-body": true, */
                                    "popper-class": `sidebar-menu-vertical ${this.navTheme==='light'?'light':'dark'}`
                                }
                            },
                            [
                                h(
                                    "div",
                                    { slot: "title", class: "sidebar-menu-text" },
                                    [
                                        icon !== ""
                                            ? h("i", { attrs: { class: icon } })
                                            : null,
                                        h("span", title)
                                    ]
                                ),
                                ...children.map(element =>
                                    this.renderItem(h, element, urlPath)
                                )
                            ]
                        );
                    } else {
                        return h(
                            "el-menu-item",
                            {
                                props: {
                                    index: urlPath
                                }
                            },
                            [
                                icon !== ""
                                    ? h("i", { attrs: { class: icon } })
                                    : null,
                                h("span", { slot: "title" }, title)
                            ]
                        );
                    }
                }
            }
        }
    };
</script>
