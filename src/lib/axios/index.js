/**
 * @description axios配置管理
 */

import axios from "axios"

// const baseUrl = 'http://yuhuan-api.t1.hibao.work/api/mom';
// const baseUrl = 'http://suliweichai.t1.hibao.work';
const baseUrl = "http://10.18.5.70:3000";

let instance = axios.create({
    baseURL: baseUrl,
    timeout: 15000,
    headers: {
        get: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
        },
        post: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    }
})

instance.interceptors.request.use(config => {
    return config
})

instance.interceptors.response.use(data => {
    return data.data

})

export default instance