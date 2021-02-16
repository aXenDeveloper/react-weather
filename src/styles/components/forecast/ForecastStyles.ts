import styled, { css } from 'styled-components';

export const ForecastItemStyle = styled.li`
  background-color: var(--theme-block);
  border-radius: var(--border-radius);
  padding: 1rem var(--padding);
`;

export const ForecastItemMainStyle = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
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
  flex: 0 90px;
`;

export const ForecastTemp = styled.div`
  font-size: 2rem;
  font-weight: bold;
  flex: 0 100px;
  margin: 0 1rem;
  text-align: center;
`;

export const ForecastButton = styled.button`
  background-color: transparent;
  border: 0;
  padding: 0;
  margin: 0;
  width: 50px;
  height: 50px;
  font-size: 2rem;
  cursor: pointer;

  svg {
    transition: 0.1s transform ease-in-out;

    ${({ isOpen }: { isOpen: boolean }) =>
      isOpen &&
      css`
        transform: rotate(-180deg);
      `};
  }
`;

export const ForecastDesc = styled.div`
  line-height: 0;
  flex: 1;
  display: flex;
  align-items: center;

  span {
    &::first-letter {
      text-transform: uppercase;
    }

    @media screen and (max-width: 600px) {
      display: none;
    }
  }

  img {
    width: 50px;
    height: 50px;
    object-fit: contain;

    @media screen and (min-width: 769px) {
      margin-right: 1rem;
    }
  }
`;
