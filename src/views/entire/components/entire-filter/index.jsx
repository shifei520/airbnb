import { memo, useState } from 'react';
import { FilterWrapper } from './style';
import filterFata from '@/assets/data/filter_data.json';
import classNames from 'classnames';

const EntireFilter = memo(() => {
	const [selectItems, setSelectItems] = useState([]);

	const itemClickHandle = (item) => {
		const newSelectItems = [...selectItems];
		if (newSelectItems.includes(item)) {
			const index = newSelectItems.findIndex((subItem) => subItem === item);
			newSelectItems.splice(index, 1);
		} else {
			newSelectItems.push(item);
		}
		setSelectItems(newSelectItems);
	};

	return (
		<FilterWrapper>
			<div className="filter">
				{filterFata.map((item) => {
					return (
						<div
							className={classNames('item', {
								active: selectItems.includes(item),
							})}
							key={item}
							onClick={(e) => itemClickHandle(item)}
						>
							{item}
						</div>
					);
				})}
			</div>
		</FilterWrapper>
	);
});

export default EntireFilter;
