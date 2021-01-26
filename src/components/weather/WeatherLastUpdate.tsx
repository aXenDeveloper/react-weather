import { useTranslation } from 'react-i18next';
import { useDataWeather } from '../../context/useDataWeather';
import { WeatherLastUpdateStyle } from '../../styles/components/WeatherInfoStyles';
import { DataWeatherContextType } from '../../types/contextTypes';

const WeatherLastUpdate = () => {
	const { data, getUnits } = useDataWeather() as DataWeatherContextType;
	const { t } = useTranslation();

	const currentData = new Date(data.dt * 1000);

	const getDate = currentData.getDate();
	const getMonth = ('0' + (currentData.getMonth() + 1)).slice(-2);
	const getYear = currentData.getFullYear();
	const getHours = currentData.getHours();
	const getMinutes = currentData.getMinutes();

	return (
		<WeatherLastUpdateStyle>
			{t('last_upadte')}:{' '}
			{getUnits === 'metric' ? (
				<span>
					{getDate}.{getMonth}.{getYear} - {getHours}:{getMinutes}
				</span>
			) : (
				<span>
					{getMonth}/{getDate}/{getYear} - {getHours}:{getMinutes}
				</span>
			)}
		</WeatherLastUpdateStyle>
	);
};

export default WeatherLastUpdate;
