import axios from '@/libs/api.request'

export const getZTList = () => {
    return axios.request({
        url: "getZTList",
        method: "post"
    })
}
