import React from 'react';
import styled from 'styled-components'
import loginIcon from '../../assets/log-in.svg'
import ticketIcon from '../../assets/tickets.svg'
import SquareCard from '../../common/SquareCard';
import { Link } from "react-router-dom";

function Home(props) {
    return (
        <StyledHomePage>
            <section>
                <h1>Welcome to TEDxCUSAT Portal</h1>
            </section>
            <section className="tedx-cards-contanier">
                <Link style={{textDecoration: 'none'}} to="/login">
                    <SquareCard  cardImage={loginIcon} cardText={"Login"} />
                </Link>
                <Link style={{textDecoration: 'none'}} to="/payment">
                    <SquareCard  cardImage={ticketIcon} cardText={"Tickets & Registartion"} />
                </Link>
            </section>
        </StyledHomePage>
    );
}

export default Home;

let StyledHomePage = styled.div`
    background: linear-gradient(45deg,#ffffff 0%, #ffffff 100%);
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    .tedx-cards-contanier{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
`

