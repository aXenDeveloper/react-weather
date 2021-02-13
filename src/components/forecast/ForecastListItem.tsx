import { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { ForecastListItemType } from '../../types/forecastTypes';
import {
  ForecastListItemStyle,
  ForecastDate,
  ForecastTemp,
  ForecastButton,
  ForecastImg
} from '../../styles/components/forecast/ForecastStyles';
import ConvertDate from '../ConvertDate';

const ForecastListItem: FC<ForecastListItemType> = ({ data }) => {
  return (
    <ForecastListItemStyle>
      <ForecastDate>
        <ConvertDate dt={data.dt} />
      </ForecastDate>

      <ForecastTemp>{data.main.temp}</ForecastTemp>
      <ForecastImg src={`https://openweathermap.org/img/wn/${data.weather[0].icon}.png`} alt={data.weather[0].description} />

      <ForecastButton aria-label="open">
        <FontAwesomeIcon icon={faArrowUp} />
      </ForecastButton>
    </ForecastListItemStyle>
  );
};

export default ForecastListItem;
