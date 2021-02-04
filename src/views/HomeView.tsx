import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { useGeoLocation } from '../context/useGeoLocation';
import { GeoLocationContextType } from '../types/contextTypes';
import { Container } from '../styles/global';
import { HomeViewStyle, HomeViewButtonsStyle } from '../styles/views/HomeViewStyles';
import WeatherView from './WeatherView';
import ButtonLink from '../components/ButtonLink';

const HomeView = () => {
  const { geoLocation } = useGeoLocation() as GeoLocationContextType;
  const { t } = useTranslation();

  useEffect(() => {
    document.title = process.env.REACT_APP_TITLE_WEBSITE || '';
  }, []);

  if (geoLocation.status) return <WeatherView geoLocation={geoLocation} />;

  return (
    <Container>
      <HomeViewStyle>
        <h1>{t('title_app')}</h1>
        <p>{t('desc_app')}</p>

        <HomeViewButtonsStyle>
          <ButtonLink href="https://github.com/aXenDeveloper/react-weather" target="_blank" rel="noopener nofollow">
            <FontAwesomeIcon icon={faGithub} /> {t('button_github')}
          </ButtonLink>
        </HomeViewButtonsStyle>
      </HomeViewStyle>
    </Container>
  );
};

export default HomeView;
