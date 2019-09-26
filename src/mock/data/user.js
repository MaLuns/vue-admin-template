import Mock from 'mockjs'
import { doCustomTimes } from '@/libs/util'


Mock.mock(/\/GetZTList/, (res) => {
    let data = []
    doCustomTimes(20, () => {
        data.push(Mock.mock({
            "TypeID|100-1000": 100,
            "FullName": '@cname',
            "UserCode": "@first",
            "SonNum|0-1": 0
        }))
    })
    return Mock.mock({
        data,
        total: 21
    })
})