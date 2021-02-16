import { FC, useState } from 'react';
import { ForecastListItemType } from '../../types/forecastTypes';
import { ForecastItemStyle } from '../../styles/components/forecast/ForecastStyles';
import ForecastItemMain from './ForecastItemMain';
import ForecastDropDown from './ForecastDropDown';

const ForecastListItem: FC<ForecastListItemType> = ({ data }) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <ForecastItemStyle>
      <ForecastItemMain
        dt={data.dt}
        temp={data.main.temp}
        icon={data.weather[0].icon}
        description={data.weather[0].description}
        isOpen={isOpen}
        setOpen={setOpen}
      />

      {isOpen && <ForecastDropDown />}
    </ForecastItemStyle>
  );
};

export default ForecastListItem;
