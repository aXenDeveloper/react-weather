import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import i18n from './i18n';
import { LangContext } from './context/useLang';
import Layout from './components/Layout';
import ErrorView from './views/ErrorView';
import HomeView from './views/HomeView';
import WeatherView from './views/WeatherView';

const Root = () => {
  const [lang, setLang] = useState(i18n.language);

  return (
    <Router>
      <LangContext.Provider value={{ lang, setLang }}>
        <Layout>
          <Switch>
            <Route exact path="/" component={HomeView} />
            <Route exact path="/:name" component={WeatherView} />
            <Route component={ErrorView} />
          </Switch>
        </Layout>
      </LangContext.Provider>
    </Router>
  );
};

export default Root;
