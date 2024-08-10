import { memo } from 'react';
import { EntireWrapper } from './style';
import EntireFilter from './components/entire-filter';
import EntireRooms from './components/entire-rooms';
import EntirePagination from './components/entire-pagination';

const Entire = memo(() => {
	return (
		<EntireWrapper>
			<EntireFilter />
			<EntireRooms />
			<EntirePagination />
		</EntireWrapper>
	);
});

export default Entire;
