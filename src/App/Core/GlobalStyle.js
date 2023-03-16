import {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *,
  ::after,
  ::before {
    box-sizing: inherit;
  }

  #root {
    font-family: 'Lato', sans-serif;
    background-color: #282c34;
    font-size: 12px !important;
    color: whitesmoke;
    min-height: 100vh;
   padding-bottom: 60px;
    justify-content: center;
  }
`;
