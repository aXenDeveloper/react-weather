import styled from 'styled-components';

export const ForecastTitleStyle = styled.div`
  text-align: center;
  color: #fff;
  margin: 2rem 0;

  h1 {
    font-size: 4rem;
    margin: 0;
    line-height: 1;
  }
`;

export const ForecastOptionsStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;
`;

export const ForecastButtonBackStyle = styled.div`
  background-color: var(--theme-block);
  border-radius: var(--border-radius);
  padding: 1.5rem 2rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1;

  svg {
    margin-right: 1rem;
  }
`;
