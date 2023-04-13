import ReactDOM from "react-dom/client";
import App from "./App/Core/index";
import reportWebVitals from "./reportWebVitals";
import { GlobalStyle } from "./App/Core/GlobalStyle";
import { Normalize } from "styled-normalize";
import { ThemeProvider } from "styled-components";
import { theme } from "./App/Core/theme";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider theme={theme}>
    <Normalize />
    <GlobalStyle />
    <App />
  </ThemeProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
