import { memo, useEffect } from 'react';
import { EntireWrapper } from './style';
import EntireFilter from './components/entire-filter';
import EntireRooms from './components/entire-rooms';
import EntirePagination from './components/entire-pagination';
import { fetchRoomListAction } from '@/store/modules/entire/createActions';
import { useDispatch } from 'react-redux';

const Entire = memo(() => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchRoomListAction());
	}, [dispatch]);

	return (
		<EntireWrapper>
			<EntireFilter />
			<EntireRooms />
			<EntirePagination />
		</EntireWrapper>
	);
});

export default Entire;
