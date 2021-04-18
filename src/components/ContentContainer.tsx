import * as React from 'react';
import {useState} from 'react';
import styled from 'styled-components';
import MovieData from './MovieData';
import PosterContainer from './PosterContainer';
import SideNavBar from './SideNavBar'

const Container = styled.div`
display:flex;
flex-direction:row;
position:relative;
height:70vh;
width:60vw;
`;

const ContentContainer = () => {
    const [currentlyShown,setCurrentlyShown] = useState({});

    return <Container id={'contentcontainer'}>
        <SideNavBar/>
        <PosterContainer setCurrentlyShown={setCurrentlyShown} />
        <MovieData currentlyShown={currentlyShown}/>
        </Container>
}

export default ContentContainer;