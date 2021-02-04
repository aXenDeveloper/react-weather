import { ActionBarStyle } from '../styles/components/ActionBarStyles';
import GeoLocationButton from './GeoLocationButton';
import ChangeLang from './ChangeLang';

const ActionBar = () => (
  <ActionBarStyle>
    <GeoLocationButton />
    <ChangeLang />
  </ActionBarStyle>
);

export default ActionBar;
