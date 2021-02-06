import { useTranslation } from 'react-i18next';
import { useDataWeather } from '../../context/useDataWeather';
import { DataWeatherContextType } from '../../types/contextTypes';
import { WeatherLastUpdateStyle } from '../../styles/components/WeatherStyle';
import ConvertDate from '../ConvertDate';

const WeatherLastUpdate = () => {
  const { weatherDataCurrent } = useDataWeather() as DataWeatherContextType;
  const { t } = useTranslation();

  return (
    <WeatherLastUpdateStyle>
      {t('last_upadte')}: <ConvertDate dt={weatherDataCurrent.dt} />
    </WeatherLastUpdateStyle>
  );
};

export default WeatherLastUpdate;
