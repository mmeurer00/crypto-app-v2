// import API from "./Components/FunkyExperimentLab/API";
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from '../Components/Login/Login';
import Dashboard from '../Components/Dashboard/Dashboard';
import Preferences from '../Components/Preferences/Preferences';
import useToken from './useToken';
import './App.css'

function App() {

  const { token, setToken } = useToken();

  if(!token) {
    return <Login setToken={setToken} />
  }

  return (
    <>
      <div className="wrapper">
        {/* <h1>Application</h1> */}
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
    </>
  );
}

export default App;
