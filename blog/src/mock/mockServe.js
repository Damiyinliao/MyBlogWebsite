// 引入mockjs模块
import Mock from "mockjs";
//把JSON数据引进来
import list from './list.json';
import textList from './textList.json'

// mock数据
Mock.mock("mock/list", { code: 200, data: list });
Mock.mock("mock/textList", { code: 200, data: textList });