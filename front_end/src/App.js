import React, { useState, useEffect, ReactDOM } from 'react';
import './App.css';
import {BrowserRouter  as Router, Route, Switch} from 'react-router-dom';
import grey from '@material-ui/core/colors/grey';
import Input from '@material-ui/core/Input';
import Collapsible from 'react-collapsible';
import Button from '@material-ui/core/Button'
import SearchIcon from '@material-ui/icons/Search';
import Header from './header';
import ThumbDownOutlinedIcon from '@material-ui/icons/ThumbDownOutlined';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import Content from './Content';
import Login from './Login';
import Home from "./Home"
export default function App() {
  useEffect(() => {
      }, [])


return (
<Router> 
    <Switch>
        <Route exact path="/">
            <Home/>
         </Route>
         <Route exact path="/search">
            <Content/>
         </Route>

        <Route exact path="/login">
            <Login/>
        </Route>
    </Switch>
</Router>

    );

}
