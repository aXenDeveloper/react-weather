import styled from 'styled-components';

export const WeatherInfoBoxStyled = styled.div`
	background-color: #fff;
	border-radius: var(--border-radius);
	padding: 1.5rem;
	display: flex;
	align-items: center;

	h3 {
		margin: 0;
	}

	p {
		margin: 0;
		font-size: 1.6rem;
	}
`;

export const WeatherInfoBoxSVG = styled.div(
	({ direction }: { direction?: number }) => `
		width: 5rem;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 3rem;
		color: var(--theme-background);
		margin-right: 1rem;

		${
			direction &&
			`
				svg {
					transform: rotate(${direction}deg);
				}
			`
		}
	`
);

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
