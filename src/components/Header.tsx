import styled from 'styled-components';
import Form from './Form';
import ChangeLang from './ChangeLang';

const HeaderStyle = styled.header`
	padding: 2rem 0;
`;

const Header = () => (
	<HeaderStyle>
		<div className="container flex flex-ai:center flex-jc:center">
			<Form />

			<div>
				<ChangeLang />
			</div>
		</div>
	</HeaderStyle>
);

export default Header;
