import React from 'react';
import styled from 'styled-components'
import loginIcon from '../../assets/log-in.svg'
import ticketIcon from '../../assets/tickets.svg'
import SquareCard from '../../common/SquareCard';
import { Link } from "react-router-dom";
import Confetti from 'react-confetti'


function Home(props) {
    return (
        <StyledHomePage>
            <section>
                <h1 className="welcome-to-tedx-cusat">Welcome to TEDxCUSAT Portal</h1>
            </section>
            <section className="tedx-cards-contanier">
                <Link style={{textDecoration: 'none'}} to="/login">
                    <SquareCard  cardImage={loginIcon} cardText={"Login"} />
                </Link>
                <Link style={{textDecoration: 'none'}} to="/payment">
                    <SquareCard  cardImage={ticketIcon} cardText={"Tickets & Registartion"} />
                </Link>
                <Link style={{textDecoration: 'none'}} to="/forgotPassword">
                    <SquareCard  cardImage="/key.svg" cardText={"Change Password"} />
                </Link>
            </section>
            <div className="confetti-container">
                <Confetti
                    width={window.innerWidth}
                    height={window.innerHeight}
                    className="payment-sucess-confetti"
                />
                <h1 className="wrap-up-text">And that’s a wrap! Thank you for tuning in for TEDxCUSAT 2021</h1>
             </div>
        </StyledHomePage>
    );
}

export default Home;

let StyledHomePage = styled.div`
    background: linear-gradient(45deg,rgba(0, 0, 0, 0.116) 0%, #ffffff 80%);
    display: flex;
    flex-direction: column;
    width: 100vw;
    min-height: 100vh;
    box-sizing: border-box;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    body{
        overflow-x: hidden!important;
    }
    .wrap-up-text{
        font-size: 20px;
    }
    .welcome-to-tedx-cusat{
        font-size: 30px;
    }
    .tedx-cards-contanier{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
    .important-instruction{
        margin-top: 50px;
        margin-bottom: 20px;
        min-width: 300px;
        width: 90vw;
        max-width: 550px;
        border-radius: 10px;
        padding: 20px;
        font-size: 20px;
        color: white;
        background: linear-gradient(180deg,#E12200 0%, #BC1C00 100%);
        box-shadow: 0px 10px 40px rgb(255 0 0 / 58%);
        box-sizing: border-box;
        text-align: left;
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
    .ticket-price{
        font-weight: bold;
    }
    @media screen and (max-width: 1080px){
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
        .ticket-page-title{
            font-size: 30px;
            text-align: center;
        }
        .tedxcusat-ticket{
            align-self: center;
        }
        .welcome-to-tedx-cusat{
            font-size: 25px;
        }
    }
    @media screen and (max-width: 468px){
        .important-instruction-title{
            font-size: 25px;
        }
        .welcome-to-tedx-cusat{
            font-size: 18px;
        }
        .important-instruction{
            width: 90%;
        }
    }
`

