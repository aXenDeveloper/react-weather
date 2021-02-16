import styled from 'styled-components';

export const WeatherInfoStyle = styled.section`
  position: relative;
`;

export const WeatherInfoBoxStyled = styled.div`
  background-color: var(--theme-block);
  border-radius: var(--border-radius);
  padding: 1.4rem;
  display: flex;
  align-items: center;
  margin: 1rem;
  font-size: 1.6rem;

  h2 {
    font-size: inherit;
    margin: 0;
  }

  p {
    margin: 0;
  }
`;

export const WeatherInfoBoxSVG = styled.div(
  ({ direction }: { direction?: number }) => `
		width: 4rem;
		text-align: center;
		font-size: 3rem;
		color: var(--theme-background);
		margin-right: 1rem;

		${
      direction
        ? `
				svg {
					transform: rotate(${direction}deg);
				}
			`
        : ''
    }
	`
);

export const WeatherInfoContainerStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(19rem, 1fr));
`;
