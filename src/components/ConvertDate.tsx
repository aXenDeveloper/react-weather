import { FC } from 'react';
import { useGlobal } from '../context/useGlobal';
import { ConvertDateStyle } from '../styles/components/ConvertStyles';
import { ConvertDateType } from '../types/componentsTypes';
import { GlobalContextType } from '../types/contextTypes';

const ConvertDate: FC<ConvertDateType> = ({ dt, flex }) => {
  const { getUnits } = useGlobal() as GlobalContextType;

  const date = new Date(dt * 1000);
  const get = {
    day: ('0' + date.getDate()).slice(-2),
    month: ('0' + (date.getMonth() + 1)).slice(-2),
    year: date.getFullYear(),
    hours: ('0' + date.getHours()).slice(-2),
    minutes: ('0' + date.getMinutes()).slice(-2)
  };

  return (
    <>
      {getUnits === 'metric' ? (
        <ConvertDateStyle flex={flex}>
          <span>
            {get.day}.{get.month}.{get.year}
          </span>{' '}
          <span>
            {get.hours}:{get.minutes}
          </span>
        </ConvertDateStyle>
      ) : (
        <ConvertDateStyle flex={flex}>
          <span>
            {get.month}/{get.day}/{get.year}
          </span>{' '}
          <span>
            {get.hours}:{get.minutes}
          </span>
        </ConvertDateStyle>
      )}
    </>
  );
};

export default ConvertDate;
