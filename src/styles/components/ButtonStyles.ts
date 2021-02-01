import styled from 'styled-components';

export const ButtonLinkStyle = styled.a`
	display: inline-block;
	font-family: inherit;
	background-color: #112f67;
	border: 0;
	border-radius: var(--border-radius);
	padding: 12px 16px;
	color: #fff;
	font-size: 1.5rem;
	font-weight: bold;
	cursor: pointer;

	&:hover {
		background-color: #1b4086;
		color: inherit;
	}

	svg {
		font-size: initial;
	}
`;
