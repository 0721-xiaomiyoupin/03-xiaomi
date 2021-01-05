import axios from "axios";
import { Message } from "element-ui"
/* 引入进度条 */
import NProgress from "nprogress";
import "nprogress/nprogress.css";

const instance = axios.create({
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
    // 进度条结束
    NProgress.done();
    if (response.data.code === 200) {
      return response.data.data;
    }
  },
  (error) => {
    // 进度条结束
    NProgress.done();
    // 提示错误
    Message.error("网络错误");
    // @ts-ignore
    return Promise.reject("网络错误", error);
  }
);

export default instance;
