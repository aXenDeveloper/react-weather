import { DataWeatherContextType, useDataWeather } from '../../context/useDataWeather';
import WeatherIcon from './WeatherIcon';
import WeatherTemp from './WeatherTemp';

const WeatherMain = () => {
	const { data } = useDataWeather() as DataWeatherContextType;

	return (
		<div className="weather">
			<div className="container">
				<h1 className="weather_title">
					{data.name}, {data.sys.country}
				</h1>

				<WeatherIcon />

				<WeatherTemp />
			</div>
		</div>
	);
};

export default WeatherMain;
