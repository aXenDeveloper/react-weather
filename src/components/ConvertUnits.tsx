import { FC } from 'react';
import { useGlobal } from '../context/useGlobal';
import { GlobalContextType } from '../types/contextTypes';
import { ConvertTempType, ConvertSpeedType } from '../types/componentsTypes';

export const ConvertTemp: FC<ConvertTempType> = ({ temp, degrees }) => {
  const { getUnits } = useGlobal() as GlobalContextType;

  const convertTemp = getUnits === 'metric' ? temp : 2 * (temp - 0.1 * temp) + 32;

  const roundTemp = Math.round(convertTemp * 10) / 10;
  const getDegreesTemp = ` °${getUnits === 'metric' ? 'C' : 'F'}`;

  return (
    <span>
      {roundTemp}
      {degrees && getDegreesTemp}
    </span>
  );
};

export const ConvertSpeed: FC<ConvertSpeedType> = ({ speed }) => {
  const { getUnits } = useGlobal() as GlobalContextType;

  const convertSpeed = getUnits === 'metric' ? speed * 3.6 : speed * 2.23693629;
  const roundSpeed = Math.round(convertSpeed * 10) / 10;
  const getSpeedUnits = getUnits === 'metric' ? 'km/h' : 'mph';

  return (
    <span>
      {roundSpeed} {getSpeedUnits}
    </span>
  );
};
