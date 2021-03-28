import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


import PaymentPage from './components/pages/payments/payments'
import Home from './components/pages/AppHome/Home';
import Login from './components/pages/login/login'

import { appContext } from './appContext'
import apiUrl from './serverConfig'
import axios from 'axios'
import RegistrationPage from './components/pages/RegistraionPage/registrationPage';

let api = axios.create({
  baseURL: apiUrl
})


export default function App() {
  return (
    <Router>
      <div> 
      </div>
      <appContext.Provider
          value={{ api }}
        >
        <Switch>
        
          <Route exact path="/payment">
            <PaymentPage />
          </Route>
          <Route exact path="/registration">
            <RegistrationPage />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>

          <Route path="/">
            <Home />
          </Route>

        </Switch>
      </appContext.Provider>
    </Router>
  );
}
