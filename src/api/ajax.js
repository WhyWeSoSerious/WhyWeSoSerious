import axios from 'axios'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
//todo创建一个发送axios的函数对象
const service = axios.create({
    baseURL: '/api',
    timeout :20000
})


//todo   请求拦截器
service.interceptors.request.use((config) => {
    NProgress.start()
    return config
})
//todo   响应拦截器
service.interceptors.response.use(response => {
    NProgress.done();
    return response.data
},
    //?失败的回调
    error => {
        NProgress.done();
        alert(error.message || '未知的错误');
        return Promise.reject(error)
    }
)
//todo   暴露这个
export default service