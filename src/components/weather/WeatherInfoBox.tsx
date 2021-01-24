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

	h3 {
		margin: 0;
		font-size: 2rem;
	}

	p {
		margin: 0;
		font-size: 1.6rem;
	}
`;

const WeatherInfoBoxSVG = styled.div(
	({ direction }: { direction?: number }) => `
		width: 5rem;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 3rem;
		color: var(--theme-background);
		margin-right: 1rem;

		${
			direction &&
			`
				svg {
					transform: rotate(${direction}deg);
				}
			`
		}
	`
);

type WeatherInfoBoxType = {
	title(t: string): string;
	icon: IconDefinition;
	rotate?: number;
};

const WeatherInfoBox: FC<WeatherInfoBoxType> = ({ children, title, icon, rotate }) => (
	<WeatherInfoBoxStyled>
		<WeatherInfoBoxSVG direction={rotate}>
			<FontAwesomeIcon icon={icon} />
		</WeatherInfoBoxSVG>

		<div>
			<h3>{title}</h3>
			<p>{children}</p>
		</div>
	</WeatherInfoBoxStyled>
);

export default WeatherInfoBox;
