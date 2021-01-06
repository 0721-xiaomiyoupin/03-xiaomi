import Vue from "vue"
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Login = () => import('../pages/Login')
const Home = () => import("../pages/Home")
const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      component: Home
    },
    {
      path: "/Login",
      component: Login
    }
  ]
})

export default router