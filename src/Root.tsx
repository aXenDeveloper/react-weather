import { lazy, Suspense, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import i18n from './i18n';
import { useTranslation } from 'react-i18next';
import { GlobalContext } from './context/useGlobal';
import Layout from './components/Layout';
import Loading from './components/Loading';
const HomeView = lazy(() => import('./views/HomeView'));
const ErrorView = lazy(() => import('./views/ErrorView'));
const WeatherView = lazy(() => import('./views/WeatherView'));
const ForecastView = lazy(() => import('./views/ForecastView'));
const Error = lazy(() => import('./components/Error'));

const Root = () => {
  const { t } = useTranslation();
  const [lang, setLang] = useState(i18n.language);
  const [getUnits, setUnits] = useState('metric');

  const keyAPI = process.env.REACT_APP_KEY_API_WEATHER;
  const titleWebsite = process.env.REACT_APP_TITLE_WEBSITE;

  return (
    <Router>
      <GlobalContext.Provider value={{ lang, setLang, getUnits, setUnits }}>
        <Layout>
          <Suspense fallback={<Loading />}>
            {keyAPI && titleWebsite ? (
              <Switch>
                <Route exact path="/" component={HomeView} />
                <Route exact path="/:name/forecast" component={ForecastView} />
                <Route exact path="/:name" component={WeatherView} />
                <Route component={ErrorView} />
              </Switch>
            ) : (
              <Error code={500}>{t('error_500_env')}</Error>
            )}
          </Suspense>
        </Layout>
      </GlobalContext.Provider>
    </Router>
  );
};

export default Root;
