import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import translationEN from './lang/en/translation.json';
import translationPL from './lang/pl/translation.json';

// the translations
// (tip move them in a JSON file and import them)
const resources = {
  en: {
    translation: translationEN
  },
  pl: {
    translation: translationPL
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    fallbackLng: 'en',

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false // react already safes from xss
    },
    detection: {
      order: ['querystring', 'localStorage', 'cookie', 'sessionStorage', 'htmlTag', 'path'],

      // keys or params to lookup language from
      lookupQuerystring: 'lang',
      lookupCookie: 'aXenDev_WeatherAppCookie',
      lookupLocalStorage: 'aXenDev_WeatherAppLocalStorage',
      lookupSessionStorage: 'aXenDev_WeatherAppSessionStorage',
      lookupFromPathIndex: 0,
      lookupFromSubdomainIndex: 0,

      // cache user language on
      caches: ['localStorage', 'cookie'],
      excludeCacheFor: ['cimode'], // languages to not persist (cookie, localStorage)

      // optional expire and domain for set cookie
      cookieMinutes: 10,
      cookieDomain: 'weather.aXenDev.net',

      // optional htmlTag with lang attribute, the default is:
      htmlTag: document.documentElement,

      // optional set cookie options, reference:[MDN Set-Cookie docs](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie)
      cookieOptions: { path: '/', sameSite: 'strict' }
    }
  });

export default i18n;
