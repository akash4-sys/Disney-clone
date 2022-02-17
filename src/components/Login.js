import React from 'react';
import styled from 'styled-components';

function Login() {
    return (
        <Container>
            <CTA>
                <CTALogoOne src="/images/cta-logo-one.svg" alt="Login-background"/>
                <SignUp>GET ALL THERE</SignUp>
                <Description>
                    Lorem ipsum, dolor
                    sit amet consectetur adipisicing elit. Voluptate laboriosam,
                    magnam soluta deleniti eligendi nesciunt consequatur reiciendis
                    rem velit autem fuga aliquid minus! Earum placeat alias
                    consequatur veniam? Distinctio, ipsa.
                </Description>
                <CTALogoTwo src="/images/cta-logo-two.png" alt="Login-background"/>
            </CTA>
        </Container>
    )
}

export default Login;

const Container = styled.div`

    position:relative;
    height: calc(100vh - 70px);
    display:flex;
    align-items:top;
    justify-content:center;


    &:before{
        background-image:url("/images/login-background.jpg");
        background-repeat: no-repeat;
        background-position:top;
        background-size: cover;
        position:absolute;
        content:"";
        top:0;
        bottom:0;
        right:0;
        left:0;
        opacity:0.7;
        z-index: -1;
    }

`

const CTA = styled.div`
    max-width: 650px;
    padding: 80px 40px;
    width: 90%;
    height:40%;
    display:flex;
    flex-direction: column;
    margin-top: 100px;
    align-items: center;
`
    
const CTALogoOne = styled.img``
    
const SignUp = styled.a`
    width: 100%;
    background-color:#0063e5;
    font-weight:bold;
    padding: 17px 0; 
    color:#f9f9f9;
    border-radius: 4px;
    text-align:center;
    font-size: 18px;
    cursor:pointer;
    letter-spacing:1.5px;
    margin-top:8px;
    margin-bottom: 12px;

    &:hover{
        background-color: #0483ee;
    }
`

const Description = styled.p`
    font-size: 11px;
    letter-spacing: 1.5px;
    text-align: center;
    line-height:1.5;
`

const CTALogoTwo = styled.img`
    width:90%;
`