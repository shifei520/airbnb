import { memo, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { Rating } from '@mui/material';
import { Carousel } from 'antd';
import { RoomItemWrapper } from './style';
import IconArrowLeft from '@/assets/svg/icon-arrow-left';
import IconArrowRight from '@/assets/svg/icon-arrow-right';
import Indicator from '@/components/indicator';
import classNames from 'classnames';

const RoomItem = memo((props) => {
	const { itemData, itemWidth, itemClick } = props;
	const [selectIndex, setSelectIndex] = useState(0);

	const sliderRef = useRef();
	const controlClickHandle = (isRight = true) => {
		// 上一个面板/下一个面板
		isRight ? sliderRef.current.next() : sliderRef.current.prev();

		let newIndex = isRight ? selectIndex + 1 : selectIndex - 1;
		if (newIndex < 0) {
			newIndex = itemData.picture_urls.length - 1;
		}
		if (newIndex > itemData.picture_urls.length - 1) {
			newIndex = 0;
		}
		setSelectIndex(newIndex);
	};

	const itemClickHandle = () => {
		itemClick?.();
	};

	const pictureElement = (
		<div className="cover">
			<img src={itemData.picture_url} alt="" />
		</div>
	);

	const sliderElement = (
		<div className="slider">
			<div className="control">
				<div className="btn left" onClick={(e) => controlClickHandle(false)}>
					<IconArrowLeft width="30" height="30" />
				</div>
				<div className="btn right" onClick={(e) => controlClickHandle(true)}>
					<IconArrowRight width="30" height="30" />
				</div>
			</div>
			<div className="indicator">
				<Indicator selectIndex={selectIndex}>
					{itemData?.picture_urls?.map((item, index) => {
						return (
							<div className="item" key={item}>
								<span
									className={classNames('dot', {
										active: selectIndex === index,
									})}
								/>
							</div>
						);
					})}
				</Indicator>
			</div>
			<Carousel dots={false} ref={sliderRef}>
				{itemData?.picture_urls?.map((item) => {
					return (
						<div className="cover" key={item}>
							<img src={item} alt="" />
						</div>
					);
				})}
			</Carousel>
		</div>
	);

	return (
		<RoomItemWrapper
			verifyColor={itemData.verify_info?.text_color || '#39576a'}
			itemWidth={itemWidth}
			onClick={itemClickHandle}
		>
			<div className="inner">
				{!itemData.picture_urls ? pictureElement : sliderElement}
				<div className="desc">{itemData.verify_info.messages.join(' · ')}</div>
				<div className="name">{itemData.name}</div>
				<div className="price">¥{itemData.price}/晚</div>
				<div className="bottom">
					<Rating
						value={itemData.star_rating ?? 5}
						precision={0.1}
						readOnly
						sx={{ fontSize: '12px', color: '#00848A', marginRight: '-1px' }}
					/>
					<span className="count">{itemData.reviews_count}</span>
					{itemData.bottom_info && (
						<span className="extra">·{itemData.bottom_info?.content}</span>
					)}
				</div>
			</div>
		</RoomItemWrapper>
	);
});

RoomItem.propTypes = {
	itemData: PropTypes.object,
	itemClick: PropTypes.func,
	itemWidth: PropTypes.string,
};

export default RoomItem;
