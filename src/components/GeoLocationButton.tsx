import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { useGeoLocation } from '../context/useGeoLocation';
import { GeoLocationContextType } from '../types/contextTypes';
import { GeoLocationButtonStyle } from '../styles/components/GeoLocationButtonStyles';

const GeoLocationButton = () => {
  const { setGeoLocation } = useGeoLocation() as GeoLocationContextType;
  const { t } = useTranslation();
  const history = useHistory();

  const onSuccess = (location: { coords: { latitude: number; longitude: number } }) => {
    setGeoLocation({
      status: true,
      lat: location.coords.latitude,
      lon: location.coords.longitude
    });

    history.push('/');
  };

  const onError = () => {
    console.error('Access Denied!');
  };

  const handleButton = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(onSuccess, onError);
    } else {
      console.error('Geolocation is not supported by this device');
    }
  };

  return (
    <GeoLocationButtonStyle onClick={handleButton} title={t('geolocation_button')} aria-label={t('geolocation_button')}>
      <FontAwesomeIcon icon={faMapMarkerAlt} />
    </GeoLocationButtonStyle>
  );
};

export default GeoLocationButton;
