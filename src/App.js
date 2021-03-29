import React, { useEffect } from 'react'
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";


import PaymentPage from './components/pages/payments/payments'
import Home from './components/pages/AppHome/Home';
import Login from './components/pages/login/login'
import Logout from './components/pages/Logout/Logout'
import StreamPage from './components/pages/StreamPage/StreamPage'

import { appContext } from './appContext'
import apiUrl from './serverConfig'
import axios from 'axios'
import RegistrationPage from './components/pages/RegistraionPage/registrationPage';
import { useState } from 'react';

let api = axios.create({
  baseURL: apiUrl
})


export default function App() {
  let [isLoading,setLoading] = useState(true)
  let [tokenData,setTokenData] = useState(null)
  let [isAuthenticated,setIsAuthenticated] = useState(false)
  let tokenString = localStorage.getItem('tedx-cusat-token-data')
  useEffect(()=>{
      setLoading(true)
      if(tokenString && !tokenData) {
        setTokenData(JSON.parse(tokenString))
      }
      if(tokenData && tokenData.token){
        api.post("/verifyLogin",{},{headers: {...tokenData}})
          .then(({status,data})=>{
            if(status === 401){
              setTokenData(null)
              setIsAuthenticated(false)
            }else{
              setIsAuthenticated(true)
            }
            console.log(status)
            console.log(data)
          })
          .catch((error)=>{
            console.log(error)
          })
      }

      
      setLoading(false)
  },[tokenData])
  return (
    <Router>
      <div> 
      </div>
      <appContext.Provider
          value={{ api, tokenData, isAuthenticated, setTokenData, setIsAuthenticated}}
        >
        <Switch>
          
          <Route exact path="/stream">
            {isAuthenticated ? <StreamPage /> : <Login />}
          </Route>
          
          <Route exact path="/payment">
            <PaymentPage />
          </Route>
          <Route exact path="/registration">
            <RegistrationPage />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/logout">
            <Logout /> 
          </Route>
          <Route path="/">
            <Home />
          </Route>

        </Switch>
      </appContext.Provider>
    </Router>
  );
}
