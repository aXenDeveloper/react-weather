import { Suspense, lazy } from 'react';
import { useTranslation } from 'react-i18next';
import Loading from '../components/Loading';
import useGeoLocation from '../hooks/useGeoLocation';

const WeatherView = lazy(() => import('./WeatherView'));

const HomeView = () => {
	const { t } = useTranslation();
	const geoLocation = useGeoLocation();

	if (geoLocation.code === 200)
		return (
			<Suspense fallback={<Loading />}>
				<WeatherView geoLocation={geoLocation.coord} />
			</Suspense>
		);

	return (
		<>
			<div>Home {t('Welcome to React')}</div>
		</>
	);
};

export default HomeView;
