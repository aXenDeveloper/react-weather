import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import Root from './Root';
import './styles/global.scss';
import { QueryClient, QueryClientProvider } from 'react-query';
import './i18n';

const queryClient = new QueryClient({});

ReactDOM.render(
	<React.StrictMode>
		<QueryClientProvider client={queryClient}>
			<Root />
		</QueryClientProvider>
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
