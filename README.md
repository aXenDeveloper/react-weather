![GitHub Header](https://github.com/aXenDeveloper/react-weather/blob/main/screenshots/githubHeader.png?raw=true)

# (React) Weather app

Weather app is an application that allows you to check the current weather in your chosen city.

The application allows you to use: geolocation, change the display language and unit conversion (degrees, speed).

_API: [OpenWeatherMap](https://openweathermap.org/)_

## Table of contents 📖

-   [Install 🧰](#install-)
-   [Configuration 🛠️](#configuration-%EF%B8%8F)
    -   [API](#api)
    -   [Title website](#title-website)
-   [Languages 🌎](#languages-)
    -   [Configuration](#configuration)
    -   [Add new lang](#add-new-lang)
-   [Tests 👍](#tests-)
-   [Deployment 🔨](#deployment-)
-   [Packages 📂](#packages-)
-   [Graphics 📷](#graphics-)

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

-   {lang} - Short name of the language _for example: `pl`_,
-   {lang*flag} - Short name of the country [Check the supported country](https://flagpedia.net/index) \_for example: `pl`*,
-   {lang*full} Full name of the language \_for example: `polish`*

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

## Graphics 📷

![1](https://github.com/aXenDeveloper/react-weather/blob/main/screenshots/1-min.png?raw=true)

![2](https://github.com/aXenDeveloper/react-weather/blob/main/screenshots/2-min.png?raw=true)

![3](https://github.com/aXenDeveloper/react-weather/blob/main/screenshots/3-min.png?raw=true)
