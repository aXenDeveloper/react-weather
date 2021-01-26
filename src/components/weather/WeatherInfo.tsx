import WeatherInfoBox from './WeatherInfoBox';
import { useDataWeather } from '../../context/useDataWeather';
import { DataWeatherContextType } from '../../types/contextTypes';
import { faLevelDownAlt, faLongArrowAltUp, faCloud, faThermometerHalf, faTint } from '@fortawesome/free-solid-svg-icons';
import { ConvertSpeed, ConvertTemp } from './ConvertUnits';
import { useTranslation } from 'react-i18next';
import { WeatherInfoContainerStyled } from '../../styles/components/Weather';
import WeatherLastUpdate from './WeatherLastUpdate';
import { Container } from '../../styles/layout';

const WeatherInfo = () => {
	const { data } = useDataWeather() as DataWeatherContextType;
	const { t } = useTranslation();

	return (
		<section className="weather_info">
			<Container>
				<WeatherInfoBox title={t('feels_like')} icon={faThermometerHalf}>
					<ConvertTemp temp={data.main.feels_like} degrees={true} />
				</WeatherInfoBox>

				<WeatherInfoContainerStyled>
					<WeatherInfoBox title={t('pressure')} icon={faLevelDownAlt}>
						{data.main.pressure} hPa
					</WeatherInfoBox>

					<WeatherInfoBox title={t('wind')} icon={faLongArrowAltUp} rotate={data.wind.deg}>
						<ConvertSpeed speed={data.wind.speed} />
					</WeatherInfoBox>

					<WeatherInfoBox title={t('cloudiness')} icon={faCloud}>
						{data.clouds.all}%
					</WeatherInfoBox>

					<WeatherInfoBox title={t('humidity')} icon={faTint}>
						{data.main.humidity}%
					</WeatherInfoBox>
				</WeatherInfoContainerStyled>

				<WeatherLastUpdate />
			</Container>
		</section>
	);
};

export default WeatherInfo;
