import { useDataWeather } from '../../context/useDataWeather';
import { DataWeatherContextType } from '../../types/contextTypes';
import { WeatherUnitsInputStyle } from '../../styles/components/Weather';

const WeatherUnitsInput = () => {
	const { getUnits, setUnits } = useDataWeather() as DataWeatherContextType;

	return (
		<WeatherUnitsInputStyle>
			<label>
				<input
					type="radio"
					name="weather_units"
					onChange={() => setUnits('metric')}
					checked={getUnits === 'metric'}
				/>
				<span>°C</span>
			</label>

			<label>
				<input
					type="radio"
					name="weather_units"
					checked={getUnits === 'imperial'}
					onChange={() => setUnits('imperial')}
				/>
				<span>°F</span>
			</label>
		</WeatherUnitsInputStyle>
	);
};

export default WeatherUnitsInput;
