import { memo, useMemo } from 'react';
import { Pagination } from '@mui/material';
import { PaginationWrapper } from './style';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { fetchRoomListAction } from '@/store/modules/entire/createActions';

const EntirePagination = memo(() => {
	const { totalCount, currentPage, roomList } = useSelector(
		(state) => state.entire,
		shallowEqual,
	);

	const startCount = useMemo(() => {
		return currentPage * 20 + 1;
	}, [currentPage]);
	const endCount = useMemo(() => {
		return currentPage * 20 + 20;
	}, [currentPage]);
	const totalPage = useMemo(() => {
		return Math.ceil(totalCount / 20);
	}, [totalCount]);

	const dispatch = useDispatch();
	const pageChangeHandle = (_, page) => {
		window.scrollTo(0, 0);
		// dispatch(changeCurrentPageAction(page - 1));
		dispatch(fetchRoomListAction(page - 1));
	};

	return (
		<PaginationWrapper>
			{!!roomList.length && (
				<div className="info">
					<Pagination count={totalPage} onChange={pageChangeHandle} />
					<div className="desc">
						第{startCount}-{endCount}个房源，共超过 {totalCount} 个
					</div>
				</div>
			)}
		</PaginationWrapper>
	);
});

export default EntirePagination;
