# (React) Weather app

Weather app is an application that allows you to check the current weather in your chosen city.

The application allows you to use: geolocation, change the display language and unit conversion (degrees, speed).

_API: [OpenWeatherMap](https://openweathermap.org/)_

## Table of contents 📖

-   [Install 🧰](#install-)
-   [Configuration 🛠️](#configuration-%EF%B8%8F)
-   [Deployment 🔨](#deployment-)
-   [Packages 📂](#packages-)
-   [Graphics 📷](#graphics-)

## Install 🧰

Use comend

```bash
npm i
```

or

```bash
npm install
```

in the project directory.

## Configuration 🛠️

1. Create a secreet key API form [OpenWeatherMap](https://openweathermap.org/),
2. In the project directory go to file **src/.env_template** and rename the file to **.env**,
3. Enter the secret API key in the **.env** file:
    ```bash
    REACT_APP_KEY_API_WEATHER=XX
    ```

## Deployment 🔨

Command:

```bash
npm run build
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
| [Font Awesome](https://fontawesome.com/)            | Icon SVG                                    |

## Graphics 📷

_There are no screenshots yet._
