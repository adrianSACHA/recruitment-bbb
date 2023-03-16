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
    background-color: ${({theme}) => theme.color.mainBackgroundColor};
    font-size: 12px;
    color: ${({theme}) => theme.color.navigationText};
    min-height: 100vh;
    padding-bottom: 60px;
    justify-content: center;
  }
`;
