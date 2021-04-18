import * as React from 'react';
import styled from 'styled-components';

const Data = styled.div`
width:15vw;
height:100%;
background:rgba(0,0,0,0);
display:flex;
flex-direction:column;
align-items:center;
`;
interface movieData{
    Director:string,
    Genres:string,
    IMDB_Rating:string,
    Lead_Actors:string,
    Poster:string,
    Summary:string,
    Title:string,
    Year:string,
    id:string,
    imageURL:string
}
interface MovieDataProps{
    currentlyShown:movieData
}

const GraphicsBox = styled.div`
height:18vh;
width:100%;
position:relative;
`;

const ThumbNail = styled.img`
width:14vw;
height:14vh;
margin-top:25px;
position:absolute;
top:0;
right:0;
object-fit:cover;
object-position: 50% 50%;
`;

const Poster = styled.img`
width:4vw;
height:auto;
position:absolute;
bottom:0;
left:0;
`

const Title = styled.div`
font-family:Arial,Helvetica,sans-serif;
font-size:1.5em;
font-weight:bold;
margin-top:10px;
width:14vw;
height:3vh;
left:0;
`;
const Genres = styled.div`
font-family:Arial,Helvetica,sans-serif;
color:grey;
font-size:0.8em;
width:14vw;
heigth:1vh;
left:0;
`;

const MovieData = ({currentlyShown}:MovieDataProps) => {
    return <Data id={'moviedata'}>
        <GraphicsBox>
        <ThumbNail src={currentlyShown.imageURL}/>
        <Poster src={currentlyShown.imageURL}/> 
        </GraphicsBox>

        <Title>{currentlyShown.Title}</Title>
        <Genres>{currentlyShown.Genres}</Genres>
    </Data>
}

export default MovieData;