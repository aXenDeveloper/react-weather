import WeatherInfoBox from './WeatherInfoBox';
import { DataWeatherContextType, useDataWeather } from '../../context/useDataWeather';
import { faThermometer } from '@fortawesome/free-solid-svg-icons';

const WeatherInfo = () => {
	const { data } = useDataWeather() as DataWeatherContextType;

	return (
		<section className="weather_info">
			<div className="container">
				<WeatherInfoBox icon={faThermometer}>{data.main.feels_like}</WeatherInfoBox>
				<WeatherInfoBox icon={faThermometer}>test</WeatherInfoBox>
			</div>
		</section>
	);
};

export default WeatherInfo;
