import { useLocation } from 'react-router-dom';
import { useQuery } from 'react-query';
import { useGlobal } from '../context/useGlobal';
import { useTranslation } from 'react-i18next';
import { GlobalContextType } from '../types/contextTypes';
import { Container } from '../styles/global';
import Loading from '../components/Loading';
import Error from '../components/Error';
import ForecastList from '../components/forecast/ForecastList';

const ForecastView = () => {
  const { pathname } = useLocation();
  const city = pathname.split('/')[1];
  const key = process.env.REACT_APP_KEY_API_WEATHER || '';
  const { lang, getUnits } = useGlobal() as GlobalContextType;
  const { t } = useTranslation();

  const api = async (city: string, key: string, lang: string, units: string) => {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=${units}&appid=${key}&lang=${lang}`
    );
    const data = await res.json();
    console.log(data);

    return data;
  };

  const { isLoading, data, isError } = useQuery(
    ['weatherForecast', city, key, lang, getUnits],
    () => api(city, key, lang, getUnits),
    {
      cacheTime: 0,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false
    }
  );

  if (isLoading) return <Loading />;
  if (isError || parseInt(data.cod) === 401) return <Error code={500}>{t('error_500_weather')}</Error>;
  if (parseInt(data.cod) === 404) return <Error code={404}>{t('error_404_weather')}</Error>;

  return (
    <Container>
      <ForecastList list={data.list} />
    </Container>
  );
};

export default ForecastView;
