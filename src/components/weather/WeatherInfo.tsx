import { faLevelDownAlt, faLongArrowAltUp, faCloud, faThermometerHalf, faTint } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';
import { useDataWeather } from '../../context/useDataWeather';
import { DataWeatherContextType } from '../../types/contextTypes';
import { ConvertSpeed, ConvertTemp } from '../ConvertUnits';
import { Container } from '../../styles/global';
import { WeatherInfoStyle, WeatherInfoContainerStyled } from '../../styles/components/weather/WeatherInfoStyles';
import WeatherInfoBox from './WeatherInfoBox';
import WeatherLastUpdate from './WeatherLastUpdate';

const WeatherInfo = () => {
  const { weatherDataCurrent } = useDataWeather() as DataWeatherContextType;
  const { t } = useTranslation();

  return (
    <WeatherInfoStyle>
      <Container>
        <WeatherInfoBox title={t('feels_like')} icon={faThermometerHalf}>
          <ConvertTemp temp={weatherDataCurrent.main.feels_like} degrees={true} />
        </WeatherInfoBox>

        <WeatherInfoContainerStyled>
          <WeatherInfoBox title={t('pressure')} icon={faLevelDownAlt}>
            {weatherDataCurrent.main.pressure} hPa
          </WeatherInfoBox>

          <WeatherInfoBox title={t('wind')} icon={faLongArrowAltUp} rotate={weatherDataCurrent.wind.deg}>
            <ConvertSpeed speed={weatherDataCurrent.wind.speed} />
          </WeatherInfoBox>

          <WeatherInfoBox title={t('cloudiness')} icon={faCloud}>
            {weatherDataCurrent.clouds.all}%
          </WeatherInfoBox>

          <WeatherInfoBox title={t('humidity')} icon={faTint}>
            {weatherDataCurrent.main.humidity}%
          </WeatherInfoBox>
        </WeatherInfoContainerStyled>

        <WeatherLastUpdate />
      </Container>
    </WeatherInfoStyle>
  );
};

export default WeatherInfo;
