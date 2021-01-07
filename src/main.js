// @ts-nocheck
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./plugins/element.js";
import "./plugins/directives";
import "./style/Common.css";
import "./assets/font/iconfont.css";
import 'element-ui/lib/theme-chalk/index.css';
import 'swiper/swiper-bundle.min.css';
import "./plugins/lazyload.js";

Vue.config.productionTip = false;


new Vue({
  render: (h) => h(App),
  router,
  store,
}).$mount("#app");
