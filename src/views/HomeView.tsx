import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import WeatherIcon from '../components/WeatherIcon';
import WeatherInfo from '../components/WeatherInfo';

const HomeView: FC = () => {
	const { t } = useTranslation();

	return (
		<>
			<div className="weather">
				<div className="container">
					<WeatherIcon weatherID={200} weatherIcon="13d" />

					<WeatherInfo city="Warszawa" />
				</div>
			</div>
			<div>Home {t('Welcome to React')}</div>
		</>
	);
};

export default HomeView;
