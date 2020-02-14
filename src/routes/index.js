import React from 'react'

import { Route, Redirect, BrowserRouter as Router, Switch } from 'react-router-dom'
import Home from "../pages/home";
import Main from "../pages/main";
import { NotFound } from "../pages/error";

const Routes = () => {
    console.log(Home);
    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route exact path="/Home" component={Home} />
                    <Route path="/Main" component={Main} />
                    <Redirect exact from="/" to="/Home"></Redirect>
                    <Route component={NotFound} />
                </Switch>
            </div>
        </Router>
    )
}

export default Routes;