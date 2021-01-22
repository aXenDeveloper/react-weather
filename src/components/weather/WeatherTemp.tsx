import { DataWeatherContextType, useDataWeather } from '../../context/useDataWeather';
import WeatherUnitsInput from './WeatherUnitsInput';

const WeatherTemp = () => {
	const { data } = useDataWeather() as DataWeatherContextType;

	return (
		<div className="weather_temp">
			<span className="weather_temp_main">{data.main.temp}°</span>
			<WeatherUnitsInput />
		</div>
	);
};

export default WeatherTemp;
