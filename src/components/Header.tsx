import SearchForm from './SearchForm';
import ChangeLang from './ChangeLang';
import { HeaderStyle, ContainerHeader } from '../styles/components/HeaderStyles';
import GeoLocationButton from './GeoLocationButton';

const Header = () => (
	<HeaderStyle>
		<ContainerHeader>
			<SearchForm />
			<GeoLocationButton />
			<ChangeLang />
		</ContainerHeader>
	</HeaderStyle>
);

export default Header;
