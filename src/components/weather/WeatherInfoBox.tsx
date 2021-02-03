import { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { WeatherInfoBoxType } from '../../types/weatherTypes';
import { WeatherInfoBoxSVG, WeatherInfoBoxStyled } from '../../styles/components/WeatherInfoStyles';

const WeatherInfoBox: FC<WeatherInfoBoxType> = ({ children, title, icon, rotate }) => (
	<WeatherInfoBoxStyled>
		<WeatherInfoBoxSVG direction={rotate}>
			<FontAwesomeIcon icon={icon} />
		</WeatherInfoBoxSVG>

		<div>
			<h2>{title}</h2>
			<p>{children}</p>
		</div>
	</WeatherInfoBoxStyled>
);

export default WeatherInfoBox;
