import styled from 'styled-components';

export const TornadoStyle = styled.svg`
	width: 100%;
	height: 240px;
	position: absolute;
	bottom: -120px;
	left: 0;
	z-index: 11;

	path {
		fill: #ddd;
		animation: translateTornado1 10s ease-in-out infinite;

		&:nth-child(2) {
			animation-name: translateTornado2;
		}
		&:nth-child(3) {
			animation-name: translateTornado3;
		}
		&:nth-child(4) {
			animation-name: translateTornado4;
		}
		&:nth-child(5) {
			animation-name: translateTornado5;
		}
		&:nth-child(6) {
			animation-name: translateTornado6;
		}
	}
`;
