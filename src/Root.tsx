import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomeView from './views/HomeView';
import Layout from './components/Layout';
import WeatherView from './views/WeatherView';

const Root = () => {
	return (
		<Router>
			<Layout>
				<Switch>
					<Route exact path="/" component={HomeView} />
					<Route exact path="/:name" component={WeatherView} />
				</Switch>
			</Layout>
		</Router>
	);
};

export default Root;
