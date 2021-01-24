import { FC } from 'react';
import { useDataWeather, DataWeatherContextType } from '../../context/useDataWeather';

type ConvertTempType = {
	temp: number;
	degrees?: boolean;
};

const ConvertTemp: FC<ConvertTempType> = ({ temp, degrees }) => {
	const { getUnits } = useDataWeather() as DataWeatherContextType;

	const roundTemp = Math.round(temp * 10) / 10;
	const getDegreesTemp = `°${getUnits === 'metric' ? 'C' : 'F'}`;

	return (
		<span>
			{roundTemp}
			{degrees && getDegreesTemp}
		</span>
	);
};

export default ConvertTemp;
