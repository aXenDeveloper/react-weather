import { FC, Suspense, useState } from 'react';
import { useQuery } from 'react-query';
import { useLocation } from 'react-router-dom';
import { DataWeatherContext } from '../context/useDataWeather';
import { useLang } from '../context/useLang';
import { LangContextType } from '../types/contextTypes';
import { useTranslation } from 'react-i18next';
import Loading from '../components/Loading';
import Error from '../components/Error';
import WeatherInfo from '../components/weather/WeatherInfo';
import WeatherMain from '../components/weather/WeatherMain';
import { WeatherViewType } from '../types/viewTypes';

const WeatherView: FC<WeatherViewType> = ({ geoLocation }) => {
	const { pathname } = useLocation();
	const city = pathname.substr(1);
	const { lang } = useLang() as LangContextType;
	const key = process.env.REACT_APP_KEY_API_WEATHER || '';
	const { t } = useTranslation();

	const [getUnits, setUnits] = useState('metric');

	const api = async (city: string, key: string, lang: string, getUnits: string) => {
		if (geoLocation) {
			const res = await fetch(
				`https://api.openweathermap.org/data/2.5/weather?lat=${geoLocation.lat}&lon=${geoLocation.lon}&units=${getUnits}&appid=${key}&lang=${lang}`
			);

			return await res.json();
		} else {
			const res = await fetch(
				`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${getUnits}&appid=${key}&lang=${lang}`
			);
			const data = await res.json();
			console.log(data);

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
	if (isError) return <Error code={500}>{t('weather_500')}</Error>;
	if (parseInt(data.cod) === 404) return <Error code={404}>{t('weather_404')}</Error>;

	return (
		<DataWeatherContext.Provider value={{ data, getUnits, setUnits }}>
			<Suspense fallback={<Loading />}>
				<WeatherMain />
				<WeatherInfo />
			</Suspense>
		</DataWeatherContext.Provider>
	);
};

export default WeatherView;
