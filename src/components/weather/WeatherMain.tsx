import { useDataWeather } from '../../context/useDataWeather';
import { DataWeatherContextType } from '../../types/contextTypes';
import { ContainerWeather, WeatherStyle, WeatherTitleStyle } from '../../styles/components/weather/WeatherStyle';
import Flags from '../Flags';
import WeatherIcon from './WeatherIcon';
import WeatherTemp from './WeatherTemp';

const WeatherMain = () => {
  const { weatherDataCurrent } = useDataWeather() as DataWeatherContextType;

  return (
    <WeatherStyle>
      <ContainerWeather small>
        <WeatherTitleStyle>
          {weatherDataCurrent.name}, {weatherDataCurrent.sys.country} <Flags />
        </WeatherTitleStyle>

        <WeatherIcon />
        <WeatherTemp />
      </ContainerWeather>
    </WeatherStyle>
  );
};

export default WeatherMain;
