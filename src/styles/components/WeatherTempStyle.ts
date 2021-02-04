import styled from 'styled-components';

export const WeatherTempStyle = styled.div`
  margin-left: 10rem;
  text-align: center;

  @media screen and (max-width: 768px) {
    margin-left: 0;
  }
`;

export const WeatherTempMainStyle = styled.div`
  display: flex;
  align-items: center;
  line-height: 1;
  font-size: 8rem;
  font-weight: bold;
  justify-content: center;
`;

export const WeatherTempMinMaxStyle = styled.div`
  font-size: 1.8rem;
  font-style: italic;
`;

export const WeatherDescStyle = styled.div`
  font-size: 1.8rem;

  &::first-letter {
    text-transform: uppercase;
  }
`;
