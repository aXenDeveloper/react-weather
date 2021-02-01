import { createContext, useContext } from 'react';

export const GeoLocationContext = createContext<{}>({});

export const useGeoLocation = () => useContext(GeoLocationContext);
