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
				color: #000;
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
