import styled from 'styled-components';

export const ErrorStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: var(--padding);
  border-radius: var(--border-radius);
  text-align: center;
  color: #fff;
  min-height: calc(100vh - 82px - 186px);

  @media screen and (max-width: 768px) {
    min-height: calc(100vh - 82px - 117px);
  }
`;

export const ErrorIcon = styled.div`
  margin-bottom: 2rem;

  svg {
    font-size: 10rem;
  }
`;

export const ErrorContent = styled.span`
  display: inline-block;
  font-size: 2.4rem;
  font-weight: bold;
  max-width: 80rem;
`;

export const ErrorTitle = styled.p`
  font-size: 1.6rem;
  color: var(--theme-color-dark);
  margin: 0;
`;

export const ErrorCode = styled.p`
  font-style: italic;

  span {
    font-weight: bold;
  }
`;
