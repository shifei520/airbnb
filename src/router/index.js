import { lazy } from 'react';
import Layout from '@/views/layout';
import { createHashRouter } from 'react-router-dom';

const Home = lazy(() => import('@/views/home'));
const Detail = lazy(() => import('@/views/detail'));
const Entire = lazy(() => import('@/views/entire'));

const router = createHashRouter([
	{
		path: '/',
		element: <Layout />,
		children: [
			{
				index: true,
				element: <Home />,
			},
			{
				path: '/detail',
				element: <Detail />,
			},
			{
				path: '/entire',
				element: <Entire />,
			},
		],
	},
]);

export default router;
