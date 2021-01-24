import SearchForm from './SearchForm';
import ChangeLang from './ChangeLang';
import { HeaderStyle } from '../styles/components/HeaderStyle';

const Header = () => (
	<HeaderStyle>
		<div className="container flex flex-ai:center flex-jc:center">
			<SearchForm />

			<div>
				<ChangeLang />
			</div>
		</div>
	</HeaderStyle>
);

export default Header;
