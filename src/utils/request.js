import axios from 'axios';
import { Message } from 'element-ui';
// 引入进度条插件
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

const instance = axios.create({
	// 当前服务器地址
	baseURL: '/api'
});

// 设置请求拦截器
instance.interceptors.request.use((confing = {}) => {
	// 开始进度条
	NProgress.start();
	return confing;
});
// 设置响应拦截器
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
		Message.error('网络错误');
		return Promise.reject('网络错误', error);
	}
);

export default instance;
