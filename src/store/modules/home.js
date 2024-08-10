import { createSlice } from '@reduxjs/toolkit';
import {
	getHomeGoodPriceData,
	getHomeHighScoreData,
	getHomeDiscountData,
	getHomeHotRecommendData,
	getHomeLongForData,
	getHomePlusData,
} from '@/services';

const homeSlice = createSlice({
	name: 'home',
	initialState: {
		goodPriceInfo: {},
		highScoreInfo: {},
		discountInfo: {},
		recommedInfo: {},
		longForInfo: {},
		plusInfo: {},
	},
	reducers: {
		changeGoodPriceInfoAction(state, { payload }) {
			state.goodPriceInfo = payload;
		},
		changeHighScoreInfoAction(state, { payload }) {
			state.highScoreInfo = payload;
		},
		changeDiscountInfoAction(state, { payload }) {
			state.discountInfo = payload;
		},
		changeRecommedInfoAction(state, { payload }) {
			state.recommedInfo = payload;
		},
		changeLongForInfoAction(state, { payload }) {
			state.longForInfo = payload;
		},
		changePlusInfoAction(state, { payload }) {
			state.plusInfo = payload;
		},
	},
});

const {
	changeGoodPriceInfoAction,
	changeHighScoreInfoAction,
	changeDiscountInfoAction,
	changeRecommedInfoAction,
	changeLongForInfoAction,
	changePlusInfoAction,
} = homeSlice.actions;

export const changeGoodPriceInfo = () => {
	return async (dispatch) => {
		const data = await getHomeGoodPriceData();
		dispatch(changeGoodPriceInfoAction(data));
	};
};

export const changeHighScoreInfo = () => {
	return async (dispatch) => {
		const data = await getHomeHighScoreData();
		dispatch(changeHighScoreInfoAction(data));
	};
};

export const changeDiscountInfo = () => {
	return async (dispatch) => {
		const data = await getHomeDiscountData();
		dispatch(changeDiscountInfoAction(data));
	};
};

export const changeRecommedInfo = () => {
	return async (dispatch) => {
		const data = await getHomeHotRecommendData();
		dispatch(changeRecommedInfoAction(data));
	};
};

export const changeLongForInfo = () => {
	return async (dispatch) => {
		const data = await getHomeLongForData();
		dispatch(changeLongForInfoAction(data));
	};
};

export const changePlusInfo = () => {
	return async (dispatch) => {
		const data = await getHomePlusData();
		dispatch(changePlusInfoAction(data));
	};
};

export default homeSlice.reducer;
