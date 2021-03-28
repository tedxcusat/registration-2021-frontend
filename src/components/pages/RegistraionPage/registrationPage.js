import React, { useEffect, useState, useContext } from 'react'
import styled from 'styled-components'
import Navbar from '../../common/NavBar'

import { appContext } from "../../../appContext";


function RegistrationPage() {
    let { api } = useContext(appContext)
    let[msg,setMsg]=useState(null)
    let [reqOtpApiMsg,setReqOtpApiMsg] = useState(null)
    let [verifyOtpApiMsg,setVerifyOtpApiMsg] = useState(null)
    let [registrationApiMsg,setRegistrationApiMsg] = useState(null)
    let [formData,setFormData] = useState(null)
    let [isVerified, setIsVerified] = useState(false)
    let [hasSentVerification, setHasSentVerification] = useState(false)
    let [userEmail,setUserEmail] = useState(null)
    let [userOTP,setUserOTP] = useState(null)
    
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
        setReqOtpApiMsg("Sending OTP....")
        e.preventDefault()
        api.post("/sendOTP",userEmail)
            .then(({status,data})=>{
                console.log(status);
                console.log(data);
                if(data.status === 201){
                    setReqOtpApiMsg("OTP Sent Sucessfully. Please Check your E-mail.")
                    setHasSentVerification(true)
                }else{
                    setReqOtpApiMsg(data.message)
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
                    setVerifyOtpApiMsg("OTP Verified Sucessfully.")
                    setIsVerified(true)
                }else{
                    setVerifyOtpApiMsg(data.message)
                }
            })
    }
    let sendRegistraionToAPi = (e) =>{
        e.preventDefault()
        api.post("/register",{...formData,...userEmail})
            .then(({status,data})=>{
                console.log(status);
                console.log(data);
                if(data.status === 201){
                    setRegistrationApiMsg("Registration Sucessfull")
                }else{
                    setRegistrationApiMsg(data.message)
                }
            })
    }
    
    return (
        <StyledPage>
            <Navbar />
                <h1 className="page-title">Registration</h1>
                <p className="page-subtitle">Welcome to Registration! Your final step for acquiring.</p>
                {
                    !isVerified && !hasSentVerification &&
                    <div>
                        <p>Let's verify your payment first:</p>
                        <form onChange={handleEmailFormChange} onSubmit={sendVerificationRequest}>
                            <div>
                                <label>E-mail:</label>
                                <input name="email" type="email" required/>
                            </div>
                            <button type="submit" >Send OTP</button>
                        </form>
                        {reqOtpApiMsg && <p>{reqOtpApiMsg}</p>}
                    </div>
                }
                {
                    !isVerified && hasSentVerification &&
                    <div>
                        <p>Please Check your E-mail for the OTP:</p>
                        <form onChange={handleOTPFormChange} onSubmit={verifyOTP}>
                            <div>
                                <label>OTP</label>
                                <input type="text" required/>
                            </div>
                            <button type="submit">Verify OTP</button>
                            <button>Resend OTP</button>
                        </form>
                        { verifyOtpApiMsg &&  <p>{verifyOtpApiMsg}</p>}
                    </div>
                }
                {   
                    isVerified &&
                    <div>

                        <form onSubmit={sendRegistraionToAPi} onChange={handelFormChange}>
                            <div>
                                <label htmlFor="customerName">customerName</label>
                                <input required name="customerName" type="text"/>
                            </div>
                            <div>
                                <label htmlFor="email">email</label>
                                <input required defaultValue={userEmail.email} disabled name="email" type="email" required/>
                            </div>
                            <div>
                                <label htmlFor="password">password</label>
                                <input required name="password" type="password"/>
                            </div>
                            <div>
                                <label htmlFor="phoneNo">phoneNo</label>
                                <input required name="phoneNo" type="number"/>
                            </div>
                            <div>
                                <label htmlFor="gender">gender</label>
                                <select required name="gender" defaultValue="M">
                                    <option value="M">Male</option>
                                    <option value="F">Female</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="age">age</label>
                                <input required name="age" type="number"/>
                            </div>
                            <div>
                                <label htmlFor="houseName">houseName</label>
                                <input required name="houseName" type="text"/>
                            </div>
                            <div>
                                <label htmlFor="address">address</label>
                                <textarea required name="address" type="text"/>
                            </div>
                            <div>
                                <label htmlFor="pin">pin</label>
                                <input required name="pin" type="number"/>
                            </div>
                            <button type="submit">Submit</button>
                        </form>
                        {registrationApiMsg && <p>{registrationApiMsg}</p>}
                    </div>
                }
                {
                    msg && <div>{msg.msg + " "+ msg.type }</div>
                }
        </StyledPage> 
    )
}

export default RegistrationPage


let StyledPage = styled.div`
    margin-left: 350px;
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
`
