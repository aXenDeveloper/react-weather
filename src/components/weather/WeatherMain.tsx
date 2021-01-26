import { useDataWeather } from '../../context/useDataWeather';
import { DataWeatherContextType } from '../../types/contextTypes';
import Flags from '../Flags';
import WeatherIcon from './WeatherIcon';
import WeatherTemp from './WeatherTemp';
import { ContainerWeather } from '../../styles/components/Weather';

const WeatherMain = () => {
	const { data } = useDataWeather() as DataWeatherContextType;

	return (
		<section className="weather">
			<ContainerWeather small>
				<h1 className="weather_title">
					{data.name}, {data.sys.country} <Flags />
				</h1>

				<WeatherIcon />
				<WeatherTemp />
			</ContainerWeather>
		</section>
	);
};

export default WeatherMain;
