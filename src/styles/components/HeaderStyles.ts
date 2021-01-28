import styled from 'styled-components';
import { Container } from '../layout';

export const HeaderStyle = styled.header`
	padding: 2rem 0;
`;

export const ContainerHeader = styled(Container)`
	display: flex;
	align-items: center;
	justify-content: center;

	@media screen and (max-width: 767px) {
		flex-direction: column;
	}
`;
