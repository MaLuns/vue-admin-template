import axios from 'axios';
import store from '@/store'

const baseURL = process.env.NODE_ENV === 'production' ? "" : "";

const addErrorLog = errorInfo => {
    store.commit("app/AddError", {
        message: '数据请求错误',
        type: "error",
        meta: {
            error: errorInfo,
            path: errorInfo.request.responseURL
        }
    })
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
        addErrorLog(error)
        return Promise.reject(error)
    })
}

const getAxiosConfig = () => {
    return {
        baseURL,
        headers: {

        }
    }
}

const ajax = (options) => {
    const instance = axios.create()
    let { method = undefined, data = undefined } = options;

    if (data !== undefined && method === undefined) {
        options.method = "post";
    }
    options = Object.assign(getAxiosConfig(), options);

    interceptors(instance);
    return instance(options)
}

export default ajax