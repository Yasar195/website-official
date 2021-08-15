import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './Pages/Home';
import Skill from './Pages/Skill';

const App = () => {
    return(
        <div>
            <Router>
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/skill" exact component={Skill}/>
                </Switch>
            </Router>
        </div>
    )
}

export default App;