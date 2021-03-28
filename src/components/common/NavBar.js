import React from 'react';
import styled from 'styled-components';
import logo from '../assets/logo.png'
import { useLocation, Link } from 'react-router-dom'

function NavBar({activePage}) {
    const location = useLocation();
    console.log(location);
    return (
        <StyledNavbar>
            <div className="link-logo-container">
                <div className="logo-container">
                    <img src={logo} alt=""/>
                </div>
                <div className="nav-links-container">
                    <div className={`nav-link ${location.pathname ==="/" ? 'nav-link-active' : 0 }`}>
                        <Link style={{ textDecoration: 'none' }} to="/">
                            <p>Home</p>
                        </Link>
                    </div>
                    <div className={`nav-link ${location.pathname ==="/stream" ? 'nav-link-active' : 0 }`}>
                        <Link style={{ textDecoration: 'none' }} to="/stream">
                            <p>Stream</p>
                        </Link>
                    </div>
                    <div className={`nav-link ${location.pathname ==="/payment" ? 'nav-link-active' : 0 }`}>
                        <Link style={{ textDecoration: 'none' }} to="/payemnt">
                            <p>Ticketing</p>
                        </Link>
                    </div>
                    <div className={`nav-link ${location.pathname ==="/registration" ? 'nav-link-active' : 0 }`}>
                        <Link style={{ textDecoration: 'none' }} to="/registration">
                            <p>Registration</p>
                        </Link>
                    </div>
                </div>

            </div>
            <div className="nav-links-container">
                <div className={`nav-link ${location.pathname ==="/login" ? 'nav-link-active' : 0 }`}>
                    <Link style={{ textDecoration: 'none' }} to="/login">
                        <p>Login</p>
                    </Link>
                </div>
            </div>
        </StyledNavbar>
            
    );
}

export default NavBar;

let StyledNavbar = styled.nav`
    position: fixed;
    left: 0;
    top:0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 250px;
    height: 100vh;
    background: linear-gradient(180deg,#E12200 0%, #BC1C00 100%);
    box-shadow: 10px 0px 40px rgb(255 0 0 / 58%);
    .link-logo-container{
        
    }
    .logo-container{
        background-color: black;
        padding: 10px;
        img{
            width: 100%;
        }
    }
    .nav-links-container{
        display: flex;
        flex-direction: column;
        margin: 20px 0 0 0; 
        .nav-link{
            background-color: rgb(255, 255, 255);
            margin: 10px;
            padding: 5px 15px;
            border-radius: 10px;
            text-transform: uppercase;
            font-weight: bold;
            box-shadow: 5px 5px 25px rgba(0, 0, 0, 0.068);
            cursor: pointer;
            p{
                color: black;
                font-size: 20px;
                margin: 0;
                padding: 5px;

            }
            
        }
        .nav-link-active{
            p{
                color: white!important;
            }
            background-color: black;
        }


    }
`