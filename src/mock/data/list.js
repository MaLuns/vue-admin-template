import Mock from 'mockjs'
import avatar from "@/assets/avatar.jpg";

const Random = Mock.Random;

Mock.mock(/\/list\/baselist/, () => {
    return Mock.mock({
        "resule": true,
        "data": Mock._creArr(5, 10, () => ({
            title: Random.csentence(5),
            description: Random.csentence(),
            'src|1': [
                'https://gw.alipayobjects.com/zos/rmsportal/zOsKZmFRdUtvpqCImOVY.png',
                'https://gw.alipayobjects.com/zos/rmsportal/dURIMkkrRFpPgTuzkwnB.png',
                'https://gw.alipayobjects.com/zos/rmsportal/sfjbOqnsXXJgNCjCzDBL.png'],
            user: Random.cname(),
            "number|30-100": 100,
            bagentime: Random.datetime(),
            'status|1': ['exception', '']
        }))
    })
})

Mock.mock(/\/list\/tablelist/, () => {
    return Mock.mock({
        "resule": true,
        "data": Mock._creArr(5, 10, () => ({
            name: Random.csentence(5),
            description: Random.csentence(),
            "count|30-100": 100,
            time: Random.datetime(),
            'state|1': ['close', 'runing']
        }))
    })
})


Mock.mock('/account/articledata', () => {
    return Mock.mock({
        "resule": true,
        "data": Mock._creArr(5, 10, () => ({
            title: Random.csentence(5),
            'tags': ["JavaScript", "CSS", "HTML"],
            time: Random.datetime(),
            user: {
                name: "白云苍狗",
                url: avatar
            },
            desc: Random.cparagraph(2),
            'star|1-100': 100,
            'like|1-100': 100,
            'message|1-100': 100
        }))
    })
})


Mock.mock('/account/projectdata', () => {
    return Mock.mock({
        "resule": true,
        "data": Mock._creArr(5, 10, () => ({
            'img|1': [
                "https://gw.alipayobjects.com/zos/rmsportal/uMfMFlvUuceEyPpotzlq.png",
                "https://gw.alipayobjects.com/zos/rmsportal/iZBVOIhGJiAnhplqjvZW.png",
                "https://gw.alipayobjects.com/zos/rmsportal/gLaIAoVWTtLbBWZNYEMg.png"],
            name: Random.csentence(5),
            desc: Random.cparagraph(2),
            time: `${Random.integer(1, 5)} 小时前`
        }))
    })
})

/*
const creArr = (min, max, obj) => {
    let arr = []
    for (let index = 0; index < Random.integer(min, max); index++) {
        arr.push(obj)
    }
    return arr;
} */
