// import API from "./Components/FunkyExperimentLab/API";
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from '../Components/Navbar/Navbar'
import Login from '../Components/Login/Login';
import Dashboard from '../Components/Dashboard/Dashboard';
import Preferences from '../Components/Preferences/Preferences';
import Home from '../Components/Home/Home'
import Signup from '../Components/Signup/Signup'
import useToken from './useToken';
import './App.css'

function App() {

  const { token, setToken } = useToken();

  if(!token) {
    return <Login setToken={setToken} />
  }

  return (
    <BrowserRouter>
        <div className="coin_app">
          <Navbar />
            <div className="auth-wrapper">
              <div className="auth-inner">
                <Switch>
                  <Route path="/dashboard" component={Dashboard}>
                    <Dashboard />
                  </Route>
                  <Route path="/preferences"component={Preferences}>
                    <Preferences />
                  </Route>
                  <Route path="/login" component={Login}>
                    <Login />
                  </Route>
                  <Route path="/signup" component={Signup}>
                    <Signup />
                  </Route>
                </Switch>
              </div>
            </div>
        </div>
      </BrowserRouter>
  );
}

export default App;
