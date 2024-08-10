import { memo, useEffect } from 'react';
import { HomeWrapper } from './style';
import HomeBanner from './components/home-banner';
import HomeSectionV1 from './components/home-section-v1';
import HomeSectionV2 from './components/home-section-v2';
import HomeSectionV3 from './components/home-section-v3';
import HomeLongFor from './components/home-longfor';
import {
	changeGoodPriceInfo,
	changeHighScoreInfo,
	changeDiscountInfo,
	changeRecommedInfo,
	changeLongForInfo,
	changePlusInfo,
} from '@/store/modules/home';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

const Home = memo(() => {
	const {
		goodPriceInfo,
		highScoreInfo,
		discountInfo,
		recommedInfo,
		longForInfo,
		plusInfo,
	} = useSelector((state) => state.home, shallowEqual);

	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(changeGoodPriceInfo());
		dispatch(changeHighScoreInfo());
		dispatch(changeDiscountInfo());
		dispatch(changeRecommedInfo());
		dispatch(changeLongForInfo());
		dispatch(changePlusInfo());
	}, [dispatch]);

	return (
		<HomeWrapper>
			<HomeBanner />
			<div className="content">
				<HomeSectionV2 infoData={discountInfo} />
				<HomeSectionV2 infoData={recommedInfo} />
				<HomeLongFor infoData={longForInfo} />
				<HomeSectionV1 infoData={goodPriceInfo} />
				<HomeSectionV1 infoData={highScoreInfo} />
				<HomeSectionV3 infoData={plusInfo} />
			</div>
		</HomeWrapper>
	);
});

export default Home;
