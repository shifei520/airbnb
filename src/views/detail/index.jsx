import { memo } from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import { DetailWrapper } from './style';
import DetailPictures from './components/detail-pictures';
import DetailInfo from './components/detail-info';

const Detail = memo(() => {
	const { detailInfo } = useSelector((state) => state.detail, shallowEqual);

	return (
		<DetailWrapper className="detail">
			<DetailPictures />
			<DetailInfo />
		</DetailWrapper>
	);
});

export default Detail;
