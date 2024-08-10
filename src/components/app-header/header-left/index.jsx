import { memo } from 'react';
import { LeftWrapper } from './style';
import IconLogo from '@/assets/svg/icon_logo';
import { useNavigate } from 'react-router-dom';

const HeaderLeft = memo(() => {
	const navigate = useNavigate();

	const logoClickHandle = () => {
		navigate('/');
	};

	return (
		<LeftWrapper>
			<div className="logo" onClick={logoClickHandle}>
				<IconLogo />
			</div>
		</LeftWrapper>
	);
});

export default HeaderLeft;
