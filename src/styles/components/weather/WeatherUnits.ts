import styled, { css } from 'styled-components';

export const WeatherUnitsStyle = styled.div`
  display: flex;
  font-size: 3rem;

  ${({ column }: { column?: boolean }) =>
    column &&
    css`
      flex-direction: column;
      justify-content: space-between;
    `}

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
      background-color: var(--button-hover);

      &:not(:checked) span {
        color: #fff;
      }
    }
  }
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
  color: #b4ceff;
  cursor: pointer;
  border-radius: var(--border-radius);

  &.active {
    color: #fff;
  }

  &:hover {
    background-color: var(--button-hover);
  }
`;
