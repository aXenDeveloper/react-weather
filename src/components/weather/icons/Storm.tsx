import styled from 'styled-components';

const StormSVG = styled.svg`
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

const Storm = () => (
	<StormSVG viewBox="-48 0 448 448" xmlns="http://www.w3.org/2000/svg">
		<path d="m256 0h-160l-96 224h160l-64 224 256-320h-160zm0 0" />
	</StormSVG>
);

export default Storm;
