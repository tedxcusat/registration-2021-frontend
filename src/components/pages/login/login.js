import React, { useState, useContext } from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';

import { appContext } from "../../../appContext";
import NavBar from '../../common/NavBar';

function Login() {
    let { api } = useContext(appContext)
    let [formData,setFormData] = useState({})
    let [apiMsg,setApiMsg] = useState(null)
    let handleFormChange = (e)=>{
        setFormData({  ...formData , [e.target.name] : e.target.value })
        console.log(formData);
    }
    let handleFormSubmit = (e)=>{
        e.preventDefault()
        api.post('/login',formData).then(({status,data})=> {
            console.log(data);
            if(data.status===201){
                setApiMsg({
                    isError: false,
                    msg: "Successfully loggined"
                })
                localStorage.setItem('tedx-cusat-token-data',JSON.stringify(data))
            }else if(data.status!==201){
                setApiMsg({
                    isError: true,
                    msg: "Some Error occur red."
                })
            }
        })
    }
    return(
        <StyledPage>
            <NavBar />
            <h1 className="page-title">Login Page</h1>
            <p className="page-subtitle">Before you login make sure you have complete the payment and registration</p>
            <form onSubmit={handleFormSubmit} onChange={handleFormChange}>
                <div className="form-item-row">
                    <label htmlFor="customerEmail">Email Id:</label>
                    <input type="customerEmail" name="emailId" required/>
                </div>
                <div className="form-item-row">
                    <label>Password:</label>
                    <input type="password" name="password"  required/>
                </div>
                <input className="submit-button-1" type="submit" value="Login" />
            </form>
            <Link  to="/payment">
                <h2 className="not-yet-registered">Not yet registered? Get your tickets now!</h2>
            </Link>
            {apiMsg && apiMsg.msg}
        </StyledPage>
    );
}

export default Login;

let StyledPage = styled.div`
    margin-left: 310px;
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
    .not-yet-registered{
        font-size: 15px;
        margin-top: 30px;
    }
    .form-item-row{
        display: flex;
        flex-direction: column;
        margin: 25px 0;
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
        width: 95%;
        max-width: 370px;
        /* margin-top: 10px; */
    }

    @media screen and (max-width: 1080px){
        margin-left: 220px;
    }
    @media screen and (max-width: 700px){
        margin-left: 20px;
        margin-top: 80px;
        .page-title{
            font-size: 28px;   
        }
        .page-subtitle{
            font-size: 15px;
        }
        .page-subtitle-2{
            font-size: 15px;
        }
    }
    @media screen and (max-width: 468px){
        input{
            width: 90%;
        }
        .submit-button-1{
            max-width: 100%;
        }
        .address-input{
            width: 90%
        }
    }
`