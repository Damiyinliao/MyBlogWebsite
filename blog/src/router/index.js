// 引入vue-router路由插件并使用
import VueRouter from "vue-router";
import Vue from "vue";
Vue.use(VueRouter);

// 重写VueRouter.prototype原型对象上的push|replace方法
// 先把VueRouter.prototype身上的push|replace方法进行保存一份

let originPush = VueRouter.prototype.push;
let originReplace = VueRouter.prototype.replace;
// 重写push方法
VueRouter.prototype.push = function (location, resolve, reject) {
    if (resolve && reject) {
        originPush.call(this, location, resolve, reject);
    } else {
        originPush.call(
            this,
            location,
            () => { },
            () => { }
        );
    }
};
// 重写replace方法
VueRouter.prototype.replace = function (location, resolve, reject) {
    if (resolve && reject) {
        originReplace.call(this, location, resolve, reject);
    } else {
        originReplace.call(
            this,
            location,
            () => { },
            () => { }
        );
    }
};

const routes = [
    {
        path: '/',
        component: () => import('@/views/home')
    }
];

const router = new VueRouter({
    mode: 'history',
    routes,
})

export default router;