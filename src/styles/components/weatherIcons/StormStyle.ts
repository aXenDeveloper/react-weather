import styled from 'styled-components';

export const StormStyle = styled.svg`
	width: 100px;
	height: 110px;
	position: absolute;
	bottom: 0;
	left: 60px;
	z-index: 11;
	animation: thunderAnimation 2.5s linear infinite;

	path {
		fill: #ffa754;
	}

	@keyframes thunderAnimation {
		0% {
			opacity: 0;
		}
		5% {
			opacity: 1;
		}
		10% {
			opacity: 0;
		}
		15% {
			opacity: 1;
		}
		100% {
			opacity: 0;
		}
	}
`;
