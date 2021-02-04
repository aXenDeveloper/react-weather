import styled from 'styled-components';

export const HomeViewStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: #fff;
  text-align: center;
  min-height: calc(100vh - 82px - 186px);

  @media screen and (max-width: 768px) {
    min-height: calc(100vh - 82px - 117px);
  }

  h1 {
    font-size: 4rem;
    margin: 1rem 0;
    line-height: 1.2;
  }

  p {
    max-width: 45rem;
    font-size: 1.6rem;
  }
`;

export const HomeViewButtonsStyle = styled.div`
  margin: 1rem 0;
`;
