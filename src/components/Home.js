import React, { useEffect } from 'react';
import { useDispatch } from "react-redux";
import styled from 'styled-components';
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import db from '../firebase';
import ImgSlider from './ImgSlider';
import Viewers from './Viewers';
import Movies from './Movies';
import { setMovies } from "../features/movie/movieSlice";

function Home() {

    const dispatch = useDispatch();

    // This code to add data to database as direct uploading isn't working
    // const handleSubmit = async (e) => {
    //     e.preventDefault()
    //     try {
    //         await addDoc(collection(db, 'movies'), {
    //             title: "Marvel",
    //             description: "This is the start of new era",
    //             completed: true,
    //             cardImg:"https://firebasestorage.googleapis.com/v0/b/disney-clone-c7b69.appspot.com/o/movies%2F1166683.jpg?alt=media&token=1cb75c55-14e8-4f05-87bf-346c356eb890",
    //             created: Timestamp.now()
    //         })
    //     } catch (err) {
    //         alert(err)
    //     }
    // }

    // useEffect takes place whenever it's component is reloaded, the empty bracket
    // defines it should reload whenever component reloads
    useEffect(() => {
        // firebase is a real time database, it sends snapshots every time a change occurs in database
        const q = query(collection(db, 'movies'), orderBy('created', 'desc'));
        onSnapshot(q, (querySnapshot) => {
            const tempMovies = querySnapshot.docs.map((doc) => {
                // console.log(doc.data())
                return { id: doc.id, ...doc.data() }
            })
            dispatch(setMovies(tempMovies));
        });
    }, []);

    return (
        <Container>
            {/* <form onSubmit={handleSubmit} className='addTask' name='addTask'>
                <button type="submit">Submit</button>
            </form> */}
            <ImgSlider />
            <Viewers />
            <Movies />
        </Container>
    )
}

export default Home;

const Container = styled.main`
    min-height: calc(100vh - 70px);
    padding: 0 calc(3.5vw + 5px);
    position:relative;
    overflow:hidden;

    &:before{
        background: url("images/home-background.png") center center;
        background-size: cover;
        background-repeat: no-repeat;
        background-position:fixed;    
        position:absolute;
        content:"";
        top:0;
        left:0;
        right:0;
        bottom: 0;
        z-index: -1;  
    }
`