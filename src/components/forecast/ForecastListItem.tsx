import { FC } from 'react';
import { ForecastListItemType } from '../../types/forecastTypes';
import ConvertDate from '../ConvertDate';

const ForecastListItem: FC<ForecastListItemType> = ({ data }) => {
  return (
    <li>
      <ConvertDate dt={data.dt} />
    </li>
  );
};

export default ForecastListItem;
