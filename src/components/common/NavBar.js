import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import logo from '../assets/logo.png'
import { useLocation, Link } from 'react-router-dom'
import HamburgerMenu from 'react-hamburger-menu'
import { AnimatePresence, motion } from 'framer-motion';
import { appContext } from "../../appContext";

function NavBar({activePage}) {
    let { isAuthenticated } = useContext(appContext)
    const location = useLocation();
    let [isHamOpen,setIsHamOpen] = useState(false)
    console.log(location);
    return (
    <>
        <StyledNavbar>
            <div className="link-logo-container">
                <div className="logo-container">
                    <img src={logo} alt=""/>
                </div>
                <div className="nav-links-container">
                    <div className={`nav-link ${location.pathname ==="/" ? 'nav-link-active' : '' }`}>
                        <Link style={{ textDecoration: 'none' }} to="/">
                            <p>Home</p>
                        </Link>
                    </div>
                    <div className={`nav-link ${location.pathname ==="/stream" ? 'nav-link-active' : '' }`}>
                        <Link style={{ textDecoration: 'none' }} to="/stream">
                            <p>Stream</p>
                        </Link>
                    </div>
                    { 
                    !isAuthenticated &&
                        <div className={`nav-link ${location.pathname ==="/payment" ? 'nav-link-active' : '' }`}>
                            <Link style={{ textDecoration: 'none' }} to="/payment">
                                <p>Ticketing</p>
                            </Link>
                        </div>
                    }
                    { 
                    !isAuthenticated &&
                    <div className={`nav-link ${location.pathname ==="/registration" ? 'nav-link-active' : '' }`}>
                        <Link style={{ textDecoration: 'none' }} to="/registration">
                            <p>Registration</p>
                        </Link>
                    </div>
                    }
                </div>

            </div>
            <div className="nav-links-container">
                <div className={`nav-link ${location.pathname ==="/login" ? 'nav-link-active' : '' }`}>
                    <Link style={{ textDecoration: 'none' }} to={`/${isAuthenticated ? "logout" : "login"}`}>
                        <p>{isAuthenticated ? "Logout" : "Login"}</p>
                    </Link>
                </div>
            </div>
            <HamburgerMenu
                isOpen={isHamOpen}
                menuClicked={()=>{setIsHamOpen(!isHamOpen)}}
                width={22}
                height={18}
                strokeWidth={3}
                rotate={0}
                color='white'
                borderRadius={0}
                animationDuration={0.3}
                className="ham-menu"
            />
        </StyledNavbar>
        <AnimatePresence>
            {isHamOpen &&
                <StyledHamMenu
                    initial={{ height: 0, overflow: 'hidden'}}
                    animate={{ height: 400, overflow: 'hidden' }}
                    exit={{  height: 0, opacity: 0, overflow: 'hidden' }}
                >
                    <div className="ham-links-container">
                        <div className={`ham-link ${location.pathname ==="/" ? 'ham-link-active' : '' }`}>
                            <Link style={{ textDecoration: 'none' }} to="/">
                                <p>Home</p>
                            </Link>
                        </div>
                        <div className={`ham-link ${location.pathname ==="/stream" ? 'ham-link-active' : '0' }`}>
                            <Link style={{ textDecoration: 'none' }} to="/stream">
                                <p>Stream</p>
                            </Link>
                        </div>
                        <div className={`ham-link ${location.pathname ==="/payment" ? 'ham-link-active' : '0' }`}>
                            <Link style={{ textDecoration: 'none' }} to="/payment">
                                <p>Ticketing</p>
                            </Link>
                        </div>
                        <div className={`ham-link ${location.pathname ==="/registration" ? 'ham-link-active' : '0' }`}>
                            <Link style={{ textDecoration: 'none' }} to="/registration">
                                <p>Registration</p>
                            </Link>
                        </div>
                        <div className={`ham-link ${location.pathname ==="/login" ? 'ham-link-active' : '0' }`}>
                        <Link style={{ textDecoration: 'none' }} to={`/${isAuthenticated ? "logout" : "login"}`}>
                            <p>{isAuthenticated ? "Logout" : "Login"}</p>
                        </Link>
                        </div>
                    </div>
                </StyledHamMenu>
            
            }
        </AnimatePresence>
    </>
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
    z-index: 50;
    .ham-menu{
        margin-right: 30px;
        margin-top: auto;
        margin-bottom: auto;
        cursor: pointer;
        display: none;
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

    

    @media screen and (max-width: 1080px){

        width: 180px;
        .nav-link{
            p{
                font-size: 15px!important;
            }
        }
    }
    @media screen and (max-width: 700px){
        flex-direction: row;
        box-sizing: border-box;
        width: 100vw;
        height: 50px;
        justify-content: space-between;
        .logo-container{
            max-width: 120px;
        }
        .link-logo-container{
            display: flex;
            flex-direction: row
        }
        .nav-links-container{
            display: none;
            flex-direction: column;
        }
        .nav-links-container{
            margin: 0;
            padding: 0;
        }
        .nav-link{
            padding: 0 0px;
            p{
                font-size: 12px!important;
                padding: 0!important;
            }
            /* margin: 0!important; */
        }
        .ham-menu{
            display: unset;
        }
    }
`

let StyledHamMenu = styled(motion.div)`
    position: fixed;
    width: 100vw;
    z-index: 49;
    background-color: white;
    box-shadow: 0 10px 50px rgb(0 0 0 / 37%);
    box-sizing: border-box;
    top: 0;
    left: 0;
    padding: 20px;
    padding-top: 35px;
    .ham-link{
        text-transform: uppercase;
        text-align: center;
        font-weight: bold;
        font-size: 20px;
        p{
            color: black!important;
            padding: 10px;
        }
    }
    .ham-link-active{
        border-radius: 10px;
        background-color: black;
        p{
            color: white!important;
        }
    }
`