import { useTranslation } from 'react-i18next';
import { useDataWeather } from '../../context/useDataWeather';
import { DataWeatherContextType, GlobalContextType } from '../../types/contextTypes';
import { WeatherLastUpdateStyle } from '../../styles/components/WeatherStyle';
import { useGlobal } from '../../context/useGlobal';

const WeatherLastUpdate = () => {
  const { weatherDataCurrent } = useDataWeather() as DataWeatherContextType;
  const { getUnits } = useGlobal() as GlobalContextType;
  const { t } = useTranslation();

  const currentData = new Date(weatherDataCurrent.dt * 1000);

  const getDate = ('0' + currentData.getDate()).slice(-2);
  const getMonth = ('0' + (currentData.getMonth() + 1)).slice(-2);
  const getYear = currentData.getFullYear();
  const getHours = ('0' + currentData.getHours()).slice(-2);
  const getMinutes = ('0' + currentData.getMinutes()).slice(-2);

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
