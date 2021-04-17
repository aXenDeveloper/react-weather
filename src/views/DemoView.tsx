import { useParams } from 'react-router';
import WeatherIcon from '../components/weather/WeatherIcon';
import { ContainerWeather, WeatherStyle } from '../styles/components/weather/WeatherStyle';

import { DemoViewParamsType } from '../types/viewTypes';

const DemoView = () => {
  const { code, timeOfDay } = useParams<DemoViewParamsType>();
  const weatherID = parseInt(code);

  return (
    <WeatherStyle>
      <ContainerWeather small demo>
        <WeatherIcon id={weatherID} timeOfDay={timeOfDay} />
      </ContainerWeather>
    </WeatherStyle>
  );
};

export default DemoView;
