import { createContext, useContext } from 'react';

export type DataWeatherContextType = {
	data: {
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
			temp: number;
		};
	};
	getUnits: string;
	setUnits(e: string): void;
};
export const DataWeatherContext = createContext<DataWeatherContextType | {}>({});

export const useDataWeather = () => useContext(DataWeatherContext);
