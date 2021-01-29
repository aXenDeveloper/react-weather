import { useTranslation } from 'react-i18next';
import { useDataWeather } from '../context/useDataWeather';
import { FlagsStyle } from '../styles/components/Weather';
import { DataWeatherContextType } from '../types/contextTypes';

const Flags = () => {
	const { data } = useDataWeather() as DataWeatherContextType;
	const { t } = useTranslation();

	return (
		<FlagsStyle
			src={`https://flagcdn.com/w40/${data.sys.country.toLowerCase()}.png`}
			srcSet={`https://flagcdn.com/w80/${data.sys.country.toLowerCase()}.png 2x`}
			alt={`${t('flag')} ${data.sys.country}`}
		/>
	);
};

export default Flags;
