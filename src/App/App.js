import './App.css';
import {toCreate, toUpdate, toRead} from "./Core/routes";
import Create from "./components/Create/create";
import Read from "./components/Read/read";
import Update from "./components/Update/update";
import {BrowserRouter as Router, Navigate, Route, Routes} from 'react-router-dom'

function App() {
    return (
        <Router>
            <div className="main">
                <h2 className="main-header">Recruitment Task BBB</h2>
            </div>
            <div className="main__routes">
                    <Routes>
                        <Route path={toCreate} element={<Create/>}/>
                        <Route path={toRead} element={<Read/>}/>
                        <Route path={toUpdate} element={<Update/>}/>
                        <Route path="/" element={<Navigate replace to={toCreate}/>}/>
                    </Routes>
            </div>
        </Router>
);
}

export default App;
