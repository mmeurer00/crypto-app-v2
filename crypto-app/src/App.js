// import API from "./Components/FunkyExperimentLab/API";
import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './Components/Login/Login';
import Dashboard from './Components/Dashboard/Dashboard';
import Preferences from './Components/Preferences/Preferences';
import SearchWindow from "./Components/SearchWindow";
import './App.css'

function setToken(userToken) {
  sessionStorage.setItem('token', JSON.stringify(userToken));
}

function getToken() {
  const tokenString = sessionStorage.getItem('token');
  const userToken = JSON.parse(tokenString);
  /* You need to use ?.
  —when accessing the token property because 
  when you first access the application, the value of 
  sessionStorage.getItem('token') will be undefined. 
  If you try to access a property, you will generate an error. */
  return userToken?.token
}

/* As of right now, until logout is added, you can
clear out the token by either deleting the token in 
the Storage tab in your developer tools or by typing
sessionStorage.clear() in your developer console. */

function App() {

  const token = getToken();

  if(!token) {
    return <Login setToken={setToken} />
  }

  return (
    <>
      <div className="wrapper">
        <h1>Application</h1>
        <BrowserRouter>
          <Switch>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
            <Route path="/preferences">
              <Preferences />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
      <SearchWindow />
    </>
  );
}

export default App;
