// 管理API模块
import requests from "./requests";

//引入mock API
import mockRequests from "./mockRequests";

export const reqGetList = () => mockRequests.get("/list");
export const reqGetTextList = () => mockRequests.get("/textList")