import { memo } from 'react';
import PropTypes from 'prop-types';
import { LongForWrapper } from './style';
import SectionHeader from '@/components/section-header';
import LongForItem from '@/components/longfor-item';
import ScrollView from '@/components/scroll-view';

const HomeLongFor = memo((props) => {
	const { infoData } = props;

	return (
		<LongForWrapper>
			<SectionHeader title={infoData.title} subtitle={infoData.subtitle} />
			<div className="longfor-content">
				<ScrollView>
					{infoData?.list?.map((item) => {
						return <LongForItem key={item.city} itemData={item} />;
					})}
				</ScrollView>
			</div>
		</LongForWrapper>
	);
});

HomeLongFor.propTypes = {
	infoData: PropTypes.object,
};

export default HomeLongFor;
