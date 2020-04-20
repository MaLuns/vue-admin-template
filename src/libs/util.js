/**
 * @param {*} list 现有标签导航列表
 * @param {*} newRoute 新添加的路由原信息对象
 * @description 如果该newRoute已经存在则不再添加
 */
export const getNewTagList = (list, newRoute) => {
    const { name, path, meta } = newRoute
    let newList = [...list]
    if (newList.findIndex(item => item.name === name) >= 0) return newList
    else newList.push({ name, path, meta })
    return newList
}

/**
 * 判断路由信息是否相等
 * @param {*} routeA 路由A
 * @param {*} routeB 路由B
 */
export const routeEqual = ({
    path: path1,
    name: name1,
    params: params1,
    query: query1
}, {
    path: path2,
    name: name2,
    params: params2,
    query: query2
}) => {
    return (path1 === path2) && (name1 === name2) && looseEqual(params1, params2) && looseEqual(query1, query2)
}

/**
 * 判断打开的页面里是否已存在这个新添加的路由对象
 * @param {*} routeList 打开页面的路由集合
 * @param {*} route 路由对象
 */
export const routeHasExist = (routeList, route) => {
    let res = false;
    routeList.forEach(item => {
        if (routeEqual(item, route)) res = true;
    });
    return res;
}

/**
 * 比较两个对象是否相等
 * @param {*} a  对象a
 * @param {*} b  对象b
 */
export const looseEqual = (a, b) => {
    if (a === b) return true
    const isObjectA = isObject(a)
    const isObjectB = isObject(b)
    if (isObjectA && isObjectB) {
        try {
            const isArrayA = Array.isArray(a)
            const isArrayB = Array.isArray(b)
            if (isArrayA && isArrayB) {
                return a.length === b.length && a.every((e, i) => {
                    return looseEqual(e, b[i])
                })
            } else if (a instanceof Date && b instanceof Date) {
                return a.getTime() === b.getTime()
            } else if (!isArrayA && !isArrayB) {
                const keysA = Object.keys(a)
                const keysB = Object.keys(b)
                return keysA.length === keysB.length && keysA.every(key => {
                    return looseEqual(a[key], b[key])
                })
            } else {
                return false
            }
        } catch (e) {
            return false
        }
    } else if (!isObjectA && !isObjectB) {
        return String(a) === String(b)
    } else {
        return false
    }
}

/**
 * 判断是否是 object
 * @param {*} obj 
 */
export const isObject = (obj) => {
    return obj !== null && typeof obj === 'object'
}

/**
 * 获取时间 yyyy-MM-dd hh:mm:ss
 */
export const getTime = () => {
    let date = new Date();
    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
}


/**
 * 打印log
 * @param {*} e 
 */
export const logprint = function (e) {
    window.console.group("完整日志"),
        window.console.log("message ", e.message),
        window.console.log("time: ", e.time),
        window.console.log("type: ", e.type),
        window.console.log("meta: ", e.meta),
        window.console.groupEnd()
}