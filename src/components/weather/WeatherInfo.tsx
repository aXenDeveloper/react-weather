import WeatherInfoBox from './WeatherInfoBox';
import { DataWeatherContextType, useDataWeather } from '../../context/useDataWeather';
import { faThermometer } from '@fortawesome/free-solid-svg-icons';
import ConvertTemp from './ConvertTemp';

const WeatherInfo = () => {
	const { data } = useDataWeather() as DataWeatherContextType;

	return (
		<section className="weather_info">
			<div className="container">
				<WeatherInfoBox icon={faThermometer}>
					<ConvertTemp temp={data.main.feels_like} degrees={true} />
				</WeatherInfoBox>
				<WeatherInfoBox icon={faThermometer}>test</WeatherInfoBox>
			</div>
		</section>
	);
};

export default WeatherInfo;
