import styled from 'styled-components';
import { Container } from '../global';

export const ContainerWeather = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const WeatherLastUpdateStyle = styled.div`
  text-align: right;
  color: #fff;
  margin: 1rem 0;
  font-style: italic;

  span {
    font-weight: bold;
  }
`;

export const WeatherStyle = styled.section`
  color: var(--theme-section-weather-text);
  padding: 3rem 0;
  min-height: 50rem;
  overflow: hidden;

  & ::selection {
    background-color: #fff;
    color: #000;
  }
`;

export const WeatherTitleStyle = styled.h1`
  font-size: 4rem;
  margin: 0;
  flex: 100%;
  text-align: center;
  line-height: 1;
`;
