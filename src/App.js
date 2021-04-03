import React, { useEffect } from 'react'
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion"

import PaymentPage from './components/pages/payments/payments'
import Home from './components/pages/AppHome/Home';
import Login from './components/pages/login/login'
import Logout from './components/pages/Logout/Logout'
import StreamPage from './components/pages/StreamPage/StreamPage'
import spinner from "./components/assets/spinner.svg"

import { appContext } from './appContext'
import apiUrl from './serverConfig'
import axios from 'axios'
import RegistrationPage from './components/pages/RegistraionPage/registrationPage';
import ForgotPassword from './components/pages/ForgotPassword/ForgotPassword';

import { useState } from 'react';

let api = axios.create({
  baseURL: apiUrl
})


export default function App() {
  let [tokenData,setTokenData] = useState(null)
  let [isAuthenticated,setIsAuthenticated] = useState(false)
  let tokenString = localStorage.getItem('tedx-cusat-token-data')
  let [verificationModalMsg,setVerificationModalMsg] = useState(null)

  useEffect(()=>{
      if(tokenString && !tokenData) {
        setTokenData(JSON.parse(tokenString))
      }
      if(tokenData && tokenData.token){
        setVerificationModalMsg(`Welcome back ${tokenData.user.customerName}, authentication in process.`)
        api.post("/verifyLogin",{},{headers: {...tokenData}})
          .then(({status,data})=>{
            if(status === 401){
              setTokenData(null)
              setIsAuthenticated(false)
              setVerificationModalMsg(null)
  
            }else{
              setIsAuthenticated(true)
              setVerificationModalMsg(null)

            }
            setVerificationModalMsg(null)

          })
          .catch((error)=>{
            setVerificationModalMsg(null)

          })
      }
      setVerificationModalMsg(null)

  },[tokenData])
  return (
    <Router>
      <AnimatePresence>
        { 
            verificationModalMsg && 
            <motion.div
                initial={{ opacity: 0}}
                animate={{ opacity: 1}}
                exit={{ opacity: 0 }}
                className="auto-verification-modal-container"
            >
                  <motion.div
                        initial={{ scale: 0, translateY: 200 }}
                        animate={{ scale: 1,  translateY: 0}}
                        exit={{ opacity: 0 }}
                        className="auto-verification-modal"
                >
                    <img src={spinner} alt=""/>
                    <p>{verificationModalMsg}</p>
                </motion.div>
            </motion.div>
        }
      </AnimatePresence>
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
          <Route exact path="/forgotPassword">
            <ForgotPassword />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/logout">
            <Logout /> 
          </Route>
          <Route exact path="/">
            {isAuthenticated ? <Redirect to="/stream"/> : <Home />}
          </Route>

        </Switch>
      </appContext.Provider>
    </Router>
  );
}
