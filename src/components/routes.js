import React from "react";
import { Switch, Route } from 'react-router-dom';
import Home from "./home/home";
import SignUp from "./Authentication/signUp";
import Signin from "./Authentication/signin";
import ChangePassword from "./Authentication/changPassword";
import Posts from "./posts/posts";
import AddPostForm from "./posts/addPostForm";
import UpdatePost from "./posts/updatePost";
import NotFoundPage from "./home/notFound";
import Verified from "./Authentication/verified";
import Verify from './Authentication/verify'
import ForgetPassword from "./Authentication/forgetPassword";
import ChangeForgotPassword from './Authentication/changeForgotPassword';


function Routes() {
    return (
        <Switch>
            <Route
                exact
                path="/signup"
                render={props => { return (<SignUp  {...props} />) }}
            />

            <Route
                exact
                path="/signin"
                render={props => { return (<Signin  {...props} />) }}
            />

            <Route
                exact
                path="/"
                render={props => { return (<Home {...props} />) }}
            />

            <Route
                exact
                path="/change_password"
                render={props => { return (<ChangePassword {...props} />) }}
            />

            <Route
                exact
                path="/posts"
                render={props => { return (<Posts {...props} />) }}
            />

            <Route
                exact
                path="/newpost"
                render={props => { return (<AddPostForm {...props} />) }}
            />

            <Route
                exact
                path="/:post_id/post"
                render={props => { return (<UpdatePost {...props} />) }}
            />

            <Route
                exact
                path="/:userId/:randomNumber/verify"
                render={props => { return (<Verified {...props} />) }}
            />

            <Route
                exact
                path="/verify"
                render={props => { return (<Verify {...props} />) }}
            />

            <Route
                exact
                path="/forget_password"
                render={props => { return (<ForgetPassword {...props} />) }}
            />

            <Route
                exact
                path="/:userId/:randomNumber/updatePassword"
                render={props => { return (<ChangeForgotPassword  {...props} />) }}
            />

            <Route
                exact
                path="/*"
                render={props => { return (<NotFoundPage {...props} />) }}
            />

            
        </Switch>
    )
}

export default Routes;