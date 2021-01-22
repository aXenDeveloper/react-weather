import { createContext, useContext } from 'react';

export type DataWeatherContextType = {
	name: string;
	weather: {
		[key: number]: {
			id: number;
			icon: string;
			description: string;
		};
	};
	sys: {
		country: string;
	};
	main: {
		temp: string;
	};
};

export const DataWeatherContext = createContext({});

export const useDataWeather = () => useContext(DataWeatherContext);
