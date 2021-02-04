import styled from 'styled-components';

export const GeoLocationButtonStyle = styled.button`
  background-color: transparent;
  color: #fff;
  border: 0;
  font-size: 2rem;
  width: 48px;
  height: 42px;
  border-radius: var(--border-radius);
  cursor: pointer;

  &:hover {
    background-color: var(--button-hover);
  }
`;
