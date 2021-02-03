import { HeaderStyle, ContainerHeader } from '../styles/components/HeaderStyles';
import ActionBar from './ActionBar';
import SearchForm from './SearchForm';

const Header = () => (
	<HeaderStyle>
		<ContainerHeader>
			<SearchForm />

			<ActionBar />
		</ContainerHeader>
	</HeaderStyle>
);

export default Header;
