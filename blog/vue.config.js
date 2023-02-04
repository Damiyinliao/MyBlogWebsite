const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  //关闭ESLINT校验工具
  lintOnSave: false,
  //配置代理区域
  devServer: {
    proxy: {
      "/api": {
        target: "http://127.0.0.1:3030",
        //pathRewrite: {'^/api':''},  //路劲改写
      }
    }
  }
})
