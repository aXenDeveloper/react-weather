import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
*,
*::after,
*::before {
    box-sizing: border-box;
}

:root {
    --theme-background: #326dde;
    --theme-color: #000;
    --theme-color-light: #585858;
    --theme-link: #326dde;
    --theme-link-hover: #de3232;
    --theme-section-weather: #326dde;
    --theme-section-weather-text: #fff;
    --container-small-width: 800px;
    --container-width: 1000px;
    --border-radius: 1rem;
    --loading-border: rgba(0, 0, 0, 0.2);
    --loading-border-top: #fff;
    --theme-block: #fff;
    --padding: 2rem;
}

html {
    font-size: 62.5%;
}

body {
    font-family: 'Nunito', -apple-system, BlinkMacSystemFont, Roboto, Helvetica, Arial, sans-serif;
    font-size: 1.4rem;
    margin: 0;
    line-height: 1.5;
    background-color: var(--theme-background);
    color: var(--theme-color);
    height: 100%;
}

a {
    text-decoration: none;
    color: var(--theme-link);

    &:hover {
        color: var(--theme-link-hover);
    }
}

@keyframes drop {
    from {
        transform: translateY(-35px);
        opacity: 1;
    }
    to {
        transform: translateY(180px);
        opacity: 0;
    }
}

`;

export default GlobalStyle;
