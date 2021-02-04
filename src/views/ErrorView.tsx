import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Error from '../components/Error';

const ErrorView = () => {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = `${t('error_code')}: 404 - ${process.env.REACT_APP_TITLE_WEBSITE}`;
  }, [t]);

  return <Error code={404}>{t('weather_404')}</Error>;
};

export default ErrorView;
