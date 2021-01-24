import { createContext, useContext } from 'react';
import { DataWeatherContextType } from '../types/contextTypes';

export const DataWeatherContext = createContext<DataWeatherContextType | {}>({});

export const useDataWeather = () => useContext(DataWeatherContext);
