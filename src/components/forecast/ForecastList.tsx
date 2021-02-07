import { FC } from 'react';
import { ForecastListStyle } from '../../styles/components/forecast/ForecastStyles';
import { ForecastItemType, ForecastListType } from '../../types/forecastTypes';
import ForecastListItem from './ForecastListItem';

const ForecastList: FC<ForecastListType> = ({ list }) => {
  return (
    <ForecastListStyle>
      {list.map((data: ForecastItemType) => (
        <ForecastListItem key={data.dt} data={data} />
      ))}
    </ForecastListStyle>
  );
};

export default ForecastList;
