import { memo } from 'react';
import { Outlet } from 'react-router-dom';
import AppFooter from '@/components/app-footer';
import AppHeader from '@/components/app-header';
import { useScrollTop } from '@/hooks/useScrollTop';

const Layout = memo(() => {
	useScrollTop();

	return (
		<div className="layout">
			<AppHeader />
			<div className="page">
				<Outlet />
			</div>
			<AppFooter />
		</div>
	);
});

export default Layout;
