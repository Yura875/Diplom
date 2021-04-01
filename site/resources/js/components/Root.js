import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Header from "./layouts/header";
import Error404 from "./errors/er404";
import accountIndex from "./account/accountIndex";
import Welcome from "./home/welcome";
import Profile from "./profile/profile";
import VerificateEmail from "./account/verificateEmail";
import ForgotPassword from "./account/forgotPassword";
import Footer from "./layouts/Footer";
import AddPost from "./profile/addPost/addPost";
import FileOperation from "./tmp/fileOperation";
import Post from "./posts/post";
import Search from "./search/search";
import Edit from "./posts/edit";
import Chat from "./posts/chat";

function Root() {
    return (
        <Router>
            <Header/>
            <div className="">
            <Switch>
                <Route exact path="/" component={Welcome}/>

                <Route path="/account" component={accountIndex}/>
                <Route path="account/:page" component={accountIndex}/>

                <Route path="/myaccount" component={Profile}/>
                <Route path="/search" component={Search}/>
                <Route path="/addPost" component={AddPost}/>
                <Route path="/post/:slug/:id" component={Post}/>
                <Route path="/edit/:slug/:id" component={Edit}/>
                <Route path="/chat/:slug/:id" component={Chat}/>



                <Route component={Error404}/>
            </Switch>
            </div>
            <Footer/>
        </Router>
    );
}

export default Root;

if (document.getElementById('app')) {
    ReactDOM.render(<Root/>, document.getElementById('app'));
}
