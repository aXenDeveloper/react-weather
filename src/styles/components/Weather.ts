import styled from 'styled-components';
import { Container } from '../layout';

export const ContainerWeather = styled(Container)`
	display: flex;
	align-items: center;
	justify-content: space-between;
	flex-wrap: wrap;

	@media screen and (max-width: 768px) {
		flex-direction: column;
	}
`;

export const WeatherInfoContainerStyled = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(19rem, 1fr));
`;

export const WeatherUnitsInputStyle = styled.div`
	display: flex;
	flex-direction: column;
	font-size: 3rem;
	justify-content: space-between;

	label {
		margin-left: 1rem;
		cursor: pointer;
		padding: 1rem;
		text-align: center;
		border-radius: 1rem;

		input {
			display: none;

			&:not(:checked) + span {
				color: #b4ceff;
			}
		}

		&:hover {
			background-color: rgba(0, 0, 0, 0.15);

			&:not(:checked) span {
				color: #fff;
			}
		}
	}
`;

export const FlagsStyle = styled.img`
	width: 40px;
`;

export const WeatherDegreesButton = styled.button`
	margin-left: 1rem;
	background-color: transparent;
	font-family: inherit;
	border: 0;
	padding: 1rem;
	font-size: inherit;
	font-weight: bold;
	line-height: 1;
	color: #fff;
	cursor: pointer;
	border-radius: var(--border-radius);

	&[aria-checked='false'] {
		color: #b4ceff;
	}

	&:hover {
		background-color: rgba(0, 0, 0, 0.15);
	}
`;
