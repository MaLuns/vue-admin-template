import Mock from 'mockjs'

Mock.mock('/login', () => {
    return Mock.mock({
        "resule": true,
        "data": {
            token: Mock.Random.word(5),
            authority: {
                tool: {
                    log: {
                        error: true,
                        console: true,
                        loglist: true,
                    },
                    i18n: true
                }
            }
        }
    })
})