import { useDataWeather } from '../../context/useDataWeather';
import { DataWeatherContextType } from '../../types/contextTypes';
import {
  WeatherTempStyle,
  WeatherTempMainStyle,
  WeatherTempMinMaxStyle,
  WeatherDescStyle
} from '../../styles/components/WeatherTempStyle';
import { ConvertTemp } from './ConvertUnits';
import WeatherUnits from './WeatherUnits';

const WeatherTemp = () => {
  const { data } = useDataWeather() as DataWeatherContextType;

  return (
    <WeatherTempStyle>
      <WeatherTempMainStyle>
        <ConvertTemp temp={data.main.temp} />
        <WeatherUnits />
      </WeatherTempMainStyle>

      <WeatherTempMinMaxStyle>
        <ConvertTemp temp={data.main.temp_min} degrees={true} /> / <ConvertTemp temp={data.main.temp_max} degrees={true} />
      </WeatherTempMinMaxStyle>

      <WeatherDescStyle>{data.weather[0].description}</WeatherDescStyle>
    </WeatherTempStyle>
  );
};

export default WeatherTemp;
