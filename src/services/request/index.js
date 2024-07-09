import axios from 'axios';
import { BASE_URL, TIMEOUT } from '@/constants';

class Request {
	constructor(baseUrl, timeout) {
		this.instance = axios.create({
			baseURL: baseUrl,
			timeout: timeout,
		});

		this.instance.interceptors.response.use(
			(res) => {
				return res.data;
			},
			(err) => {
				return Promise.reject(err);
			},
		);
	}

	request(config) {
		return this.instance.request(config);
	}
}

export default new Request(BASE_URL, TIMEOUT);
