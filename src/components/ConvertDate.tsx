import { FC } from 'react';
import { useGlobal } from '../context/useGlobal';
import { ConvertDateType } from '../types/componentsTypes';
import { GlobalContextType } from '../types/contextTypes';

const ConvertDate: FC<ConvertDateType> = ({ dt }) => {
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
        <span>
          {get.day}.{get.month}.{get.year} - {get.hours}:{get.minutes}
        </span>
      ) : (
        <span>
          {get.month}/{get.day}/{get.year} - {get.hours}:{get.minutes}
        </span>
      )}
    </>
  );
};

export default ConvertDate;
