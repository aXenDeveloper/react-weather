import styled, { css } from 'styled-components';

export const ConvertDateStyle = styled.div`
  ${({ flex }: { flex?: boolean }) =>
    flex &&
    css`
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
    `};
`;
