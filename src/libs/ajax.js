import axios from 'axios';
import store from '@/store'
const baseUrl = process.env.NODE_ENV === 'production' ? "" : "";

const addErrorLog = errorInfo => {
    const { statusText, status, request: { responseURL } } = errorInfo
    let info = {
        type: 'ajax',
        code: status,
        mes: statusText,
        url: responseURL
    }
    store.dispatch("app/AddError", info)
}


const interceptors = (instance) => {
    instance.interceptors.request.use(config => {
        return config
    }, error => {
        return Promise.reject(error)
    })


    instance.interceptors.response.use(res => {
        const { data, status } = res
        return { data, status }
    }, error => {
        addErrorLog(error.response)
        return Promise.reject(error)
    })
}

const getAxiosConfig = () => {
    return {
        baseUrl,
        headers: {

        }
    }
}

const ajax = (options) => {
    const instance = axios.create()
    options = Object.assign(getAxiosConfig(), options);
    interceptors(instance);
    return instance(options)
}

export default ajax