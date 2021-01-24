import WeatherInfoBox from './WeatherInfoBox';
import { DataWeatherContextType, useDataWeather } from '../../context/useDataWeather';
import { faThermometer, faLevelDownAlt } from '@fortawesome/free-solid-svg-icons';
import ConvertTemp from './ConvertTemp';
import { useTranslation } from 'react-i18next';

const WeatherInfo = () => {
	const { data } = useDataWeather() as DataWeatherContextType;
	const { t } = useTranslation();

	return (
		<section className="weather_info">
			<div className="container">
				<WeatherInfoBox title={t('weather_feels_like')} icon={faThermometer}>
					<ConvertTemp temp={data.main.feels_like} degrees={true} />
				</WeatherInfoBox>

				<WeatherInfoBox title={t('weather_pressure')} icon={faLevelDownAlt}>
					{data.main.pressure} hPa
				</WeatherInfoBox>
			</div>
		</section>
	);
};

export default WeatherInfo;
