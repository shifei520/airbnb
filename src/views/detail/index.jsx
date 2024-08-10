import { memo } from 'react';
import { useSelector } from 'react-redux';

const Detail = memo(() => {
	const { detailInfo } = useSelector((state) => state.detail);

	return <div className="detail">Detail</div>;
});

export default Detail;
