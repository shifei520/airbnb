import { memo, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { DetailWrapper } from './style';
import DetailPictures from './components/detail-pictures';
import DetailInfo from './components/detail-info';
import { changeHeaderConfigAction } from '@/store/modules/main';

const Detail = memo(() => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(changeHeaderConfigAction({ isFixed: false, topAlpha: false }));
	}, [dispatch]);

	return (
		<DetailWrapper className="detail">
			<DetailPictures />
			<DetailInfo />
		</DetailWrapper>
	);
});

export default Detail;
