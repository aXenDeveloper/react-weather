import styled from 'styled-components';

export const WeatherInfoBoxStyled = styled.div`
	background-color: #fff;
	border-radius: var(--border-radius);
	padding: 1.4rem;
	display: flex;
	align-items: center;
	margin: 1rem;

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
		width: 4rem;
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

export const WeatherLastUpdateStyle = styled.div`
	text-align: right;
	color: #fff;
	margin: 1rem 0;
	font-style: italic;

	span {
		font-weight: bold;
	}
`;
