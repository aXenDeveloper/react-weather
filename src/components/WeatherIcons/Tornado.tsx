import styled from 'styled-components';

const TornadoStyle = styled.svg`
	width: 100%;
	height: 240px;
	position: absolute;
	bottom: -120px;
	left: 0;
	z-index: 11;

	path {
		fill: #ddd;
		/*animation-name: translateTornado1;
		animation-iteration-count: infinite;
		animation-direction: alternate;
		animation-timing-function: ease-in-out;
		animation-duration: 12s; */
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

const Tornado = () => (
	<TornadoStyle xmlns="http://www.w3.org/2000/svg" viewBox="15 15 70 70">
		<path d="M68.997,36.459H31.002c-1.104,0-2-0.896-2-1.999c0-1.104,0.896-2,2-2h37.995c1.104,0,2,0.896,2,2C70.997,35.563,70.102,36.459,68.997,36.459z" />
		<path d="M35.002,40.459h29.996c1.104,0,2,0.896,2,2s-0.896,1.999-2,1.999H35.002c-1.104,0-2-0.896-2-1.999C33.002,41.354,33.898,40.459,35.002,40.459z" />
		<path d="M39.001,48.458h21.998c1.104,0,1.999,0.896,1.999,1.999c0,1.104-0.896,2-1.999,2H39.001c-1.104,0-1.999-0.896-1.999-2C37.002,49.354,37.897,48.458,39.001,48.458z" />
		<path d="M40.869,58.456c0-1.104,0.896-1.999,2-1.999h13.998c1.104,0,2,0.896,2,1.999c0,1.104-0.896,2-2,2H42.869C41.765,60.456,40.869,59.561,40.869,58.456z" />
		<path d="M47,64.456h5.999c1.104,0,2,0.896,2,1.999s-0.896,2-2,2H47c-1.104,0-2-0.896-2-2S45.896,64.456,47,64.456z" />
	</TornadoStyle>
);

export default Tornado;
