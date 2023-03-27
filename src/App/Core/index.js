import {Navigation} from "../common/Navigation";
import {BrowserRouter as Router, Navigate, Route, Routes} from "react-router-dom";
import {toCreate, toList, toUpdate} from "./routes";
import List from "../features/List";
import Create from "../features/Create";
import Update from "../features/Update";
import {theme} from "./theme";
import {Normalize} from "styled-normalize";
import {GlobalStyle} from "./GlobalStyle";
import {ThemeProvider} from "styled-components";

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Normalize/>
            <GlobalStyle/>
            <Router>
                <Navigation/>
                <Routes>
                    <Route path="/" element={<List/>} />
                    <Route path={toCreate} element={<Create/>} />
                    <Route path={toUpdate} element={<Update/>} />
                    <Route path={toList} element={<List/>} />
                </Routes>
            </Router>
        </ThemeProvider>
    );
}

export default App;
