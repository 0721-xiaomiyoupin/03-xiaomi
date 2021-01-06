import Vue from "vue";
import App from "./App.vue";
import "./styles/reset.css";
import router from "./router";
import store from "./store";
import "./plugins/element.js";
import "./assets/font_2307193_a4pnwkbt8in/iconfont.css";

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  router,
  store,
}).$mount("#app");
