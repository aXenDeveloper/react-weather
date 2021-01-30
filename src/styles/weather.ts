import styled from 'styled-components';

export const WeatherStyle = styled.section`
	background-color: var(--theme-section-weather);
	color: var(--theme-section-weather-text);
	padding: 3rem 0;
	min-height: 50rem;
	overflow: hidden;

	::selection {
		background-color: #fff;
		color: #000;
	}
`;

export const WeatherTitleStyle = styled.h1`
	font-size: 4rem;
	margin: 0;
	flex: 100%;
	text-align: center;
	line-height: 1;
`;

export const WeatherTempStyle = styled.div`
	margin-left: 10rem;
	text-align: center;

	@media screen and (max-width: 768px) {
		margin-left: 0;
	}
`;

export const WeatherTempMainStyle = styled.div`
	display: flex;
	align-items: center;
	line-height: 1;
	font-size: 8rem;
	font-weight: bold;
	justify-content: center;
`;

export const WeatherTempMinMaxStyle = styled.div`
	font-size: 1.8rem;
	font-style: italic;
`;

export const WeatherDescStyle = styled.div`
	font-size: 1.8rem;

	&::first-letter {
		text-transform: uppercase;
	}
`;

export const WeatherIconStyle = styled.div`
	animation: weather-up 1s ease-out;

	@keyframes weather-up {
		from {
			opacity: 0;
			transform: translateY(40px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}
`;

export const WeatherSVGStyle = styled.div`
	transform: scale(0.9);
	height: 300px;

	&_cloud {
		position: relative;

		&\:left {
			position: absolute;
			transform: translateX(-235px) scale(0.5);
		}

		&\:right {
			position: absolute;
			transform: translateX(235px) scale(0.5);
			left: 0;
			top: 0;
		}
	}
`;

export const WeatherInfoStyle = styled.section`
	position: relative;
`;
