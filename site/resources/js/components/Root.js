import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Header from "./layouts/header";
import Error404 from "./errors/er404";
import accountIndex from "./account/accountIndex";
import Welcome from "./home/welcome";
import Profile from "./profile/profile";

function Root() {
    return (
        <Router>
            <Header/>
            <Switch>
                <Route exact path="/" component={Welcome}/>
                <Route path="/account" component={accountIndex}/>
                <Route path="/myaccount" component={Profile}/>
                <Route path="/myaccount/answers" component={Profile}/>
                <Route path="/myaccount/settings" component={Profile}/>






                <Route component={Error404}/>
            </Switch>
        </Router>
    );
}

export default Root;

if (document.getElementById('app')) {
    ReactDOM.render(<Root/>, document.getElementById('app'));
}
