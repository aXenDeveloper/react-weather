import { createContext, useContext } from 'react';

export const GlobalContext = createContext({});

export const useGlobal = () => useContext(GlobalContext);
