import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import ticketIcon from '../../assets/ticket.png'


function Payments() {
    useEffect(()=>{
        const Script = document.createElement("script");
        const Form = document.getElementById('tedx-payment-button');
        Script.setAttribute('src','https://checkout.razorpay.com/v1/payment-button.js')
        Script.setAttribute('data-payment_button_id','pl_Gpxvgf0nur5e1Y')
        Form.appendChild(Script);
    },[])
    return (
        <StyledTicketPage>
            <h1>Get a Ticket</h1>
            {/* <img className="tedxcusat-ticket" src={ticketIcon} alt=""/> */}
            <div className="important-instruction">
                <h3 className="important-instruction-title">Important Instructions:</h3>
                <p className="important-steps"><span className="imp-step">Step 1:</span> Pay <span className="ticket-price-card">₹199</span> for ticket.</p>
                <p className="important-steps"><span className="imp-step">Step 2:</span> After Sucessfull payment, you will be prompted to verify your payment.</p>
                <p className="important-steps"><span className="imp-step">Step 3:</span> After Sucessfull verification, fill the registration form.</p>
                <p className="important-steps"><span className="imp-step">Step 4:</span> After Registration you can login in on the event day to stream the event.</p>
                <p className="ticket-price">Ticket Price: ₹199</p>
                <form id="tedx-payment-button"></form>
                <p className="ticket-price">After Sucessfull payment, register yourself <Link style={{ color: 'black'}} to="/register">here</Link></p>
            </div>
        </StyledTicketPage>
    )
}

export default Payments

let StyledTicketPage = styled.section`
    display: flex;
    flex-direction: column;
    overflow: hidden;
    max-width: 100vw;
    box-sizing: border-box;
    /* background-color: blue; */
    box-sizing: border-box;
    margin: 0;
    .tedxcusat-ticket{
        width: 500px;
    }
    .important-instruction{
        min-width: 300px;
        width: 90vw;
        border-radius: 10px;
        padding: 20px;
        font-size: 20px;
        color: white;
        background: linear-gradient(180deg,#E12200 0%, #BC1C00 100%);
        box-shadow: 0px 10px 40px rgb(255 0 0 / 58%);
        box-sizing: border-box;
        max-width: 700px;
        /* align-self: center; */
        p{
            margin: 10px 0;
            padding: 0;
        }
    }
    .important-instruction-title{
        margin: 0;
        padding: 0;
        font-size: 25px;
        font-weight: 800;
        text-transform: uppercase;
    }
    .ticket-price-card{
        background-color: white;
        padding: 3px 10px;
        margin: 0 5px;
        border-radius: 6px;
        font-weight: 600;
        color: black;
    }
    .important-steps{
        font-size: 20px;
    }
    .imp-step{
        font-weight:800;
        text-transform: uppercase;

    }
    #tedx-payment-button{
        transform: scale(1.20);
        transform-origin: left;
        margin: 20px;   
    }
    .ticket-price{
        font-weight: bold;
    }
    @media screen and (max-width: 468px){
        .important-instruction-title{
            font-size: 25px;
        }
        /* .important-instruction{
            width: 100%!important;
        } */
    }
`