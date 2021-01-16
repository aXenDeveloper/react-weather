import { createContext, useContext } from 'react';

export type LangContextType = {
	lang: string;
	setLang(e: string): void;
};

export const LangContext = createContext({});

export const useLang = () => useContext(LangContext);
