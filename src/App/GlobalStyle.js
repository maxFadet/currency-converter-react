import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
    }

    *, ::after, ::before {
        box-sizing: inherit;
    }

    body {
        font-family: 'Plus Jakarta Sans', sans-serif;
        min-height: 100vh;
        background-image: url("background.jpg");
        background-repeat: no-repeat;
        background-size: cover;
        display: grid;
        align-items: center;
        grid-template-rows: 1fr;
    }
`;