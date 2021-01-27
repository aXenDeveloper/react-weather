import { useTranslation } from 'react-i18next';
import useGeoLocation from '../hooks/useGeoLocation';
import WeatherView from './WeatherView';

const HomeView = () => {
	const { t } = useTranslation();
	const geoLocation = useGeoLocation();

	if (geoLocation.code === 200)
		return (
			<>
				<WeatherView geoLocation={geoLocation.coord} />
			</>
		);

	return (
		<>
			<div>Home {t('Welcome to React')}</div>
		</>
	);
};

export default HomeView;
