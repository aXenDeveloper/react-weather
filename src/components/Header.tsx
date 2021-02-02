import SearchForm from './SearchForm';
import { HeaderStyle, ContainerHeader } from '../styles/components/HeaderStyles';
import ActionBar from './ActionBar';

const Header = () => (
	<HeaderStyle>
		<ContainerHeader>
			<SearchForm />

			<ActionBar />
		</ContainerHeader>
	</HeaderStyle>
);

export default Header;
