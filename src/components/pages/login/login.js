import React, { useState, useContext } from 'react';
import { Link } from "react-router-dom";

import { appContext } from "../../../appContext";

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
        <div>
            <h1>Login Page</h1>
            <p>Before you login make sure you have complete the payment and registration</p>
            <form onSubmit={handleFormSubmit} onChange={handleFormChange}>
                <label>
                    Email Id:
                    <input type="customerEmail" name="emailId" required/>
                </label>

                <label>
                    Password:
                    <input type="password" name="password"  required/>
                </label>

                <input type="submit" value="Submit" />
            </form>
            <Link style={{textDecoration: 'none'}} to="/payment">
                <h2>Go to payment an registration</h2>
            </Link>
            {apiMsg && apiMsg.msg}
        </div>
    );
}

export default Login;