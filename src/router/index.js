import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);
import Home from "../pages/Home";
const router = new Router({
  routes: [
    {
      name: "Home",
      path: "/home",
      component: Home,
    },
  ],
});
export default router;
