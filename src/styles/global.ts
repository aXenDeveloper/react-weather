import styled, { createGlobalStyle, css } from 'styled-components';

const GlobalStyle = createGlobalStyle`
*,
*::after,
*::before {
    box-sizing: border-box;
}

:root {
    --theme-background: #326dde;
    --theme-background-top: #1a4390;
    --theme-color: #000;
    --theme-color-dark: #b4ceff;
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
    --button-hover: rgba(0, 0, 0, 0.15);
}

html {
    font-size: 10px;
}

body {
    font-family: 'Nunito', -apple-system, BlinkMacSystemFont, Roboto, Helvetica, Arial, sans-serif;
    font-size: 1.4rem;
    margin: 0;
    line-height: 1.5;
    background-color: var(--theme-background);
    background-image: linear-gradient(0, transparent, var(--theme-background-top));
    background-repeat: no-repeat;
    background-attachment: fixed;
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

main {
    min-height: calc(100vh - 82px - 186px);

    @media screen and (max-width: 768px) {
        min-height: calc(100vh - 82px - 117px);
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

export const Container = styled.div`
  ${({ small }: { small?: boolean }) =>
    small
      ? css`
          max-width: var(--container-small-width);
        `
      : css`
          max-width: var(--container-width);
        `}

  padding: 0 1.5rem;
  margin: 0 auto;
`;

export default GlobalStyle;
