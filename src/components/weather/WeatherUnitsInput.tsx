import { useDataWeather } from '../../context/useDataWeather';
import { DataWeatherContextType } from '../../types/contextTypes';
import { WeatherUnitsInputStyle, WeatherDegreesButton } from '../../styles/components/Weather';

const WeatherUnitsInput = () => {
	const { getUnits, setUnits } = useDataWeather() as DataWeatherContextType;

	return (
		<WeatherUnitsInputStyle>
			<WeatherDegreesButton onClick={() => setUnits('metric')} aria-checked={getUnits === 'metric'}>
				°C
			</WeatherDegreesButton>

			<WeatherDegreesButton onClick={() => setUnits('imperial')} aria-checked={getUnits === 'imperial'}>
				°F
			</WeatherDegreesButton>
		</WeatherUnitsInputStyle>
	);
};

export default WeatherUnitsInput;
