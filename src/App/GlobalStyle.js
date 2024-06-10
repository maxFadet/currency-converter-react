import { createGlobalStyle } from "styled-components";
import background from "./background.jpg"

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
        background-image: url("${background}");
        background-repeat: no-repeat;
        background-size: cover;
        display: grid;
        align-items: center;
        grid-template-rows: 1fr;
    }
`;