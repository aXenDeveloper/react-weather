import { useDataWeather } from '../../context/useDataWeather';
import { DataWeatherContextType } from '../../types/contextTypes';
import {
  ContainerWeather,
  WeatherStyle,
  WeatherTitleStyle
} from '../../styles/components/weather/WeatherStyle';
import Flags from '../Flags';
import WeatherIcon from './WeatherIcon';
import WeatherTemp from './WeatherTemp';

const WeatherMain = () => {
  const { weatherDataCurrent } = useDataWeather() as DataWeatherContextType;
  const weatherID = weatherDataCurrent.weather[0].id;
  const weatherTimeOfDay = weatherDataCurrent.weather[0].icon.slice(-1);

  return (
    <WeatherStyle>
      <ContainerWeather small>
        <WeatherTitleStyle>
          {weatherDataCurrent.name}, {weatherDataCurrent.sys.country}{' '}
          <Flags country={weatherDataCurrent.sys.country} />
        </WeatherTitleStyle>

        <WeatherIcon id={weatherID} timeOfDay={weatherTimeOfDay} />
        <WeatherTemp />
      </ContainerWeather>
    </WeatherStyle>
  );
};

export default WeatherMain;
