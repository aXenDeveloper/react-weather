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

const ForecastItemMain: FC<ForecastItemMainType> = ({ data, isOpen, setOpen }) => {
  return (
    <ForecastItemMainStyle onClick={() => setOpen(!isOpen)}>
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

      <ForecastButton isOpen={isOpen} aria-label="open">
        <FontAwesomeIcon icon={faArrowUp} />
      </ForecastButton>
    </ForecastItemMainStyle>
  );
};

export default ForecastItemMain;
