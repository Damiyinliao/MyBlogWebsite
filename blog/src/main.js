import Vue from 'vue'
import App from './App.vue'
// 引入路由相关文件
import router from './router'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  //需要把router进行注册
  //可以让全部的组件（非路由|路由组件）都可以获取到$route|$router属性
  //$route(路由)：可以获取到路由信息（path、query、params）
  //$router:进行编程式导航路由跳转push||replace
  router,
}).$mount('#app')
