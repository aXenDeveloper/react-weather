import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import i18n from './i18n';
import { useTranslation } from 'react-i18next';
import { GlobalContext } from './context/useGlobal';
import Layout from './components/Layout';
import HomeView from './views/HomeView';
import ErrorView from './views/ErrorView';
import WeatherView from './views/WeatherView';
import ForecastView from './views/ForecastView';
import Error from './components/Error';

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
