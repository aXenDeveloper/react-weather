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
`;
