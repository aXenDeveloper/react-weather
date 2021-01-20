import { FC } from 'react';
import { useQuery } from 'react-query';
import { useLocation } from 'react-router-dom';
import Loading from '../components/Loading';
import WeatherIcon from '../components/WeatherIcon';
import { LangContextType, useLang } from '../context/useLang';

const WeatherView: FC = () => {
	const { pathname } = useLocation();
	const city = pathname.substr(1);
	const { lang } = useLang() as LangContextType;
	const key = process.env.REACT_APP_KEY_API_WEATHER || '';

	const api = async (city: string, key: string, lang: string) => {
		const res = await fetch(
			`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${key}&lang=${lang}`
		);
		const data = await res.json();
		console.log(data);
		return data;
	};

	const { isLoading, data } = useQuery(['weatherMain', city, key, lang], context => api(city, key, lang), {
		cacheTime: 0,
		refetchOnMount: false,
		refetchOnWindowFocus: false,
		refetchOnReconnect: false
	});

	if (isLoading) return <Loading />;

	return (
		<div>
			<section className="weather">
				<div className="container">
					<WeatherIcon weatherID={data.weather[0].id} weatherIcon={data.weather[0].icon} />
				</div>
			</section>
			<h1>
				WeatherView {data.name} {data.main.temp}
			</h1>
		</div>
	);
};

export default WeatherView;
