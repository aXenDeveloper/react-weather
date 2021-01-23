import { DataWeatherContextType, useDataWeather } from '../../context/useDataWeather';
import WeatherUnitsInput from './WeatherUnitsInput';

const WeatherTemp = () => {
	const { data } = useDataWeather() as DataWeatherContextType;
	const temperature = Math.round(data.main.temp * 10) / 10;

	return (
		<div className="weather_temp">
			<div className="weather_temp_main">
				<span>{temperature}°</span>
				<WeatherUnitsInput />
			</div>

			<div className="weather_temp_desc">{data.weather[0].description}</div>
		</div>
	);
};

export default WeatherTemp;
