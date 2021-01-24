import styled from 'styled-components';

export const FogStyle = styled.svg`
	width: 100%;
	position: absolute;
	top: 0;
	left: 0;
	z-index: 11;

	g {
		animation: fog 10s ease-in-out infinite;

		&:nth-child(1) {
			animation-duration: 10.1357s;
		}
		&:nth-child(2) {
			animation-duration: 11.1429s;
		}
		&:nth-child(3) {
			animation-duration: 12.1143s;
		}
		&:nth-child(4) {
			animation-duration: 13.0871s;
		}
	}

	path {
		fill: #92aeba;
	}
`;
