import { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { ForecastListItemType } from '../../types/forecastTypes';
import {
  ForecastListItemStyle,
  ForecastDate,
  ForecastTemp,
  ForecastButton,
  ForecastDesc
} from '../../styles/components/forecast/ForecastStyles';
import ConvertDate from '../ConvertDate';
import { ConvertTemp } from '../ConvertUnits';

const ForecastListItem: FC<ForecastListItemType> = ({ data }) => {
  return (
    <ForecastListItemStyle>
      <ForecastDate>
        <ConvertDate dt={data.dt} flex />
      </ForecastDate>

      <ForecastTemp>
        <ConvertTemp temp={data.main.temp} degrees />
      </ForecastTemp>

      <ForecastDesc>
        <img src={`https://openweathermap.org/img/wn/${data.weather[0].icon}.png`} alt={data.weather[0].description} />
        <span>{data.weather[0].description}</span>
      </ForecastDesc>

      <ForecastButton aria-label="open">
        <FontAwesomeIcon icon={faArrowUp} />
      </ForecastButton>
    </ForecastListItemStyle>
  );
};

export default ForecastListItem;
