import { FC } from 'react';
import { useDataWeather } from '../../context/useDataWeather';
import { DataWeatherContextType } from '../../types/contextTypes';
import { ConvertTempType, ConvertSpeedType } from '../../types/weatherTypes';

export const ConvertTemp: FC<ConvertTempType> = ({ temp, degrees }) => {
  const { getUnits } = useDataWeather() as DataWeatherContextType;

  const roundTemp = Math.round(temp * 10) / 10;
  const getDegreesTemp = ` °${getUnits === 'metric' ? 'C' : 'F'}`;

  return (
    <span>
      {roundTemp}
      {degrees && getDegreesTemp}
    </span>
  );
};

export const ConvertSpeed: FC<ConvertSpeedType> = ({ speed }) => {
  const { getUnits } = useDataWeather() as DataWeatherContextType;

  const getSpeedUnits = getUnits === 'metric' ? 'km/h' : 'm/h';

  return (
    <span>
      {speed} {getSpeedUnits}
    </span>
  );
};
