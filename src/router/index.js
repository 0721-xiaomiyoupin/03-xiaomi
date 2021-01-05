import Vue from "vue";
import VueRouter from "vue-router";
import Order from "../pages/Order";
import Pay from "../pages/Pay";
import Search from "../pages/Search";

const push = VueRouter.prototype.push;
const replace = VueRouter.prototype.replace;

VueRouter.prototype.push = function(location, onComplete, onAbort) {
  // 如果用户想处理失败，就处理
  if (onComplete && onAbort) {
    return push.call(this, location, onComplete, onAbort);
  }
  // 如果用户不处理失败，给默认值：空函数
  return push.call(this, location, onComplete, () => {});
};

VueRouter.prototype.replace = function(location, onComplete, onAbort) {
  // 如果用户想处理失败，就处理
  if (onComplete && onAbort) {
    return replace.call(this, location, onComplete, onAbort);
  }
  // 如果用户不处理失败，给默认值：空函数
  return replace.call(this, location, onComplete, () => {});
};
Vue.use(VueRouter);
export default new VueRouter({
  routes: [
    {
      path: "/",
      component: Search,
    },
    {
      path: "/order",
      component: Order,
    },
    {
      path: "/pay",
      component: Pay,
    },
    {
      path: "/search",
      component: Search,
    },
  ],
});
