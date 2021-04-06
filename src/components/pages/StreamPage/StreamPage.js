import React from 'react';
import Confetti from 'react-confetti';
import styled from 'styled-components';
import NavBar from '../../common/NavBar';
import './bgStyles.css'

function StreamPage() {
    return(
        <StyledPage>
            <NavBar />
            <div 
                className="countdown-container"
            >
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
    );
}

export default StreamPage;

// let Player = ()=>{
//     return <>
//         <iframe
//         title="TEDxPlayer"
//         className="tedx-player"
//         src="https://app.onestream.live/embed?stream_url=https://app.onestream.live/api/v2/rtmp/auth/stream/cdn/index.m3u8?key=d_auth_201978_k5w2c1y2n"
//         width={window.innerWidth*0.5}
//         height={window.innerWidth*0.5*0.56}
//         frameBorder="0"
//         allowFullScreen
//         >
//         </iframe>
//     </>
// }


let StyledPage = styled.div`
    margin-left: 0px;
    padding-left: 250px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%);
    overflow: hidden;
    color: white;
    .confetti-container{
        position: fixed;
        top: 0;
        left: 0;
        z-index: 200;
    }
    .countdown-container{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        padding: 20px;

    }
    .stream-background{
        position: fixed;
        left: 0;
        top:  0;
        
    }
    .countdown-timer{
        font-size: 40px;
        font-family: 'Orbitron', sans-serif;
        color: #fff;
        -webkit-animation: neon1 1.5s ease-in-out infinite alternate;
        -moz-animation: neon1 1.5s ease-in-out infinite alternate;
        animation: neon1 1.5s ease-in-out infinite alternate;
    }
    @-webkit-keyframes neon1 {
        from {
            text-shadow: 0 0 10px rgba(255, 255, 255, 0.864), 0 0 20px rgba(255, 255, 255, 0.764), 0 0 30px rgba(255, 255, 255, 0.664), 0 0 40px rgba(255, 255, 255, 0.564), 0 0 70px rgba(255, 255, 255, 0.464), 0 0 80px rgba(255, 255, 255, 0.364), 0 0 100px rgba(255, 255, 255, 0.264);
        }
        to {
            text-shadow: 0 0 5px rgba(255, 255, 255, 0.864), 0 0 10px rgba(255, 255, 255, 0.764), 0 0 15px rgba(255, 255, 255, 0.664), 0 0 20px rgba(255, 255, 255, 0.564), 0 0 35px rgba(255, 255, 255, 0.464), 0 0 40px rgba(255, 255, 255, 0.364), 0 0 50px rgba(255, 255, 255, 0.264);
        }
    }
    @-moz-keyframes neon1 {
        from {
            text-shadow: 0 0 10px rgba(255, 255, 255, 0.864), 0 0 20px rgba(255, 255, 255, 0.764), 0 0 30px rgba(255, 255, 255, 0.664), 0 0 40px rgba(255, 255, 255, 0.564), 0 0 70px rgba(255, 255, 255, 0.464), 0 0 80px rgba(255, 255, 255, 0.364), 0 0 100px rgba(255, 255, 255, 0.264);
        }
        to {
            text-shadow: 0 0 5px rgba(255, 255, 255, 0.864), 0 0 10px rgba(255, 255, 255, 0.764), 0 0 15px rgba(255, 255, 255, 0.664), 0 0 20px rgba(255, 255, 255, 0.564), 0 0 35px rgba(255, 255, 255, 0.464), 0 0 40px rgba(255, 255, 255, 0.364), 0 0 50px rgba(255, 255, 255, 0.264);
        }
    }
    @keyframes neon1 {
        from {
            text-shadow: 0 0 10px rgba(255, 255, 255, 0.864), 0 0 20px rgba(255, 255, 255, 0.764), 0 0 30px rgba(255, 255, 255, 0.664), 0 0 40px rgba(255, 255, 255, 0.564), 0 0 70px rgba(255, 255, 255, 0.464), 0 0 80px rgba(255, 255, 255, 0.364), 0 0 100px rgba(255, 255, 255, 0.264);
        }
        to {
            text-shadow: 0 0 5px rgba(255, 255, 255, 0.864), 0 0 10px rgba(255, 255, 255, 0.764), 0 0 15px rgba(255, 255, 255, 0.664), 0 0 20px rgba(255, 255, 255, 0.564), 0 0 35px rgba(255, 255, 255, 0.464), 0 0 40px rgba(255, 255, 255, 0.364), 0 0 50px rgba(255, 255, 255, 0.264);
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

    @media screen and (max-width: 1080px){
        margin-left: 0px;
        padding-left: 180px;
    }
    @media screen and (max-width: 700px){
        margin-left: 0px;
        padding-left: 0px;
        .page-title{
            font-size: 28px;   
        }
        .page-subtitle{
            font-size: 15px;
        }
        .page-subtitle-2{
            font-size: 15px;
            
        }
        .TEDxPlayer{
            width: 60%;
        }
    }
    @media screen and (max-width: 468px){
        .submit-button-1{
            max-width: 100%;
        }
    }
`