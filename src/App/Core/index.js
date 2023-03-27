import {Navigation} from "../common/Navigation";
import {BrowserRouter as Router, HashRouter, Route, Routes} from "react-router-dom";
import {toCreate, toList, toUpdate} from "./routes";
import List from "../features/List";
import Create from "../features/Create";
import Update from "../features/Update";

function App() {
    return (
            <HashRouter>
                <Navigation/>
                <Routes>
                    <Route path="/" element={<List/>}/>
                    <Route path={toCreate} element={<Create/>}/>
                    <Route path={toUpdate} element={<Update/>}/>
                    <Route path={toList} element={<List/>}/>
                </Routes>
            </HashRouter>
    );
}

export default App;
