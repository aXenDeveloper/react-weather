import { useTranslation } from 'react-i18next';
import { useDataWeather } from '../context/useDataWeather';
import { DataWeatherContextType } from '../types/contextTypes';
import { FlagsStyle } from '../styles/components/FlagsStyles';

const Flags = () => {
  const { weatherDataCurrent } = useDataWeather() as DataWeatherContextType;
  const { t } = useTranslation();

  return (
    <FlagsStyle
      src={`https://flagcdn.com/w40/${weatherDataCurrent.sys.country.toLowerCase()}.png`}
      srcSet={`https://flagcdn.com/w80/${weatherDataCurrent.sys.country.toLowerCase()}.png 2x`}
      alt={`${t('flag')} ${weatherDataCurrent.sys.country}`}
    />
  );
};

export default Flags;
