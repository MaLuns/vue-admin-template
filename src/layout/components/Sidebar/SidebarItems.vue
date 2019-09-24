<script>
    import { isExternal } from "@/libs/validate";
    import path from "path";

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

                console.log(urlPath);

                if (!hidden) {
                    if (children.length > 0) {
                        return h(
                            "el-submenu",
                            {
                                props: {
                                    index: urlPath
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
                    } /* else if (children.length == 1) {
                        return h("el-menu-item",);
                    } */ else {
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
            },
            resolvePath(routePath, basePath = "") {
                if (isExternal(routePath)) {
                    return routePath;
                }
                if (isExternal(basePath)) {
                    return basePath;
                }
                return path.resolve(basePath, routePath);
            }
        }
    };
</script>
