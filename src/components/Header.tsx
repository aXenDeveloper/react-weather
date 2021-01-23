import styled from 'styled-components';
import SearchForm from './SearchForm';
import ChangeLang from './ChangeLang';

const HeaderStyle = styled.header`
	padding: 2rem 0;
`;

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
