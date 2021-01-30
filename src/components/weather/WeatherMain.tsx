import { useDataWeather } from '../../context/useDataWeather';
import { DataWeatherContextType } from '../../types/contextTypes';
import Flags from '../Flags';
import WeatherIcon from './WeatherIcon';
import WeatherTemp from './WeatherTemp';
import { ContainerWeather } from '../../styles/components/Weather';
import { WeatherStyle, WeatherTitleStyle } from '../../styles/weather';

const WeatherMain = () => {
	const { data } = useDataWeather() as DataWeatherContextType;

	return (
		<WeatherStyle>
			<ContainerWeather small>
				<WeatherTitleStyle>
					{data.name}, {data.sys.country} <Flags />
				</WeatherTitleStyle>

				<WeatherIcon />
				<WeatherTemp />
			</ContainerWeather>
		</WeatherStyle>
	);
};

export default WeatherMain;
