import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import Root from './Root';
import { QueryClient, QueryClientProvider } from 'react-query';
import './i18n';
import GlobalStyle from './styles/global';
import Loading from './components/Loading';

const queryClient = new QueryClient({});

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<Loading />}>
      <QueryClientProvider client={queryClient}>
        <GlobalStyle />
        <Root />
      </QueryClientProvider>
    </Suspense>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
