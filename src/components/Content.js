import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from '../pages/Dashboard';
import Posts from '../pages/Posts';
import ToggleMenu from './ToggleMenu';

const Content = () => {

    return(
        <div className="content">
            <div className="toggle-menu-container">
                <div className="toggle-menu">
                    <ToggleMenu />
                </div>
            </div>

            <Router>
                <Switch>
                    <Route path="/" exact component={Dashboard} />
                    <Route path="/posts" component={Posts} />
                </Switch>
            </Router>
        </div>
    )

}

export default Content