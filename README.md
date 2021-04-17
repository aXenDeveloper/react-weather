![GitHub Header](https://github.com/aXenDeveloper/react-weather/blob/main/screenshots/githubHeader.png?raw=true)

# (React) Weather app

Weather app is an application that allows you to check the current weather and forecast in your chosen city.

The application allows you to use: geolocation, change the display language and unit conversion (degrees, speed).

_API: [OpenWeatherMap](https://openweathermap.org/)_

## Install 🧰

Use commands:

```bash
git clone https://github.com/aXenDeveloper/react-weather

npm i

npm start
```

## Configuration 🛠️

In the project directory go to file **src/.env_template** and rename the file to **.env**

### API

Create a secreet key API form [OpenWeatherMap](https://openweathermap.org/) and paste in to the **.env** file:

```bash
REACT_APP_KEY_API_WEATHER=
```

### Title website

Change title website in:

1. **/public/index.html**:
   ```bash
   <title>Weather app - aXenDev.net</title>
   ```
2. **src/.env**:

   ```bash
   REACT_APP_TITLE_WEBSITE=XXX
   ```

3. **public/manifest.json**:
   ```bash
   "short_name": "Weather app",
   "name": "Weather app - aXenDev.net",
   ```

## Languages 🌎

Before we start - [Check the supported language for OpenWeatherMap API](https://openweathermap.org/current#multi)

- {lang} - Short name of the language _for example: `pl`_,
- {lang*flag} - Short name of the country [Check the supported country](https://flagpedia.net/index) \_for example: `pl`*,
- {lang*full} Full name of the language \_for example: `polish`*

---

### Configuration

Go to **src/i18n.ts** and edit **detection** section:

```bash
lookupCookie: 'aXenDev_WeatherAppCookie',
lookupLocalStorage: 'aXenDev_WeatherAppLocalStorage',
lookupSessionStorage: 'aXenDev_WeatherAppSessionStorage',
```

_(Optional)_ You can edit alse cookie config:

```bash
cookieMinutes: 10,
cookieDomain: 'weather.aXenDev.net',
```

More options in [i18next config documentation](https://www.i18next.com/overview/configuration-options).

### Add new lang

1. Go to **src/lang** and create folder for a language for example `pl`,
2. Create file **translation.json** in **src/lang/{lang}**,
3. Go to **src/i18n.ts** and add to import new language:
   ```bash
   import translation{lang} from './lang/{lang}/translation.json';
   ```
4. Add new lang in resources variable:
   ```bash
   {lang}: {
   	translation: translation{lang}
   }
   ```
5. Create a new button. Go to **src/components/ChangeLang.tsx** and add new element li via function inside **ChangeLangStyle**:
   ```bash
   {createLang('{lang}', '{lang_flag}', '{lang_full}')}
   ```

## Deployment 🔨

Command:

```bash
npm run build
```

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Tests 👍

Command:

```bash
npm test
```

See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## Packages 📂

| Packages                                            | Description                                 |
| --------------------------------------------------- | ------------------------------------------- |
| [React](https://reactjs.org/)                       | Library for Single Page Application _(SPA)_ |
| [React Router](https://reactrouter.com/)            | Pages in React                              |
| [React Query](https://react-query.tanstack.com/)    | Connection with API                         |
| [Typescript](https://www.typescriptlang.org/)       | Types in JavaScript                         |
| [Styled components](https://styled-components.com/) | Style in JS                                 |
| [i18n](https://react.i18next.com/)                  | Pages translations                          |
| [Font Awesome](https://fontawesome.com/)            | Icons SVG                                   |

## Demo Weather Icons ​🌦️

### Group 2xx: Thunderstorm

- [Thunderstorm with heavy rain](https://weather.axendev.net/demoweather/202/d),
- [Light thunderstorm (Day)](https://weather.axendev.net/demoweather/210/d),
- [Light thunderstorm (Night)](https://weather.axendev.net/demoweather/210/n),
- [Thunderstorm with drizzle](https://weather.axendev.net/demoweather/231/d)

### Group 5xx: Rain

- [Light rain (Day)](https://weather.axendev.net/demoweather/500/d),
- [Light rain (Night)](https://weather.axendev.net/demoweather/500/n),
- [Freezing rain](https://weather.axendev.net/demoweather/511/d),
- [Shower rain](https://weather.axendev.net/demoweather/521/d)

### Group 6xx: Snow

- [Snow (Day)](https://weather.axendev.net/demoweather/601/d),
- [Snow (Night)](https://weather.axendev.net/demoweather/601/n),
- [Shower sleet](https://weather.axendev.net/demoweather/613/d),
- [Rain and snow](https://weather.axendev.net/demoweather/616/d)

### Group 7xx: Atmosphere

- [Mist](https://weather.axendev.net/demoweather/701/d),
- [Volcanic ash](https://weather.axendev.net/demoweather/762/d),
- [Tornado](https://weather.axendev.net/demoweather/781/d)

### Group 800: Clear

- [Clear (Day)](https://weather.axendev.net/demoweather/800/d),
- [Clear (Night)](https://weather.axendev.net/demoweather/800/n)

### Group 800: Clear

- [Few clouds: 11-25% (Day)](https://weather.axendev.net/demoweather/801/d),
- [Few clouds: 11-25% (Night)](https://weather.axendev.net/demoweather/801/n),
- [Broken clouds: 51-84%](https://weather.axendev.net/demoweather/803/d),
- [Overcast clouds: 85-100%](https://weather.axendev.net/demoweather/804/d),

## Graphics 📷

![1](https://github.com/aXenDeveloper/react-weather/blob/main/screenshots/1-min.png?raw=true)

![2](https://github.com/aXenDeveloper/react-weather/blob/main/screenshots/2-min.png?raw=true)

![3](https://github.com/aXenDeveloper/react-weather/blob/main/screenshots/3-min.png?raw=true)

![4](https://github.com/aXenDeveloper/react-weather/blob/main/screenshots/4-min.png?raw=true)
