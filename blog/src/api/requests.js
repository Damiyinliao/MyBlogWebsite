// 对axios进行二次封装
// 引入axios
import axios from "axios";
// 引入进度条插件nprogress
import nProgress from "nprogress";
// 引入进度条样式
import "nProgress/nprogress.css";

// 利用axios对象的方法create，去创建一个axios实例 
const requests = axios.create({
    // 配置对象
    // 基础路径，发请求的时候，路径当中会出现/api
    baseURL: "/api",
    //代表请求超时的时间为5000毫秒
    timeout: 5000
});

// 请求拦截器：在发起请求之前，请求拦截器可以检测到，可以在请发出去之前做一些事情
requests.interceptors.request.use((config)=>{
    //请求开始，进度条开始动
    nProgress.start();
    
    return config;
});

//响应拦截器
requests.interceptors.response.use((res)=>{
    // 进度条结束
    nProgress.done();
    //成功的回调函数，服务器响应数据回来以后，响应拦截器可以检测到，可以做一些事情
    return res.data;
}, (error)=>{
    //响应失败的回调函数
    return Promise.reject(new Error('failed'));
});

//对外暴露
export default requests;
