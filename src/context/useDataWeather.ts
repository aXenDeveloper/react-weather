import { createContext, useContext } from 'react';

export const DataWeatherContext = createContext<{}>({});

export const useDataWeather = () => useContext(DataWeatherContext);
