import { createContext, useContext } from 'react';
import { GeoLocationContextType } from '../types/contextTypes';

export const GeoLocationContext = createContext<GeoLocationContextType | {}>({});

export const useGeoLocation = () => useContext(GeoLocationContext);
