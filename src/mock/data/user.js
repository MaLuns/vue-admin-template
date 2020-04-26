import Mock from 'mockjs'

Mock.mock('/login', () => {
    return Mock.mock({
        "resule": true,
        "data": {
            token: Mock.Random.word(10),
        }
    })
})
Mock.mock('/getUserInfo', () => {
    return Mock.mock({
        "resule": true,
        "data": {
            name: '白云苍狗',
            authority: {
                error: true,
                console: true,
                loglist: true,
                i18n: true
            }
        }
    })
})
/* authority: {
    tool: {
        log: {
            error: true,
            console: true,
            loglist: true,
        },
        i18n: true
    }
} */