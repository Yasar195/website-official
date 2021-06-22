import React from 'react';
import Home from './component/Home/Home';
import Blog from './component/Blog/Blog';
import Contact from './component/Contact/Contact';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './App.css';

const App = () => {
    return(
        <div>
            <Router>
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/blog" exact component={Blog}/>
                    <Route path="/contact" exact component={Contact}/>
                </Switch>
             </Router>
        </div>
    )
}

export default App;