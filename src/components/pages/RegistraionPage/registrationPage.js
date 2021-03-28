import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Navbar from '../../common/NavBar'

function RegistrationPage() {
    let[msg,setMsg]=useState(null)
    let [formData,setFormData] = useState([])
    let handelFormChange = (e) =>{
        setFormData({...formData, [e.target.name] : e.target.value})
        console.log(formData);
    }
    let [isVerified, setIsVerified] = useState(false)
    let [hasSentVerification, setHasSentVerification] = useState(false)
    let sendToAPi = (e) =>{
        e.preventDefault()
        setMsg({msg: "asljdnl",type: "error"})
    }
    let sendVerificationRequest = (e) =>{
        e.preventDefault()
        setHasSentVerification(true)
    }
    let verifyOTP = (e) =>{
        e.preventDefault()
        setIsVerified(true)
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
                        <form onSubmit={sendVerificationRequest}>
                            <div>
                                <label>E-mail:</label>
                                <input type="email" required/>
                            </div>
                            <button type="submit">Send OTP</button>
                        </form>
                    </div>
                }
                {
                    !isVerified && hasSentVerification &&
                    <div>
                        <p>Please Check your E-mail for the OTP:</p>
                        <p>Resend OTP</p>
                        <form onSubmit={verifyOTP}>
                            <div>
                                <label>OTP</label>
                                <input type="text" required/>
                            </div>
                            <button type="submit">Verify OTP</button>
                        </form>
                    </div>
                }
                {   
                    isVerified &&
                    <form onSubmit={sendToAPi} onChange={handelFormChange}>
                        <div>
                            <label htmlFor="customerName">customerName</label>
                            <input name="customerName" type="text"/>
                        </div>
                        <div>
                            <label htmlFor="email">email</label>
                            <input name="email" type="email" required/>
                        </div>
                        <div>
                            <label htmlFor="password">password</label>
                            <input name="password" type="password"/>
                        </div>
                        <div>
                            <label htmlFor="phoneNo">phoneNo</label>
                            <input name="phoneNo" type="number"/>
                        </div>
                        <div>
                            <label htmlFor="gender">gender</label>
                            <select name="gender" defaultValue="M">
                                <option value="M">Male</option>
                                <option value="F">Female</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="age">age</label>
                            <input name="age" type="number"/>
                        </div>
                        <div>
                            <label htmlFor="houseName">houseName</label>
                            <input name="houseName" type="text"/>
                        </div>
                        <div>
                            <label htmlFor="address">address</label>
                            <textarea name="address" type="text"/>
                        </div>
                        <div>
                            <label htmlFor="pin">pin</label>
                            <input name="pin" type="number"/>
                        </div>
                        <button type="submit">Submit</button>
                    </form>
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
