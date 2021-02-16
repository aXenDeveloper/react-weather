import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import {
  faThermometerHalf,
  faThermometerQuarter,
  faThermometerFull,
  faLevelDownAlt,
  faLongArrowAltUp,
  faCloud,
  faTint,
  faCloudRain
} from '@fortawesome/free-solid-svg-icons';
import { ForecastListItemType } from '../../types/forecastTypes';
import { ForecastDropDownStyle } from '../../styles/components/forecast/ForecastDropDownStyles';
import ForecastDropDownItem from './ForecastDropDownItem';
import { ConvertSpeed, ConvertTemp } from '../ConvertUnits';

const ForecastDropDown: FC<ForecastListItemType> = ({ data }) => {
  const { t } = useTranslation();

  return (
    <ForecastDropDownStyle>
      <ForecastDropDownItem icon={faThermometerHalf} title={t('feels_like')}>
        <ConvertTemp temp={data.main.feels_like} degrees />
      </ForecastDropDownItem>

      <ForecastDropDownItem icon={faThermometerQuarter} title={t('temp_min')}>
        <ConvertTemp temp={data.main.temp_min} degrees />
      </ForecastDropDownItem>

      <ForecastDropDownItem icon={faThermometerFull} title={t('temp_max')}>
        <ConvertTemp temp={data.main.temp_max} degrees />
      </ForecastDropDownItem>

      <ForecastDropDownItem icon={faLevelDownAlt} title={t('pressure')}>
        {data.main.pressure} hPa
      </ForecastDropDownItem>

      <ForecastDropDownItem icon={faLongArrowAltUp} title={t('wind')} rotate={data.wind.deg}>
        <ConvertSpeed speed={data.wind.speed} />
      </ForecastDropDownItem>

      <ForecastDropDownItem icon={faCloud} title={t('cloudiness')}>
        {data.clouds.all}%
      </ForecastDropDownItem>

      <ForecastDropDownItem icon={faTint} title={t('humidity')}>
        {data.main.humidity}%
      </ForecastDropDownItem>

      <ForecastDropDownItem icon={faCloudRain} title={t('rainfall')}>
        {data.pop}%
        {(data.snow?.['3h'] || data.rain?.['3h']) && (
          <span>{` (${(data.snow?.['3h'] ?? '') || (data.rain?.['3h'] ?? '')}mm)`}</span>
        )}
      </ForecastDropDownItem>
    </ForecastDropDownStyle>
  );
};

export default ForecastDropDown;
