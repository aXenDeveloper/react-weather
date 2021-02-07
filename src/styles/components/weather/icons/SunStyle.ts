import styled from 'styled-components';

export const SunStyle = styled.svg`
  width: 290px;
  animation: sunRotate 10s linear infinite;

  g {
    fill: #fdd020;
  }

  @keyframes sunRotate {
    to {
      transform: rotate(360deg);
    }
  }
`;
