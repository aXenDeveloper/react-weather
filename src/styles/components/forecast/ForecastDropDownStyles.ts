import styled from 'styled-components';

export const ForecastDropDownStyle = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(19rem, 1fr));
`;

export const ForecastDropDownItemStyle = styled.li`
  margin: 1rem;
  display: flex;
  align-items: center;
  font-size: 1.6rem;

  h2 {
    font-size: inherit;
    margin: 0;
  }

  p {
    margin: 0;
  }
`;

export const ForecastDropDownItemSVGStyle = styled.div(
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
