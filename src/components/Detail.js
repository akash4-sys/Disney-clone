import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import { useParams } from 'react-router-dom';
import db from '../firebase';

function Detail() {

    const { id } = useParams();
    const [ movie, setMovie ] = useState({});

    useEffect(() => {
        const q = query(collection(db, 'movies'), orderBy('created', 'desc'));
        onSnapshot(q, (querySnapshot) => {
            const Movies = querySnapshot.docs.map((doc) => {
                return { id: doc.id, ...doc.data() }
            })

            let found = Movies.find(movie => movie.id === id);
            setMovie(found);
            // console.log(found)
        });
    }, [id]);

    return (
        <Container>
            <Background>
                <img src={movie.cardImg ? movie.cardImg : 'images/details.jpg'} alt="sung-jin-woo"/>
                {/* <img src={movie.cardImg} alt="sung-jin-woo"/> */}
            </Background>
            <ImageTitle>
                <img src="/images/viewers-marvel.png" alt="animezone"/>
            </ImageTitle>
            <Controls>
                <PlayButton>
                    <img src="/images/play-icon-black.png" alt="play"/>
                    <span>Play</span>
                </PlayButton>
                <TrailerButton>
                    <img src="/images/play-icon-white.png" alt="play"/>
                    <span>Trailer</span>
                </TrailerButton>
                <AddButton>
                    <span>+</span>
                </AddButton>
                <GroupWatchButton>
                    <img src="/images/group-icon.png" alt="watch"/>
                </GroupWatchButton>
            </Controls>
            <SubTitle>
                2019 / m / Family, Fantasy, kids, Animation
            </SubTitle>
            <Description>
                { movie.description ? movie.description : 'This is the story of the shadow monarch'}
            </Description>
        </Container>
    )
}

export default Detail;

const Container = styled.div`
    min-height: calc(100vh - 70px);
    padding: 0 calc(3.5vw + 5px);
    position:relative;
`

const Background = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    opacity: 0.8;

    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    `
    
const ImageTitle = styled.div`
    height: 30vh;
    width: 35vw;
    min-height: 170px;
    min-width:200px;
    margin-top:70px;

    img{
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`

const Controls = styled.div`
    display:flex;
    align-items: center;
`

const PlayButton = styled.button`
    border-radius: 4px;
    font-size: 15px;
    padding: 0px 24px;
    margin-right: 22px;
    display: flex;
    align-items: center;
    height: 56px;
    background: rgb(249, 249, 249);
    border:none;
    cursor:pointer;
    letter-spacing: 1.8px;

    &:hover{
        background: rgb(198, 198, 198);
    }
`

// inheriting Playbutton css
const TrailerButton = styled(PlayButton)`
    background: rgb(0, 0, 0, 0.3);
    border: 1px solid rgb(249, 249, 249);
    color:rgb(249, 249, 249);
    text-transform: uppercase;
`

const AddButton = styled.button`
    height: 44px;
    width: 44px;
    display:flex;
    justify-content: center;
    align-items: center;
    border-radius:50%;
    border: 2px solid white;
    background-color: rgba(0,0,0,0.6);
    cursor: pointer;
    margin-right: 16px;

    span{
        font-size: 30px;
        color: white;
    }
`

const GroupWatchButton = styled(AddButton)`
    background: rgb(0,0,0);
`

const SubTitle = styled.div`
    color:rgb(249,249,249);
    font-size:15px;
    min-height: 20px;
    margin-top:26px;
`

const Description = styled.div`
    line-height: 1.4;
    font-size: 20px;
    margin-top: 16px;
    color:rgb(249, 249, 249);
`