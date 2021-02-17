import { GlobalContextType } from '../../types/contextTypes';
import { WeatherUnitsStyle, WeatherDegreesButton } from '../../styles/components/weather/WeatherUnits';
import { useGlobal } from '../../context/useGlobal';
import { FC } from 'react';
import { WeatherUnitsType } from '../../types/weatherTypes';

const WeatherUnits: FC<WeatherUnitsType> = ({ column }) => {
  const { getUnits, setUnits } = useGlobal() as GlobalContextType;

  return (
    <WeatherUnitsStyle column={column}>
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
