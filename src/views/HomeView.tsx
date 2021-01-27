import { useTranslation } from 'react-i18next';
import useGeoLocation from '../hooks/useGeoLocation';

const HomeView = () => {
	const { t } = useTranslation();
	const geoLocation = useGeoLocation();
	console.log(geoLocation);

	if (geoLocation.code === 200)
		return (
			<>
				<div>{geoLocation.coord.lat}</div>
			</>
		);

	return (
		<>
			<div>Home {t('Welcome to React')}</div>
		</>
	);
};

export default HomeView;
