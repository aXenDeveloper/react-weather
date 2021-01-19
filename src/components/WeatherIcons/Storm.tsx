import styled from 'styled-components';

const Storm = () => {
	const StormSVG = styled.svg`
		width: 155px;
		height: 160px;
		position: absolute;
		bottom: -85px;
		right: 122px;
		z-index: 11;
		animation: thunderAnimation 2.5s linear infinite;

		path {
			fill: #ffa754;
		}
	`;

	return (
		<StormSVG viewBox="-48 0 448 448" xmlns="http://www.w3.org/2000/svg">
			<path d="m256 0h-160l-96 224h160l-64 224 256-320h-160zm0 0" />
		</StormSVG>
	);
};

export default Storm;
