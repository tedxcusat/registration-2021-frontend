import React, { useEffect, useState, useContext } from 'react'
import styled from 'styled-components'
import Navbar from '../../common/NavBar'
import { motion, AnimatePresence } from "framer-motion"
import Confetti from 'react-confetti'

import { appContext } from "../../../appContext";


function RegistrationPage() {
    let { api } = useContext(appContext)
    let [reqOtpApiMsg,setReqOtpApiMsg] = useState(null)
    let [verifyOtpApiMsg,setVerifyOtpApiMsg] = useState(null)
    let [registrationApiMsg,setRegistrationApiMsg] = useState(null)
    let [formData,setFormData] = useState(null)
    let [isVerified, setIsVerified] = useState(false)
    let [hasSentVerification, setHasSentVerification] = useState(false)
    let [userEmail,setUserEmail] = useState(null)
    let [userOTP,setUserOTP] = useState(null)
    let [showConfetti,setShowConfetti] = useState(false)
    
    let handleEmailFormChange = (e) =>{
        setUserEmail({'email': e.target.value})
    }
    
    let handleOTPFormChange = (e) =>{
        setUserOTP({"otp": e.target.value})
    }
    
    let handelFormChange = (e) =>{
        setFormData({...formData, [e.target.name] : e.target.value})
        console.log(formData);
    }
    
    let sendVerificationRequest = (e) =>{
        setReqOtpApiMsg({msg: 'Sending OTP....', isError: false})
        e.preventDefault()
        api.post("/sendOTP",userEmail)
            .then(({status,data})=>{
                console.log(status);
                console.log(data);
                if(data.status === 201){
                    
                    setReqOtpApiMsg({msg: "OTP Sent Sucessfully. Please Check your E-mail.", isError: false} )
                    setHasSentVerification(true)
                }else{
                    setReqOtpApiMsg({msg: data.message, isError: true} )
                }
            })
    }

    let verifyOTP = (e) =>{
        e.preventDefault()
        api.post("/verifyOTP",{...userEmail,...userOTP})
            .then(({status,data})=>{
                console.log(status);
                console.log(data);
                if(data.status === 201){
                    setVerifyOtpApiMsg({msg: "OTP Verified Sucessfully.", isError: false})
                    setIsVerified(true)
                }else{
                    setVerifyOtpApiMsg({msg: data.message, isError: true})
                }
            })
    }
    let sendRegistraionToAPi = (e) =>{
        e.preventDefault()
        if(formData.password !== formData.repassword) {
            setRegistrationApiMsg({msg: "Passwords Don't Match.", isError: true})
            return null;
        }else if(isNaN(formData.age)){
            setRegistrationApiMsg({msg: "Please enter a valid age.", isError: true})
            return null;
        }else if(isNaN(formData.phoneNo) || (formData.phoneNo.length<10)){
            setRegistrationApiMsg({msg: "Please enter a valid Phone number.", isError: true})
            return null;
        }
        api.post("/register",{...formData,...userEmail})
            .then(({status,data})=>{
                console.log(status);
                console.log(data);
                if(data.status === 201){
                    setShowConfetti(true)
                    setRegistrationApiMsg({msg: "Registration Sucessfull", isError: false})
                }else{
                    setRegistrationApiMsg({msg: data.message, isError: true})
                }
            })
    }
    
    return (
        <StyledPage>
            <Navbar />
                <h1 className="page-title">Registration</h1>
                <p className="page-subtitle">Welcome to Registration! Your final step for acquiring your Ticket!</p>
                <AnimatePresence>
                    {
                        !isVerified && !hasSentVerification &&
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1}}
                            exit={{ opacity: 0, height: 0, overflow: 'hidden' }}
                        >
                            <p className="page-subtitle-2">Automatic verification failed? <br/> Don't worry! Let's verify your payment manually:</p>
                            <form onChange={handleEmailFormChange} onSubmit={sendVerificationRequest}>
                                <div className="form-item-row">
                                    <label>E-mail:</label>
                                    <input name="email" placeholder="Ex: someone@internet.org" type="email" required/>
                                </div>
                                <button className="submit-button-1" type="submit" >Send OTP</button>
                            </form>
                            {reqOtpApiMsg  && <p className={reqOtpApiMsg.isError ? "error-message" : "success-message" }>{reqOtpApiMsg.msg}</p>}
                        </motion.div>
                    }
                </AnimatePresence>
                <AnimatePresence>
                    {
                        !isVerified && hasSentVerification &&
                        <motion.div
                            initial={{ opacity: 0}}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0, height: 0, overflow: 'hidden' }}
                        >
                            <p className="page-subtitle-2">Please Check your E-mail for the OTP:</p>
                            <form onChange={handleOTPFormChange} onSubmit={verifyOTP}>
                                <div className="form-item-row">
                                    <label>OTP:</label>
                                    <input className="otp-input" type="text" required/>
                                </div>
                                <button className="submit-button-1" type="submit">Verify OTP</button>
                                <button style={{marginLeft: 10}} className="submit-button-2" >Resend OTP</button>
                            </form>
                            { verifyOtpApiMsg &&  <p className={verifyOtpApiMsg.isError ? "error-message" : "success-message" }>{verifyOtpApiMsg.msg}</p>}
                        </motion.div>
                    }
                </AnimatePresence>
                <AnimatePresence>
                    {   
                        isVerified &&
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0, height: 0, overflow: 'hidden' }}
                        >   { 
                                showConfetti &&
                                    <Confetti
                                        width={window.innerWidth}
                                        height={window.innerHeight}
                                    />
                            }
                            <p className="page-subtitle-2">Payment Verified Sucessfully, Please enter following details to complete your account:</p>
                            <form onSubmit={sendRegistraionToAPi} onChange={handelFormChange}>
                                <div className="form-item-row">
                                    <label htmlFor="customerName">Name:</label>
                                    <input required name="customerName" type="text"/>
                                </div>
                                <div className="form-item-row">
                                    <label htmlFor="email">E-mail:</label>
                                    <input required defaultValue={userEmail.email} disabled name="email" type="email" />
                                </div>
                                <div className="form-item-row">
                                    <label htmlFor="password">Password</label>
                                    <input required name="password" type="password"/>
                                </div>
                                <div className="form-item-row">
                                    <label htmlFor="repassword">Repeat Password</label>
                                    <input required name="repassword" type="password"/>
                                </div>
                                <div className="form-item-row">
                                    <label htmlFor="phoneNo">Phone Number:</label>
                                    <input required name="phoneNo" type="text"/>
                                </div>
                                <div className="form-item-row">
                                    <label htmlFor="gender">Gender:</label>
                                    <select className="multiselect-input" required name="gender" defaultValue="M">
                                        <option value="M">Male</option>
                                        <option value="F">Female</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </div>
                                <div className="form-item-row">
                                    <label htmlFor="age">Age:</label>
                                    <input required name="age" type="text"/>
                                </div>
                                <div className="form-item-row">
                                    <label htmlFor="houseName">House Name:</label>
                                    <input required name="houseName" type="text"/>
                                </div>
                                <div className="form-item-row">
                                    <label htmlFor="address">Address:</label>
                                    <textarea className="address-input" required name="address" type="text"/>
                                </div>
                                <div className="form-item-row">
                                    <label htmlFor="pin">Pincode:</label>
                                    <input required name="pin" type="number"/>
                                </div>
                                <button className="submit-button-1" type="submit">Submit</button>
                            </form>
                            { registrationApiMsg &&  <p className={registrationApiMsg.isError ? "error-message" : "success-message" }>{registrationApiMsg.msg}</p>}

                        </motion.div>
                    }
               </AnimatePresence>
        </StyledPage> 
    )
}

