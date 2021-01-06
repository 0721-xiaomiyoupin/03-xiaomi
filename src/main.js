import Vue from 'vue';
import App from './App.vue';

Vue.config.productionTip = false;
import router from './router';
import store from './store';
import './plugins/element.js';
import 'element-ui/lib/theme-chalk/index.css';
import 'swiper/swiper-bundle.min.css';
new Vue({
	render: (h) => h(App),
	router,
	store
}).$mount('#app');
