import React from 'react';
import styled from 'styled-components'

function SquareCard({cardImage,cardText}) {
    return (
        <StyledCard>
            <img className="tedx-card-icon" src={cardImage} alt=""/>
            <p className="tedx-card-text">{cardText}</p>
        </StyledCard>
    );
}

export default SquareCard;

let StyledCard = styled.div`
    background:linear-gradient(180deg, #E12200 0%, #BC1C00 100%);
    box-shadow:0px 10px 40px rgba(255, 0, 0, 0.58);
    width: 150px;
    height: 150px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px;
    margin: 10px;
    transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    text-decoration: none;
    cursor: pointer;
    :hover{
        transform: scale(1.1)
    }
    .tedx-card-icon{
        width: 80px;
        margin: 0;
        padding: 0;
    }
    .tedx-card-text{
        font-size: 20px;
        text-align: center;
        text-transform: uppercase;
        font-weight: 500;
        color: white;
        margin: 10px 0 0 0;
        padding: 0;
        line-height: 25px;
    }

`