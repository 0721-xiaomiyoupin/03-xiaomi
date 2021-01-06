import Vue from "vue";
import App from "./App.vue";
import "./styles/reset.css"
import "./plugins/element.js"
import router from "./router/index"
import "./plugins/directives"

import "./assets/font/iconfont.css"

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  router
}).$mount("#app");
