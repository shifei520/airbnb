import instance from '@/services/request/index';

export const getEntireRoomList = (offset = 0, size = 20) => {
	return instance.request({
		url: '/entire/list',
		method: 'get',
		params: {
			offset,
			size,
		},
	});
};
