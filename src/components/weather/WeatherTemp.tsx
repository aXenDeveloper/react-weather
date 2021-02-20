import { useDataWeather } from '../../context/useDataWeather';
import { DataWeatherContextType } from '../../types/contextTypes';
import {
  WeatherTempStyle,
  WeatherTempMainStyle,
  WeatherTempMinMaxStyle,
  WeatherDescStyle,
  WeatherButtonToForecast
} from '../../styles/components/weather/WeatherTempStyle';
import { ConvertTemp } from '../ConvertUnits';
import WeatherUnits from './WeatherUnits';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const WeatherTemp = () => {
  const { weatherDataCurrent } = useDataWeather() as DataWeatherContextType;
  const city = weatherDataCurrent.name.toLowerCase();
  const { t } = useTranslation();

  return (
    <WeatherTempStyle>
      <WeatherTempMainStyle>
        <ConvertTemp temp={weatherDataCurrent.main.temp} />
        <WeatherUnits column />
      </WeatherTempMainStyle>

      <WeatherTempMinMaxStyle>
        <ConvertTemp temp={weatherDataCurrent.main.temp_min} degrees={true} /> /{' '}
        <ConvertTemp temp={weatherDataCurrent.main.temp_max} degrees={true} />
      </WeatherTempMinMaxStyle>

      <WeatherDescStyle>{weatherDataCurrent.weather[0].description}</WeatherDescStyle>

      <Link to={`/${city}/forecast`}>
        <WeatherButtonToForecast>{t('forecast')}</WeatherButtonToForecast>
      </Link>
    </WeatherTempStyle>
  );
};

export default WeatherTemp;
