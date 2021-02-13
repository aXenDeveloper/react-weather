import styled from 'styled-components';

export const ForecastListItemStyle = styled.li`
  background-color: var(--theme-block);
  border-radius: var(--border-radius);
  display: flex;
  align-items: center;
  height: 50px;
`;

export const ForecastListStyle = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;

  > li:not(:last-child) {
    margin-bottom: 1rem;
  }
`;

export const ForecastDate = styled.div`
  font-weight: bold;
  margin-right: auto;
  padding: var(--padding);
`;

export const ForecastTemp = styled.div`
  margin-right: 1rem;
`;

export const ForecastButton = styled.button`
  background-color: transparent;
  border: 0;
  padding: 0;
  margin: 0;
  cursor: pointer;
  width: 50px;
  height: 100%;
  font-size: 2rem;
`;

export const ForecastImg = styled.img`
  width: 50px;
  height: 100%;
`;
