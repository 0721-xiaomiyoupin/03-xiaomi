import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Detail from '../pages/Detail';

const router = new VueRouter({
	routes: [
		{
			name: 'Detail',
			path: '/detail',
			component: Detail
		}
	]
});

export default router;
