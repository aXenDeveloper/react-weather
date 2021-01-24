import { FC } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

const WeatherInfoBoxStyled = styled.div`
	background-color: #fff;
	border-radius: var(--border-radius);
	padding: 1.5rem;
	display: flex;
	align-items: center;

	svg {
		font-size: 3rem;
		color: var(--theme-background);
		margin-right: 1rem;
	}

	h3 {
		margin: 0;
	}

	p {
		margin: 0;
	}
`;

type WeatherInfoBoxType = {
	title(t: string): string;
	icon: IconDefinition;
};

const WeatherInfoBox: FC<WeatherInfoBoxType> = ({ children, title, icon }) => (
	<WeatherInfoBoxStyled>
		<FontAwesomeIcon icon={icon} />

		<div>
			<h3>{title}</h3>
			<p>{children}</p>
		</div>
	</WeatherInfoBoxStyled>
);

export default WeatherInfoBox;
