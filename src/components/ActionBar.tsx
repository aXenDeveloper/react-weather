import GeoLocationButton from './GeoLocationButton';
import ChangeLang from './ChangeLang';
import { ActionBarStyle } from '../styles/components/ActionBarStyles';

const ActionBar = () => (
	<ActionBarStyle>
		<GeoLocationButton />
		<ChangeLang />
	</ActionBarStyle>
);

export default ActionBar;
