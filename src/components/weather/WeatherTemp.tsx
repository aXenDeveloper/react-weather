import { useTranslation } from 'react-i18next';
import { DataWeatherContextType, useDataWeather } from '../../context/useDataWeather';
import WeatherUnitsInput from './WeatherUnitsInput';

const WeatherTemp = () => {
	const { t } = useTranslation();

	const { data, getUnits } = useDataWeather() as DataWeatherContextType;

	const convertTemp = (temp: number, degrees: boolean = false) => {
		const selectUnits = `°${getUnits === 'metric' ? 'C' : 'F'}`;
		return `${Math.round(temp * 10) / 10}${degrees ? selectUnits : ''}`;
	};

	const temperature = convertTemp(data.main.temp);
	const temperatureFeelsLike = convertTemp(data.main.feels_like, true);
	const temperatureMin = convertTemp(data.main.temp_min, true);
	const temperatureMax = convertTemp(data.main.temp_max, true);

	return (
		<div className="weather_temp">
			<div className="weather_temp_main">
				<span>{temperature}</span>
				<WeatherUnitsInput />
			</div>

			<div className="weather_temp_minMax">
				{temperatureMin} / {temperatureMax}
			</div>

			<div className="weather_temp_feelsLike">
				{t('weather_feels_like')}: {temperatureFeelsLike}
			</div>

			<div className="weather_temp_desc">{data.weather[0].description}</div>
		</div>
	);
};

export default WeatherTemp;
