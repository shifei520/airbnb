import { memo, useEffect, useRef, useState } from 'react';
import { ViewWrapper } from './style';
import IconArrowLeft from '@/assets/svg/icon-arrow-left';
import IconArrowRight from '@/assets/svg/icon-arrow-right';

const ScrollView = memo((props) => {
	const [showRight, setShowRight] = useState(false);

	const scrollContentRef = useRef();
	const distanceRef = useRef();
	useEffect(() => {
		const scrollWidth = scrollContentRef.current.scrollWidth;
		const clientWidth = scrollContentRef.current.clientWidth;
		distanceRef.current = scrollWidth - clientWidth;
		setShowRight(distanceRef.current);
	}, [props.children]);

	const [currentIndex, setCurrentIndex] = useState(0);
	const [showLeft, setShowLeft] = useState(false);
	const arrowClickHandle = (arrow) => {
		let index;
		if (arrow) {
			index = currentIndex + 1;
		} else {
			index = currentIndex - 1;
		}

		setCurrentIndex(index);
		const newEle = scrollContentRef.current.children[index];
		const newEleOffsetLeft = newEle.offsetLeft;
		scrollContentRef.current.style.transform = `translateX(-${newEleOffsetLeft}px)`;

		setShowRight(distanceRef.current > newEleOffsetLeft);
		setShowLeft(newEleOffsetLeft > 0);
	};

	return (
		<ViewWrapper>
			{showLeft && (
				<div className="control left" onClick={() => arrowClickHandle(false)}>
					<IconArrowLeft />
				</div>
			)}
			{showRight && (
				<div className="control right" onClick={() => arrowClickHandle(true)}>
					<IconArrowRight />
				</div>
			)}
			<div className="scroll">
				<div className="scroll-content" ref={scrollContentRef}>
					{props.children}
				</div>
			</div>
		</ViewWrapper>
	);
});

ScrollView.propTypes = {};

export default ScrollView;
