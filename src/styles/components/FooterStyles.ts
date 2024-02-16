import styled from "styled-components";
import { Container } from "../global";

export const FooterStyle = styled.footer``;

export const FooterSVGStyle = styled.svg`
  display: block;
  width: 100%;
  height: 130px;
  transform: rotate(180deg);
  margin-bottom: -0.5rem;

  @media screen and (max-width: 768px) {
    height: 40px;
  }

  path {
    fill: #fff;
  }
`;

export const FooterBackground = styled.div`
  background-color: #fff;
`;

export const ContainerFooter = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 1.5rem;

  @media screen and (max-width: 768px) {
    justify-content: center;
    flex-direction: column;
  }

  a {
    font-weight: bold;
  }
`;
