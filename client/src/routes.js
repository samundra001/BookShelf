import React from 'react';
import {Switch,Route} from 'react-router-dom';

import Home from './components/Home/home';
import Layout from './hoc/layout';
import BookView from './components/Books/book_view';
import Login from './containers/Admin/login';
import User from './components/Admin';
import AddReview from './containers/Admin/add';
import UserPosts from './components/Admin/userPost'
import EditPosts from './components/Admin/edit';
import Register from './containers/Admin/register';
import Logout from './components/Admin/logout';
import Auth from './hoc/auth'

//{Auth(Home)} first goto auth function and return whatever you want to return in home
//1.we want to show either auth or not so null
//2.we show login if the user is not logged in and if user is logged in we dont want to show the login we want to kick the user in the profile(false)
//3.we want to show the user only if the user is authenticated(true)
const Routes = () => {
    return (
        <Layout>
        <Switch>
            <Route path="/" exact component={Auth(Home,null)}/>
            <Route path="/login" exact component={Auth(Login,false)}/>
            <Route path="/user" exact component={Auth(User,true) }/>
            <Route path="/user/logout" exact component={Auth(Logout,true) }/>
            <Route path="/user/add" exact component={Auth(AddReview,true) }/>
            <Route path="/user/edit-post/:id" exact component={Auth(EditPosts,true) }/>
            <Route path="/user/register" exact component={Auth(Register,true) }/>
            <Route path="/books/:id" exact component={Auth(BookView,null)}/>
            <Route path="/user/user-reviews" exact component={Auth(UserPosts,true) }/>
         
        </Switch>
        </Layout>
       
    );
};

export default Routes;