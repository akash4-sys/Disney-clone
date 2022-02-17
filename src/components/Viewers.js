import React from 'react';
import styled from 'styled-components';

function Viewers() {
    return (
        <Container>
            <Wrap>
                <img src="/images/viewers-marvel.png" alt="Disney" />
            </Wrap>
            <Wrap>
                <img src="/images/viewers-starwars.png" alt="Disney" />
            </Wrap>
            <Wrap>
                <img src="/images/viewers-pixar.png" alt="Disney" />
            </Wrap>
            <Wrap>
                <img src="/images/viewers-disney.png" alt="Disney" />
            </Wrap>
            <Wrap>
                <img src="/images/viewers-national.png" alt="Disney" />
            </Wrap>
        </Container>
    )
}

export default Viewers;

const Container = styled.div`
    margin-top:30px;
    display:grid;
    padding: 30px 0px 26px;
    // 5 columns with minimum width of each 0 and 1fr is as much width as possible
    grid-template-columns: repeat(5, minmax(0, 1fr));
    grid-gap:25px;
`

const Wrap = styled.div`

    border: 3px solid rgba(249, 249, 249, 0.1);
    border-radius: 10px;
    box-shadow: rgba( 0 0 0 / 69%) 0px 26px 30px -10px,
        rgb(0 0 0 / 73%) 0px 16px 10px -10px;

    // Most of the times 250ms is used because it gives perfect effect
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

        img{
            width: 100%;
            height:100%;
            object-fit: cover;
        }
     
        
    // This is like Wrap:hover & targets parent element
    &:hover{
        box-shadow: rgba( 0 0 0 / 80%) 0px 40px 58px -16px,
            rgb(0 0 0 / 72%) 0px 30px 22px -10px;
        transform: scale(1.05);
        border-color: rgba(249,249,249,0.8);

        // This image is not shown properly but it's giving nice effects
        background: url("/images/slider-scale.jpg")
    }
`
