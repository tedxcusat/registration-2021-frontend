import React, { useEffect, useContext } from 'react'
import styled from 'styled-components'
import ticketIcon from '../../assets/ticket.png'
import NavBar from '../../common/NavBar'
import { appContext } from "../../../appContext";
import { Redirect } from 'react-router-dom'
import { motion } from "framer-motion"


function Payments() {
    let { isAuthenticated } = useContext(appContext)
    useEffect(()=>{
        const Script = document.createElement("script");
        const Form = document.getElementById('tedx-payment-button');
        Script.setAttribute('src','https://checkout.razorpay.com/v1/payment-button.js')
        Script.setAttribute('data-payment_button_id','pl_Gpxvgf0nur5e1Y')
        Form.appendChild(Script);
    },[])
    return (
        <StyledTicketPage>
            <NavBar />
            {isAuthenticated && <Redirect to="/stream" />}
            <motion.div
                initial={{ opacity: 0, translateX: 200}}
                animate={{ opacity: 1, translateX: 0}}
                exit={{ opacity: 0 }}
                className="page-container"
            >
                <h1 className="ticket-page-title">Get a Ticket</h1>
                <img className="tedxcusat-ticket" src={ticketIcon} alt=""/>
                <div className="important-instruction">
                    <h3 className="important-instruction-title">Important Instructions:</h3>
                    <p className="important-steps"><span className="imp-step">Step 1:</span> Pay <span className="ticket-price-card">₹199</span> for ticket.</p>
                    <p className="important-steps"><span className="imp-step">Step 3:</span> After Sucessfull payment verification, fill the registration form. 
                    If Automatic payment fails, you will be prompted to verify your payment manually.</p>
                    <p className="important-steps"><span className="imp-step">Step 4:</span> After Registration you can login in on the event day to stream the event.</p>
                    <p className="ticket-price">Ticket Price: ₹199</p>
                    <p className="ticket-price">By proceeding to payment, you are accepting our  <a href="https://tedxcusat.in/terms.pdf" > Terms & Conditions.</a> </p>
                    <form id="tedx-payment-button"></form>
                    <p className="ticket-price">Ticket Price: ₹199</p>
                </div>
                
            </motion.div>
        </StyledTicketPage>
    )
}

export default Payments

let StyledTicketPage = styled.section`
    display: flex;
    flex-direction: row;
    overflow: hidden;
    max-width: 100vw;
    box-sizing: border-box;
    /* background-color: blue; */
    padding-left: 350px;
    margin: 0;
    .page-container{
        display: flex;
        flex-direction: column;
        overflow: hidden;
    }
    .ticket-page-title{
        font-size: 45px;
    }
    .tedxcusat-ticket{
        width: 500px;
    }
    .important-instruction{
        margin-top: 50px;
        margin-bottom: 100px;
        min-width: 300px;
        width: 90vw;
        border-radius: 10px;
        padding: 20px;
        font-size: 20px;
        color: white;
        background: linear-gradient(180deg,#E12200 0%, #BC1C00 100%);
        box-shadow: 5px 10px 20px rgb(255 0 0 / 58%);
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
    @media screen and (max-width: 1080px){
        padding-left: 220px;
        .tedxcusat-ticket{
            width: 90%;
            max-width: 300px;
        }
        #tedx-payment-button{
            transform: scale(1);
        }
        .important-instruction{
            width: 95%;
            align-self: center;
        }
        .important-instruction-title{
            font-size: 18px;
        }
        .important-steps{
            font-size: 15px;
        }
        .ticket-price{
            font-size: 15px;
        }
        
    }
    @media screen and (max-width: 700px){
        padding-left: 10px;
        padding-top: 50px;
        .ticket-page-title{
            font-size: 30px;
            text-align: center;
        }
        .tedxcusat-ticket{
            align-self: center;
        }
    }
    @media screen and (max-width: 468px){
        .important-instruction-title{
            font-size: 25px;
        }
    }

`