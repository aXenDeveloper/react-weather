import { FC, lazy } from 'react';
import { ForecastListStyle } from '../../styles/components/forecast/ForecastStyles';
import { ForecastItemType, ForecastListType } from '../../types/forecastTypes';
const ForecastListItem = lazy(() => import('./ForecastListItem'));

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
