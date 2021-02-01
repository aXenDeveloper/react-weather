import { FC } from 'react';
import { ButtonType } from '../types/componentsTypes';
import { ButtonLinkStyle } from '../styles/components/ButtonStyles';

const ButtonLink: FC<ButtonType> = ({ children, href, target }) => (
	<ButtonLinkStyle href={href} target={target}>
		{children}
	</ButtonLinkStyle>
);

export default ButtonLink;