export default RegistrationPage


let StyledPage = styled.div`
    margin-left: 350px;
    overflow: hidden;
    .page-title{
        font-size: 45px;
        margin: 0;
        padding: 0;
        margin-top: 20px;
    }
    .page-subtitle{
        font-size: 20px;
        margin: 10px 0;
        padding: 0;
    }
    .page-subtitle-2{
        font-weight: 500;
        font-size: 20px;
    }
    label{
        margin-right: 10px;
        font-weight: 500;
        font-size: 20px;
    }
    input{
        width: 350px;
        padding: 10px;
        border-radius: 5px;
        border: solid rgba(0, 0, 0, 0.801) 1px;
        box-shadow:  10px 10px 25px rgba(0, 0, 0, 0.096);
        font-weight: 800px;
        font-family: 'Poppins', sans-serif;
        font-size: 18px;
        outline: none;
        margin: 2px 0;
        transition: all 0.3s ease-in-out;
        :focus{
            box-shadow:  0 0px 25px rgba(255, 0, 0, 0.295);
        }
        -moz-appearance: textfield;
        ::-webkit-outer-spin-button,
        ::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
        }
    }
    .multiselect-input{
        width: 100px;
        padding: 5px 5px 5px 5px;
        border-radius: 5px;
        border: solid rgba(0, 0, 0, 0.801) 1px;
        box-shadow:  10px 10px 25px rgba(0, 0, 0, 0.096);
        font-weight: 800px;
        font-family: 'Poppins', sans-serif;
        font-size: 18px;
        outline: none;
        margin: 2px 0;
        transition: all 0.3s ease-in-out;
        :focus{
            box-shadow:  0 0px 25px rgba(255, 0, 0, 0.295);
        }
    }
    .submit-button-1{
        background-color: #C21D00;
        font-family: 'Poppins', sans-serif;
        color: white;
        border-radius: 30px;
        /* height: 35px; */
        padding: 10px 15px;
        border: none;
        font-weight: bold;
        font-size: 15px;
        cursor: pointer;
        outline: none;
        /* margin-top: 10px; */
    }
    .submit-button-2{
        background-color: #0061bb;
        font-family: 'Poppins', sans-serif;
        color: white;
        border-radius: 30px;
        /* height: 35px; */
        padding: 10px 15px;
        border: none;
        font-weight: bold;
        font-size: 15px;
        cursor: pointer;
        outline: none;
        /* margin-top: 10px; */
    }
    .form-item-row{
        display: flex;
        flex-direction: column;
        margin: 25px 0;
    }
    .error-message{
        padding: 20px;
        background-color: rgba(223, 0, 0, 0.664);
        max-width: 350px;
        color: white;
        border-radius: 10px;
        font-weight: bold;
        border: solid black 2px;
        box-shadow: 2px 10px 15px rgba(0, 0, 0, 0.164);
        margin-top: 20px;
    }
    .success-message{
        padding: 20px;
        background-color: rgba(2, 245, 2, 0.404);
        max-width: 350px;
        color: black;
        border-radius: 10px;
        font-weight: bold;
        border: solid #16ad02 2px;
        box-shadow: 2px 10px 15px rgba(0, 0, 0, 0.164);
        margin-top: 20px;
    }
    .otp-input{
        width: 140px;
        font-size: 40px;
        padding: 10px;
        font-weight: bold;
        color: black;
    }
    .address-input{
        min-height: 100px;
        width: 350px;
        padding: 10px;
        font-size: 18px;
        font-family: 'Poppins', sans-serif;

    }
`
