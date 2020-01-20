import axios, { AxiosRequestConfig } from 'axios';
import { message } from 'antd';

// 以application/json进行提交
const axiosJson = axios.create({
	baseURL: process.env.BASE_API,
	timeout: 30000,
	headers: { 'Content-Type': 'application/json;charset=UTF-8' }
});

// 取消重复请求
let pending: Array<{
	url: string;
	cancel: Function;
}> = [];
const CancelToken = axios.CancelToken;
const removePending = (config: AxiosRequestConfig) => {
	for (let [index, item] of pending.entries()) {
		// 当前请求在数组中存在时执行函数体
		if (item.url === config.url + '&request_type=' + config.method) {
			// 执行取消操作
			item.cancel();
			// 从数组中移除记录
			pending.splice(index, 1);
			break;
		}
	}
};

// request interceptor
axiosJson.interceptors.request.use(
	(config) => {
		// Do something before request is sent
		// if (store.getters.token) {
		//   config.headers['X-Token'] = getToken() // 让每个请求携带token-- ['X-Token']为自定义key 请根据实际情况自行修改
		// }
		removePending(config);
		config.cancelToken = new CancelToken((c) => {
			pending.push({ url: config.url + '&request_type=' + config.method, cancel: c });
		});
		return config;
	},
	(error) => {
		// Do something with request error
		return Promise.reject(error);
	}
);

axiosJson.interceptors.response.use(
	(res) => {
		removePending(res.config);
		return res;
	},
	(error) => {
		message.error('网络异常，请稍后重试');
		return Promise.reject(error);
	}
);

export default axiosJson;
