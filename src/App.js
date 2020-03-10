import React from 'react';
import './App.css';

import Home from "./pages/Home/Home";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import {Route, Switch, BrowserRouter as Router} from 'react-router-dom';

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route component={ErrorPage}/>
            </Switch>
        </Router>
    );
}

export default App;
