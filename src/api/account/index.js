import ajax from "@/libs/ajax"

export const GetDrticleData = () => {
    return ajax({
        url: '/account/articledata'
    })
}

export const GetProjectData = () => {
    return ajax({
        url: '/account/projectdata'
    })
}
