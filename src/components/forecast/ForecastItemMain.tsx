import {
  ForecastItemMainStyle,
  ForecastDate,
  ForecastTemp,
  ForecastButton,
  ForecastDesc
} from '../../styles/components/forecast/ForecastStyles';
import { ConvertTemp } from '../ConvertUnits';
import ConvertDate from '../ConvertDate';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FC } from 'react';
import { ForecastItemMainType } from '../../types/forecastTypes';

const ForecastItemMain: FC<ForecastItemMainType> = ({ dt, temp, icon, description, isOpen, setOpen }) => {
  return (
    <ForecastItemMainStyle onClick={() => setOpen(!isOpen)}>
      <ForecastDate>
        <ConvertDate dt={dt} flex />
      </ForecastDate>

      <ForecastTemp>
        <ConvertTemp temp={temp} degrees />
      </ForecastTemp>

      <ForecastDesc>
        <img src={`https://openweathermap.org/img/wn/${icon}.png`} alt={description} />
        <span>{description}</span>
      </ForecastDesc>

      <ForecastButton aria-label="open">
        <FontAwesomeIcon icon={faArrowUp} />
      </ForecastButton>
    </ForecastItemMainStyle>
  );
};

export default ForecastItemMain;
