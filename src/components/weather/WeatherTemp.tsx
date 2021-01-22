import { DataWeatherContextType, useDataWeather } from '../../context/useDataWeather';

const WeatherTemp = () => {
	const dataWeather = useDataWeather() as DataWeatherContextType;

	return (
		<div className="weather_temp">
			{dataWeather.main.temp}
			<span>°C</span>
		</div>
	);
};

export default WeatherTemp;
