import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import WeatherIcon from '../components/WeatherIcon';

const HomeView: FC = () => {
	const { t } = useTranslation();

	return (
		<>
			<section className="weather">
				<div className="container">
					<WeatherIcon />
				</div>
			</section>
			<div>Home {t('Welcome to React')}</div>
		</>
	);
};

export default HomeView;
