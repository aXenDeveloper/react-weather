import styled from 'styled-components';

export const WeatherIconStyle = styled.div`
  animation: weather-up 1s ease-out;

  @keyframes weather-up {
    from {
      opacity: 0;
      transform: translateY(40px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const WeatherSVGStyle = styled.div`
  transform: scale(0.9);
  height: 300px;

  &_cloud {
    position: relative;

    &\:left {
      position: absolute;
      transform: translateX(-235px) scale(0.5);
    }

    &\:right {
      position: absolute;
      transform: translateX(235px) scale(0.5);
      left: 0;
      top: 0;
    }
  }
`;
