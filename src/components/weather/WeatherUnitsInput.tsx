import styled from 'styled-components';
import { DataWeatherContextType, useDataWeather } from '../../context/useDataWeather';

const WeatherUnitsInputStyle = styled.div`
	display: flex;
	flex-direction: column;
	font-size: 3rem;
	justify-content: space-between;

	label {
		margin-left: 1rem;
		cursor: pointer;
		padding: 1rem;

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

const WeatherUnitsInput = () => {
	const { getUnits, setUnits } = useDataWeather() as DataWeatherContextType;

	return (
		<WeatherUnitsInputStyle>
			<label>
				<input
					type="radio"
					name="weather_units"
					onChange={() => setUnits('metric')}
					checked={getUnits === 'metric'}
				/>
				<span>C</span>
			</label>

			<label>
				<input
					type="radio"
					name="weather_units"
					checked={getUnits === 'imperial'}
					onChange={() => setUnits('imperial')}
				/>
				<span>F</span>
			</label>
		</WeatherUnitsInputStyle>
	);
};

export default WeatherUnitsInput;
