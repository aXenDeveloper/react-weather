import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import i18n from './i18n';
import { GlobalContext } from './context/useGlobal';
import Layout from './components/Layout';
import ErrorView from './views/ErrorView';
import HomeView from './views/HomeView';
import WeatherView from './views/WeatherView';
import WeatherForecastView from './views/WeatherForecastView';

const Root = () => {
  const [lang, setLang] = useState(i18n.language);
  const [getUnits, setUnits] = useState('metric');

  return (
    <Router>
      <GlobalContext.Provider value={{ lang, setLang, getUnits, setUnits }}>
        <Layout>
          <Switch>
            <Route exact path="/" component={HomeView} />
            <Route exact path="/:name/forecast" component={WeatherForecastView} />
            <Route exact path="/:name" component={WeatherView} />
            <Route component={ErrorView} />
          </Switch>
        </Layout>
      </GlobalContext.Provider>
    </Router>
  );
};

export default Root;
