import { memo, useState } from 'react';
import PropTypes from 'prop-types';
import { TabsWrapper } from './style';
import classNames from 'classnames';
import ScrollView from '@/components/scroll-view';

const SectionTabs = memo((props) => {
	const { tabNames = [], tabClick } = props;
	const [currentIndex, setCurrentIndex] = useState(0);

	const itemClickHandle = (index, name) => {
		setCurrentIndex(index);
		tabClick(index, name);
	};

	return (
		<TabsWrapper>
			<ScrollView>
				{tabNames.map((item, index) => {
					return (
						<div
							key={item}
							className={classNames('item', { active: currentIndex === index })}
							onClick={(e) => itemClickHandle(index, item)}
						>
							{item}
						</div>
					);
				})}
			</ScrollView>
		</TabsWrapper>
	);
});

SectionTabs.propTypes = {
	tabNames: PropTypes.array,
	tabClick: PropTypes.func,
};

export default SectionTabs;
