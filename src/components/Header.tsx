import SearchForm from './SearchForm';
import ChangeLang from './ChangeLang';
import { HeaderStyle, ContainerHeader } from '../styles/components/HeaderStyles';
import GeoLocationButton from './GeoLocationButton';
import DropDownMenu from './DropDownMenu';

const Header = () => (
	<HeaderStyle>
		<ContainerHeader>
			<SearchForm />
			<GeoLocationButton />
			<ChangeLang />
			<DropDownMenu />
		</ContainerHeader>
	</HeaderStyle>
);

export default Header;
