import { useLocation } from 'react-router-dom';
import { useQuery } from 'react-query';
import { useGlobal } from '../context/useGlobal';
import { GlobalContextType } from '../types/contextTypes';
import Loading from '../components/Loading';
import Error from '../components/Error';
import { useTranslation } from 'react-i18next';

const WeatherForecastView = () => {
  const { pathname } = useLocation();
  const city = pathname.substr(1).split('/')[0];
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
    ['weatherMain', city, key, lang, getUnits],
    () => api(city, key, lang, getUnits),
    {
      cacheTime: 0,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false
    }
  );

  if (isLoading) return <Loading />;
  if (isError) return <Error code={500}>{t('weather_500')}</Error>;
  if (parseInt(data.cod) === 404) return <Error code={404}>{t('weather_404')}</Error>;

  return <div>forecast</div>;
};

export default WeatherForecastView;
