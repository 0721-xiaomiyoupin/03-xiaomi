import axios from "axios";
import { Message } from "element-ui"
/* 引入进度条 */
import NProgress from "nprogress";
import "nprogress/nprogress.css";

// //通过process.env.NODE.ENV来判断是production环境和development环境
// const prefix_url =
//   process.env.NODE_ENV === "development" ? "/" : "http://182.92.128.115/";
const instance = axios.create({
  // baseURL: `${prefix_url}api`,
  baseURL: "/api",
  headers: {},
})
instance.interceptors.request.use(
  (config) => {
    /* 开始进度条 */
    NProgress.start();
    return config
  }
)
instance.interceptors.response.use(
  (response) => {
    /* 进度条结束 */
    NProgress.done();
    if (response.data.code === 200) {
      return response.data.data
    }
    const { message } = response.data
    Message.error(message)
    return Promise.reject(message)

  },
  (error) => {
    /* 进度条结束 */
    NProgress.done();
    const message = error.message || "网络错误"
    Message.error(message)
    return Promise.reject(message)
  }
)
export default instance