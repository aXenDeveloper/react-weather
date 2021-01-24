import { DataWeatherContextType, useDataWeather } from '../../context/useDataWeather';
import ConvertTemp from './ConvertTemp';
import WeatherUnitsInput from './WeatherUnitsInput';

const WeatherTemp = () => {
	const { data } = useDataWeather() as DataWeatherContextType;

	return (
		<div className="weather_temp">
			<div className="weather_temp_main">
				<ConvertTemp temp={data.main.temp} />
				<WeatherUnitsInput />
			</div>

			<div className="weather_temp_minMax">
				<ConvertTemp temp={data.main.temp_min} degrees={true} /> /{' '}
				<ConvertTemp temp={data.main.temp_max} degrees={true} />
			</div>

			<div className="weather_temp_desc">{data.weather[0].description}</div>
		</div>
	);
};

export default WeatherTemp;
