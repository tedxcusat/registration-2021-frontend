import React, { useEffect, useState, useContext } from 'react'
import styled from 'styled-components'
import Navbar from '../../common/NavBar'
import Confetti from 'react-confetti'


import { appContext } from "../../../appContext";
import { useLocation } from 'react-router-dom'


function RegistrationPage() {
   
    
    return (
        <StyledPage>
            <Navbar />
            <div>
            <h1>And that’s a wrap! Thank you for tuning in for TEDxCUSAT 2021</h1>
             <div className="confetti-container">
                <Confetti
                    width={window.innerWidth}
                    height={window.innerHeight}
                    className="payment-sucess-confetti"
                />
             </div>
            </div>
        </StyledPage> 
    )
}

export default RegistrationPage


let StyledPage = styled.div`
    margin-left: 350px;
    overflow: hidden;
    padding-bottom: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80vh;
    padding: 20px;
    .ensure-address{
        font-size: 15px;
        color: black;
        width: 300px;
        font-weight: bold;
        padding: 10px;
        background-color: rgba(255, 0, 0, 0.377);
        border-radius: 10px;
        border: 2px solid black;
    }
    .form-item-row-terms{
        display: flex;
        align-items: center;
        margin-bottom: 20px;
        label{
            font-size: 12px;
        }
        input{
            margin-right: 10px;
            width: 20px;
        }
    }
    .auto-verification-modal-container{
        width: 100vw;
        height: 100vh;
        box-sizing: border-box;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 2;
        background-color: rgba(0, 0, 0, 0.671); 
    }
    .auto-verification-modal{
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        background-color: white;
        border: 2px solid black;
        border-radius: 10px;
        display: flex;
        flex-direction: row;
        padding: 10px 20px;
        z-index: 3;
        img{
            width: 50px;
            margin-right: 10px;
        }
        p{
            font-weight: bol;
        }
    }
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
    .confetti-container{
        position: fixed;
        top: 0;
        left: 0;
        z-index: 100;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        img{
            width: 80%;
            margin: 40px 0;
            position: relative;
            top: 50%;
            left: 50%;
            transform: translate(-50%,0%)

        }
        .congrats-modal-title{
            font-size: 28px;
            padding: 0;
            margin: 0;
            font-weight: 600;
            text-align: center;
        }
        .congrats-modal-subtitle{
            font-size: 18px;
            padding: 0;
            margin: 0;
            font-weight: 600;
            text-align: center;
        }
    }
    .confetti-container-backdrop{
        width: 100vw;
        height: 100vh;
        background-color: rgba(255, 255, 255, 0.397);
        backdrop-filter: blur(10px);
        position: fixed;
        top: 0;
        left: 0;
        z-index: 95;
    }
    .congrats-modal{
        width: 80vw;
        min-width: 200px;
        padding: 20px;
        background-color: white;
        border-radius: 10px;
        border: solid 2px black;
        position: fixed;
        max-width: 800px;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
    }
    @media screen and (max-width: 1080px){
        margin-left: 220px;
    }
    @media screen and (max-width: 700px){
        margin-left: 20px;
        margin-top: 50px;
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
        .address-input{
            width: 90%
        }
        .congrats-modal{
            min-width: 80vw;
            width: 80vw;
            max-width: 80vw;
        }
        .congrats-modal-title{
            font-size: 20px!important;
        }
        .ensure-address{
            width: 250px;

        }
    }
`
