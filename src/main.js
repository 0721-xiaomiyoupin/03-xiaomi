import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
Vue.config.productionTip = false;

import "./plugins/directives.js";
import "./style/Common.css";
import "./plugins/element.js";
import "./assets/font/iconfont.css";
import "./plugins/lazyload.js";

new Vue({
  render: (h) => h(App),
  router,
  store,
}).$mount("#app");
