import ajax from "@/libs/ajax"

export const login = (user, pws) => {
    return ajax({
        url: '/login',
        data: {
            user, pws
        }
    })
}