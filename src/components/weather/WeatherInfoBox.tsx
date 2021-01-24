import { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { WeatherInfoBoxSVG, WeatherInfoBoxStyled } from '../../styles/components/Weather';
import { WeatherInfoBoxType } from '../../types/weatherTypes';

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
