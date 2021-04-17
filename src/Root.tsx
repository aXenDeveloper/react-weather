import { lazy, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import i18n from './i18n';
import { useTranslation } from 'react-i18next';
import { GlobalContext } from './context/useGlobal';
import Layout from './components/Layout';

const HomeView = lazy(() => import('./views/HomeView'));
const ErrorView = lazy(() => import('./views/ErrorView'));
const WeatherView = lazy(() => import('./views/WeatherView'));
const ForecastView = lazy(() => import('./views/ForecastView'));
const DemoView = lazy(() => import('./views/DemoView'));
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
          {keyAPI && titleWebsite ? (
            <Switch>
              <Route exact path="/" component={HomeView} />
              <Route exact path="/demoweather/:code/:timeOfDay" component={DemoView} />
              <Route exact path="/:name/forecast" component={ForecastView} />
              <Route exact path="/:name" component={WeatherView} />
              <Route component={ErrorView} />
            </Switch>
          ) : (
            <Error code={500}>{t('error_500_env')}</Error>
          )}
        </Layout>
      </GlobalContext.Provider>
    </Router>
  );
};

export default Root;
