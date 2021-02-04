import { FC } from 'react';
import { ButtonType } from '../types/componentsTypes';
import { ButtonLinkStyle } from '../styles/components/ButtonStyles';

const ButtonLink: FC<ButtonType> = ({ children, href, target, rel }) => (
  <ButtonLinkStyle href={href} target={target} rel={rel}>
    {children}
  </ButtonLinkStyle>
);

export default ButtonLink;
