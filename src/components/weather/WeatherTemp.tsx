import { useDataWeather } from '../../context/useDataWeather';
import { WeatherTempStyle, WeatherTempMainStyle, WeatherTempMinMaxStyle, WeatherDescStyle } from '../../styles/weather';
import { DataWeatherContextType } from '../../types/contextTypes';
import { ConvertTemp } from './ConvertUnits';
import WeatherUnitsInput from './WeatherUnitsInput';

const WeatherTemp = () => {
	const { data } = useDataWeather() as DataWeatherContextType;

	return (
		<WeatherTempStyle>
			<WeatherTempMainStyle>
				<ConvertTemp temp={data.main.temp} />
				<WeatherUnitsInput />
			</WeatherTempMainStyle>

			<WeatherTempMinMaxStyle>
				<ConvertTemp temp={data.main.temp_min} degrees={true} /> /{' '}
				<ConvertTemp temp={data.main.temp_max} degrees={true} />
			</WeatherTempMinMaxStyle>

			<WeatherDescStyle>{data.weather[0].description}</WeatherDescStyle>
		</WeatherTempStyle>
	);
};

export default WeatherTemp;
