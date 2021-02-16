import { useTranslation } from 'react-i18next';
import { FlagsStyle } from '../styles/components/FlagsStyles';
import { FC } from 'react';
import { FlagsType } from '../types/componentsTypes';

const Flags: FC<FlagsType> = ({ country }) => {
  const { t } = useTranslation();

  return (
    <FlagsStyle
      src={`https://flagcdn.com/w40/${country.toLowerCase()}.png`}
      srcSet={`https://flagcdn.com/w80/${country.toLowerCase()}.png 2x`}
      alt={`${t('flag')} ${country}`}
    />
  );
};

export default Flags;
