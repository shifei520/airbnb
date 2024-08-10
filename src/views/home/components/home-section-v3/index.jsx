import { memo } from 'react';
import PropTypes from 'prop-types';
import { SectionV3Wrapper } from './style';
import SectionHeader from '@/components/section-header';
import RoomItem from '@/components/room-item';
import ScrollView from '@/components/scroll-view';
import SectionFooter from '@/components/section-footer';

const HomeLongFor = memo((props) => {
	const { infoData } = props;

	return (
		<SectionV3Wrapper>
			<SectionHeader title={infoData.title} subtitle={infoData.subtitle} />
			<div className="room-list">
				<ScrollView>
					{infoData?.list?.map((item) => {
						return <RoomItem key={item.id} itemData={item} itemWidth="20%" />;
					})}
				</ScrollView>
			</div>
			<SectionFooter name="plus" />
		</SectionV3Wrapper>
	);
});

HomeLongFor.propTypes = {
	infoData: PropTypes.object,
};

export default HomeLongFor;
