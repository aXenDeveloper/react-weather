import SearchForm from './SearchForm';
import ChangeLang from './ChangeLang';
import { HeaderStyle, ContainerHeader } from '../styles/components/HeaderStyles';

const Header = () => (
	<HeaderStyle>
		<ContainerHeader>
			<SearchForm />
			<ChangeLang />
		</ContainerHeader>
	</HeaderStyle>
);

export default Header;
