// @ts-nocheck
import Vue from "vue";
import VueRouter from "vue-router";
import Detail from "../pages/Detail";
import ShopCart from "../pages/ShopCart";
import Home from "../components/Home";
import Login from "../components/Login";
import AddressList from "../pages/AddressList"
// // @ts-ignore
// const Detail = () => import(/* webpackChunkName: "Detail" */ '../pages/Detail')
// // @ts-ignore
// const ShopCart = () => import(/* webpackChunkName: "shopCart" */ '../pages/ShopCart')
Vue.use(VueRouter)
/* 重写push和replace方法,是为了让编程式导航重复点击时不报错 */
const push = VueRouter.prototype.push;
const replace = VueRouter.prototype.replace;
VueRouter.prototype.push = function (location, onComplete, onAbrot) {
  //若用户想处理失败,就处理
  if (onComplete && onAbrot) {
    return push.call(this, location, onComplete, onAbrot)
  }
  /* 若用户不处理失败就给空函数 */
  return push.call(this, location, onComplete, () => { })
}
VueRouter.prototype.replace = function (location, onComplete, onAbrot) {
  if (onComplete && onAbrot) {
    return replace.call(this, location, onComplete, onAbrot)
  }
  return replace.call(this, location, onComplete, onAbrot, () => { })
}

const router = new VueRouter({
  routes: [
    {
      path: "/",
      component: Home
    },
    {
      path: "/detail",
      component: Detail
    },
    {
      path: "/shopcart",
      component: ShopCart
    },
    {
      path: "/login",
      component: Login
    },
    {
      path: "/addressList",
      component: AddressList
    },
  ]
})
export default router