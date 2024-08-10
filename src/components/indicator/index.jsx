import { memo, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { IndicatorWrapper } from './style';

const Indicator = memo((props) => {
	const { selectIndex } = props;
	const contentRef = useRef();

	useEffect(() => {
		const selectEle = contentRef.current.children[selectIndex];
		const itemOffsetLeft = selectEle.offsetLeft;
		const itemOffsetWidth = selectEle.offsetWidth;
		const contentWidth = contentRef.current.offsetWidth;
		const contentScrollWidth = contentRef.current.scrollWidth;

		let distance = itemOffsetLeft + itemOffsetWidth / 2 - contentWidth / 2;

		if (distance < 0) {
			distance = 0;
		} else if (distance > contentScrollWidth - contentWidth) {
			distance = contentScrollWidth - contentWidth;
		}

		contentRef.current.style.transform = `translate3d(${-distance}px, 0, 0)`;
	}, [selectIndex]);

	return (
		<IndicatorWrapper>
			<div className="i-content" ref={contentRef}>
				{props.children}
			</div>
		</IndicatorWrapper>
	);
});

Indicator.propTypes = {
	children: PropTypes.node,
	selectIndex: PropTypes.number,
};

export default Indicator;
