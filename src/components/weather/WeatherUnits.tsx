import { useDataWeather } from '../../context/useDataWeather';
import { DataWeatherContextType } from '../../types/contextTypes';
import { WeatherUnitsStyle, WeatherDegreesButton } from '../../styles/components/WeatherUnits';

const WeatherUnits = () => {
  const { getUnits, setUnits } = useDataWeather() as DataWeatherContextType;

  return (
    <WeatherUnitsStyle>
      <WeatherDegreesButton onClick={() => setUnits('metric')} aria-checked={getUnits === 'metric'}>
        °C
      </WeatherDegreesButton>

      <WeatherDegreesButton onClick={() => setUnits('imperial')} aria-checked={getUnits === 'imperial'}>
        °F
      </WeatherDegreesButton>
    </WeatherUnitsStyle>
  );
};

export default WeatherUnits;
