import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomeView from './views/HomeView';
import Layout from './components/Layout';
import WeatherView from './views/WeatherView';
import { LangContext } from './context';
import { useState } from 'react';
import i18n from './i18n';

const Root = () => {
	const [lang, setLang] = useState(i18n.language);

	return (
		<Router>
			<LangContext.Provider value={{ lang, setLang }}>
				<Layout>
					<Switch>
						<Route exact path="/" component={HomeView} />
						<Route exact path="/:name" component={WeatherView} />
					</Switch>
				</Layout>
			</LangContext.Provider>
		</Router>
	);
};

export default Root;
