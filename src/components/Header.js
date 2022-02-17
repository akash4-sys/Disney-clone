import React from 'react';
import styled from 'styled-components'

function Header() {
    return (
        <Nav>
            <Logo src="/images/logo.svg" />
            <NavMenu>
                <a href="/">
                    <img src="/images/home-icon.svg" alt="Home icon" />
                    <span>HOME</span>
                </a>
                <a href="/">
                    <img src="/images/search-icon.svg" alt="Home icon" />
                    <span>SEARCH</span>
                </a>
                <a href="/">
                    <img src="/images/watchlist-icon.svg" alt="Home icon" />
                    <span>WATCHLIST</span>
                </a>
                <a href="/">
                    <img src="/images/original-icon.svg" alt="Home icon" />
                    <span>ORIGINAL</span>
                </a>
                <a href="/">
                    <img src="/images/movie-icon.svg" alt="Home icon" />
                    <span>MOVIES</span>
                </a>
                <a href="/">
                    <img src="/images/series-icon.svg" alt="Home icon" />
                    <span>SERIES</span>
                </a>
            </NavMenu>
            <UserImg src="/images/user.jpg" alt="user Image"/>
        </Nav>
    )
}

export default Header

const Nav = styled.nav`
    height: 70px;
    background-color: #090b13;
    display:flex;
    align-item:center;
    padding: 0 36px;
`

const Logo = styled.img`
    width:80px;
`
// Here the div tag name is just replaced by navmenu and every tag
// can be accessed in nest in same order
const NavMenu = styled.div`

    display: flex;
    flex:1;  
    align-items: center;
    margin-left:25px;

    a{
        display: flex;
        margin-left:20px;
        text-decoration:none;
        padding:0 12px;
        cursor:pointer;
        align-items:center;

        img{
            height: 20px;
        }

        span {
            font-size: 13px;
            letter-spacing:1.42px;
            color:white;
            position:relative;


            // just like a div tag
            &:after{
                content: "";
                height: 2px;
                background-color: white;
                position:absolute;
                right:0;
                left:0;
                bottom:-6px;
                opacity:0;
                transform-origin: left center;
                transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
                transform: scaleX(0);
            }

        }

        &:hover{
            span:after{
                transform:scaleX(1);
                opacity:1;
            }
        }
    }
`

const UserImg = styled.img`
    width:48px;
    height:48px;
    border-radius:50%;
    cursor:pointer;
    margin-top:12px;
`