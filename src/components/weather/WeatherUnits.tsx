import { GlobalContextType } from '../../types/contextTypes';
import { WeatherUnitsStyle, WeatherDegreesButton } from '../../styles/components/weather/WeatherUnits';
import { useGlobal } from '../../context/useGlobal';

const WeatherUnits = () => {
  const { getUnits, setUnits } = useGlobal() as GlobalContextType;

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
