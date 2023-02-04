// 使用mock请求模块
import axios from "axios";
import nProgress from "nprogress";

//需要引入进度条样式才会显示出进度条
import "nprogress/nprogress.css";

//以下代码同requests一样
const mockRequests = axios.create({
    //基础路径
    baseURL: "/mock",
    //请求不能超过5S
    timeout: 5000,
  });
  
  //请求拦截器----在项目中发请求（请求没有发出去）可以做一些事情
  mockRequests.interceptors.request.use((config) => {
    //现在的问题是config是什么?配置对象
    //可以让进度条开始动
    nProgress.start();
    return config;
  });
  
  //响应拦截器----当服务器手动请求之后，做出响应（相应成功）会执行的
  mockRequests.interceptors.response.use(
    (res) => {
      //进度条结束
      nProgress.done();
      //相应成功做的事情
      return res.data;
    },
    (err) => {
      alert("服务器响应数据失败");
    }
  );
  //最终需要对外暴露（不对外暴露外面模块没办法使用）
  //这里的代码是暴露一个axios实例
  export default mockRequests;