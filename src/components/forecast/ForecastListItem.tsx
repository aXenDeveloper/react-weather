import { FC, useState } from 'react';
import { ForecastListItemType } from '../../types/forecastTypes';
import { ForecastItemStyle } from '../../styles/components/forecast/ForecastStyles';
import ForecastItemMain from './ForecastItemMain';
import ForecastDropDown from './ForecastDropDown';

const ForecastListItem: FC<ForecastListItemType> = ({ data }) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <ForecastItemStyle>
      <ForecastItemMain data={data} isOpen={isOpen} setOpen={setOpen} />

      {isOpen && <ForecastDropDown data={data} />}
    </ForecastItemStyle>
  );
};

export default ForecastListItem;
