import styled from 'styled-components';
import { Container } from '../layout';

export const FooterStyle = styled.footer``;

export const FooterSVGStyle = styled.svg`
	display: block;
	width: 100%;
	height: 130px;
	transform: rotate(180deg);
	margin-bottom: -0.5rem;

	@media screen and (max-width: 767px) {
		height: 40px;
	}

	path {
		fill: #fff;
	}
`;

export const FooterBackground = styled.div`
	background-color: #fff;
`;

export const ContainerFooter = styled(Container)`
	display: flex;
	align-items: center;
	justify-content: space-between;

	@media screen and (max-width: 767px) {
		justify-content: center;
		flex-direction: column;
	}
	padding: 2rem 1.5rem;

	a {
		font-weight: bold;
	}
`;
