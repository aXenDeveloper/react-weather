import styled from 'styled-components';

export const TornadoStyle = styled.svg`
  width: 100%;
  height: 240px;
  position: absolute;
  bottom: -120px;
  left: 0;
  z-index: 11;

  path {
    fill: #ddd;
    animation: translateTornado1 10s ease-in-out infinite;

    &:nth-child(2) {
      animation-name: translateTornado2;
    }
    &:nth-child(3) {
      animation-name: translateTornado3;
    }
    &:nth-child(4) {
      animation-name: translateTornado4;
    }
    &:nth-child(5) {
      animation-name: translateTornado5;
    }
    &:nth-child(6) {
      animation-name: translateTornado6;
    }
  }

  @keyframes translateTornado1 {
    0% {
      transform: translateY(0);
    }
    25% {
      transform: translateX(1.142rem);
    }
    75% {
      transform: translateX(-1.142rem);
    }
    100% {
      transform: translateX(0);
    }
  }

  @keyframes translateTornado2 {
    0% {
      transform: translateY(0);
    }
    25% {
      transform: translateX(1.742rem);
    }
    75% {
      transform: translateX(-1.742rem);
    }
    100% {
      transform: translateX(0);
    }
  }

  @keyframes translateTornado3 {
    0% {
      transform: translateY(0);
    }
    25% {
      transform: translateX(2.286rem);
    }
    75% {
      transform: translateX(-2.286rem);
    }
    100% {
      transform: translateX(0);
    }
  }

  @keyframes translateTornado4 {
    0% {
      transform: translateY(0);
    }
    25% {
      transform: translateX(2.714rem);
    }
    75% {
      transform: translateX(-2.714rem);
    }
    100% {
      transform: translateX(0);
    }
  }

  @keyframes translateTornado5 {
    0% {
      transform: translateY(0);
    }
    25% {
      transform: translateX(3.358rem);
    }
    75% {
      transform: translateX(-3.358rem);
    }
    100% {
      transform: translateX(0);
    }
  }
`;
