import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useQuery } from 'react-query';
import { useLocation } from 'react-router-dom';
import { DataWeatherContext } from '../context/useDataWeather';
import { useGlobal } from '../context/useGlobal';
import { WeatherViewType } from '../types/viewTypes';
import { GlobalContextType } from '../types/contextTypes';
import Loading from '../components/Loading';
import Error from '../components/Error';
import WeatherInfo from '../components/weather/WeatherInfo';
import WeatherMain from '../components/weather/WeatherMain';

const WeatherView: FC<WeatherViewType> = ({ geoLocation }) => {
  const { pathname } = useLocation();
  const city = pathname.substr(1);
  const { lang, getUnits } = useGlobal() as GlobalContextType;
  const key = process.env.REACT_APP_KEY_API_WEATHER || '';
  const { t } = useTranslation();

  const setTitlePage = (name: string) => {
    document.title = `${name || `${t('error_code')}: 404`} - ${process.env.REACT_APP_TITLE_WEBSITE}`;
  };

  const api = async (city: string, key: string, lang: string, getUnits: string) => {
    if (geoLocation) {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${geoLocation.lat}&lon=${geoLocation.lon}&units=${getUnits}&appid=${key}&lang=${lang}`
      );

      const data = await res.json();
      setTitlePage(data.name);

      return data;
    } else {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${getUnits}&appid=${key}&lang=${lang}`
      );
      const data = await res.json();
      setTitlePage(data.name);

      return data;
    }
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
  if (isError || parseInt(data.cod) === 401) return <Error code={500}>{t('error_500_weather')}</Error>;
  if (parseInt(data.cod) === 404) return <Error code={404}>{t('error_404_weather')}</Error>;

  const weatherDataCurrent = data;

  return (
    <DataWeatherContext.Provider value={{ weatherDataCurrent }}>
      <WeatherMain />
      <WeatherInfo />
    </DataWeatherContext.Provider>
  );
};

export default WeatherView;
