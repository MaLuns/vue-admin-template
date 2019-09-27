<script>
    export default {
        data() {
            return {};
        },
        name: "SidebarItem",
        props: {
            item: {
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
            return this.renderItem(h, this.item);
        },
        methods: {
            renderItem(h, item, basePath = "") {
                let {
                    children = [],
                    path,
                    hidden = false,
                    meta: { title, icon = "" } = { title: path }
                } = item;

                let urlPath =
                    (basePath == "/" ? "" : basePath) +
                    (path.indexOf("/") === 0 ? path : "/" + path);
                if (!hidden) {
                    if (children.length > 0) {
                        return h(
                            "el-submenu",
                            {
                                props: {
                                    index: urlPath,
                                    /* "popper-append-to-body": true, */
                                    "popper-class": "wlt-menu-vertical"
                                }
                            },
                            [
                                h("div", { slot: "title" }, [
                                    icon !== ""
                                        ? h("i", {
                                              attrs: {
                                                  class: icon
                                              }
                                          })
                                        : null,
                                    h("span", title)
                                ]),
                                ...children.map(element => {
                                    return this.renderItem(h, element, urlPath);
                                })
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
                                    ? h("i", {
                                          attrs: {
                                              class: icon
                                          }
                                      })
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
