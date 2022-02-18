import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase';
import { onAuthStateChanged, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import { selectUserName, selectUserPhoto, setUserLogin, setSignOut } from '../features/user/userSlice';

function Header() {

	const dispatch = useDispatch();
	const navigate = useNavigate();
	const userName = useSelector(selectUserName);
	const userPhoto = useSelector(selectUserPhoto);

	useEffect(() => {
		onAuthStateChanged(auth, user => {
			if(user) {
				dispatch( setUserLogin ({
					name: user.displayName,
					email: user.email,
					photo: user.photoURL
				}))
				navigate('/')
			}
		})
	}, [])

	const signIn = () => {
		signInWithPopup(auth, new GoogleAuthProvider()).then((result) => {
			let user = result.user;
			dispatch(setUserLogin({
				name: user.displayName,
				email: user.email,
				photo: user.photoURL
			}));
			navigate('/')
		})
	}

	const SignOut = () => {
		signOut(auth).then(() => {
			dispatch(setSignOut());
			navigate('/login')
		})
	}

	return (
		<Nav>
			<Logo src="/images/logo.svg" />
			{!userName ?
				(
					<LoginContainer>
						<Login onClick={signIn}>Login</Login>
					</LoginContainer>
				) :
				<>
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
					<UserImg src="/images/user.jpg" onClick={SignOut} alt="user Image" />
				</>
			}
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
    overflow-x:hidden;
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

const LoginContainer = styled.div`
	flex:1;
	display:flex;
	justify-content: flex-end;
`

const Login = styled.div`
	border: 1px solid #f9f9f9;
	border-radius:4px;
	margin: 10px 10px 10px 0px;
	padding: 12px 16px;
	letter-spacing: 1.5px;
	text-transform: uppercase;
	background-color: rgba(0, 0, 0, 0.6);
	cursor:pointer;
	transition: all 0.2 ease 0s;

	&:hover {
		background-color: #f9f9f9;
		color:#000;
		border-color: transparent;
	}
`