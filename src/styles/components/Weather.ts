import styled from 'styled-components';
import { Container } from '../layout';

export const ContainerWeather = styled(Container)`
	display: flex;
	align-items: center;
	justify-content: space-between;
	flex-wrap: wrap;
`;

export const WeatherInfoContainerStyled = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(16.8rem, 1fr));
	grid-gap: 1rem;
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
				opacity: 0.5;
			}
		}

		&:hover {
			background-color: rgba(0, 0, 0, 0.15);
		}
	}
`;

export const FlagsStyle = styled.img`
	width: 40px;
`;
