import { useGeoLocation } from '../context/useGeoLocation';
import { GeoLocationContextType } from '../types/contextTypes';
import WeatherView from './WeatherView';

const HomeView = () => {
	const { geoLocation } = useGeoLocation() as GeoLocationContextType;

	if (geoLocation.status) return <WeatherView geoLocation={geoLocation} />;

	return <div>test {geoLocation.status ? 'ok' : 'no'}</div>;
};

export default HomeView;
