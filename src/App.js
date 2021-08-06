import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './Pages/Home';

const App = () => {
    return(
        <div>
            <Router>
                <Switch>
                    <Route path="/" exact component={Home}/>
                </Switch>
            </Router>
        </div>
    )
}

export default App;