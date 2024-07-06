import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import router from '@/router';
import '@/assets/css/reset.css';
import '@/assets/css/normalize.css';
import '@/assets/css/index.less';
import store from '@/store/index';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<Suspense fallback="loading">
			<Provider store={store}>
				<RouterProvider router={router} />
			</Provider>
		</Suspense>
	</React.StrictMode>,
);
