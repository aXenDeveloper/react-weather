import { FC } from 'react';

type WeatherInfoType = {
	city: string;
};

const WeatherInfo: FC<WeatherInfoType> = ({ city }) => (
	<div className="weather_info">
		<h1>{city}</h1>
	</div>
);

export default WeatherInfo;
