import { useGeoLocation } from '../context/useGeoLocation';
import { GeoLocationContextType } from '../types/contextTypes';
import WeatherView from './WeatherView';
import { Container } from '../styles/layout';
import ButtonLink from '../components/ButtonLink';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { useTranslation } from 'react-i18next';
import { HomeViewStyle, HomeViewButtonsStyle } from '../styles/HomeViewStyles';

const HomeView = () => {
	const { geoLocation } = useGeoLocation() as GeoLocationContextType;
	const { t } = useTranslation();

	if (geoLocation.status) return <WeatherView geoLocation={geoLocation} />;

	return (
		<Container>
			<HomeViewStyle>
				<h1>{t('title_app')}</h1>
				<p>{t('desc_app')}</p>

				<HomeViewButtonsStyle>
					<ButtonLink href="https://github.com/aXenDeveloper/react-weather" target="_blank">
						<FontAwesomeIcon icon={faGithub} /> {t('button_github')}
					</ButtonLink>
				</HomeViewButtonsStyle>
			</HomeViewStyle>
		</Container>
	);
};

export default HomeView;
