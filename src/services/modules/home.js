import instance from '@/services/request/index';

/** 获取优质房源信息 */
export const getHomeGoodPriceData = () => {
	return instance.request({
		url: '/home/goodprice',
		method: 'get',
	});
};

/** 获取高评分数据 */
export const getHomeHighScoreData = () => {
	return instance.request({
		url: '/home/highscore',
		method: 'get',
	});
};

export const getHomeDiscountData = () => {
	return instance.request({
		url: '/home/discount',
		method: 'get',
	});
};

export const getHomeHotRecommendData = () => {
	return instance.request({
		url: '/home/hotrecommenddest',
		method: 'get',
	});
};

export const getHomeLongForData = () => {
	return instance.request({
		url: '/home/longfor',
		method: 'get',
	});
};

export const getHomePlusData = () => {
	return instance.request({
		url: '/home/plus',
		method: 'get',
	});
};
