import ajax from "@/libs/ajax"

export const login = (user, pws) => {
    return ajax({
        url: '/login',
        data: {
            user, pws
        }
    })
}

export const getUserInfo = () => {
    return ajax({
        url: '/getUserInfo'
    })
}