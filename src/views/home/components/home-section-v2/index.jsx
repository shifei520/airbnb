import { memo, useState, useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';
import { SectionV2Wrapper } from './style';
import SectionHeader from '@/components/section-header';
import SectionRooms from '@/components/section-rooms';
import SectionTabs from '@/components/section-tabs';
import SectionFooter from '@/components/section-footer';

const HomeSectionV2 = memo((props) => {
	const { infoData } = props;
	const tabNames = infoData?.dest_address?.map((item) => item.name);

	const [name, setName] = useState('');
	const tabClickHandle = useCallback((index, name) => {
		setName(name);
	}, []);

	const computedName = useMemo(() => {
		return name || tabNames?.[0];
	}, [tabNames, name]);
	return (
		<SectionV2Wrapper>
			<SectionHeader title={infoData.title} subtitle={infoData.subtitle} />
			<SectionTabs tabNames={tabNames} tabClick={tabClickHandle} />
			<SectionRooms
				roomList={infoData.dest_list?.[computedName]}
				itemWidth="33.333%"
			/>
			<SectionFooter name={computedName} />
		</SectionV2Wrapper>
	);
});

HomeSectionV2.propTypes = {
	infoData: PropTypes.object,
};

export default HomeSectionV2;
