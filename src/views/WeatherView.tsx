import { FC, useEffect } from 'react';
import { useQuery } from 'react-query';
import { useLocation } from 'react-router-dom';
import Loading from '../components/Loading/Loading';

const WeatherView: FC = () => {
	const { pathname } = useLocation();
	const city = pathname.substr(1);

	const { isLoading, isError, data, refetch } = useQuery(
		'weatherMain',
		async () => {
			const res = await fetch(
				`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.REACT_APP_KEY_API_WEATHER}`
			);
			const data = await res.json();
			console.log(data);
			return data;
		},
		{ cacheTime: 0, refetchOnMount: false, refetchOnWindowFocus: false, refetchOnReconnect: false }
	);

	useEffect(() => {
		refetch();
	}, [city, refetch]);

	if (isLoading) return <Loading />;

	return (
		<div>
			<h1>
				WeatherView {data.name} {data.main.temp}
			</h1>
			<button onClick={() => refetch()}>Refetch!</button>
		</div>
	);
};

export default WeatherView;
