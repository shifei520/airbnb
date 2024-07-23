import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import router from '@/router';
import '@/assets/css/reset.css';
import '@/assets/css/normalize.css';
import '@/assets/css/index.less';
import store from '@/store/index';
import { Provider } from 'react-redux';
import theme from '@/assets/theme/index';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<Suspense fallback="loading">
		<Provider store={store}>
			<ThemeProvider theme={theme}>
				<RouterProvider router={router} />
			</ThemeProvider>
		</Provider>
	</Suspense>,
);
