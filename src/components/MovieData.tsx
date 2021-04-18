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

const ButtonContainer = styled.div`
width:14vw;
height:5vh;
display:flex;
flex-direction:row;
justify-content:center;
align-items:center;
`;
const WatchButton = styled.button`
border:none;
border-radius:15px;
font-size:0.8em;
font-weight:bold;
background-color:#A742EB;
width:5vw;
height:3vh;
color:white;
margin-right:10px;
`;

const AddButton = styled.button`
border:none;
border-radius:15px;
font-size:0.8em;
font-weight:bold;
background-color:light-grey;
width:6vw;
height:3vh;
`;
const RatingAndYear = styled.div`
width:14vw;
height:5vh;
display:flex;
flex-direction:row;
`;

const RatingBox = styled.div`
width:7vw;
height:7vh;
`;

const YearBox = styled.div`
width:7vw;
height:7vh
`;
const RatingAndYearTitle = styled.div`
color:grey;
font-family:Arial,Helvetica,sans-serif;
font-size:0.8em;
margin-bottom:2px;
font-weight:bold;
`;


const Rating = styled.div`
width:7vw;
height:7vh;
font-family:Arial,Helvetica,sans-serif;
font-size:0.8em;
font-weight:bold;
`;



const Year = styled.div`
width:7vw;
height:7vh;
font-size:0.8em;
font-family:Arial,Helvetica,sans-serif;
font-weight:bold;
`;

const DirectorBox = styled.div`
width:14vw;
height:7vh;
`;

const DirectorTitle = styled.div`

font-size:0.8em;
font-family:Arial,Helvetica,sans-serif;
font-weight:bold;
color:grey;
margin-bottom:3px;
`;

const DirectorName = styled.div`
color:black;
font-size:0.8em;
font-family:Arial,Helvetica,sans-serif;
font-weight:bold;
border-bottom:1px solid grey;
padding-bottom:15px;
`;


const MovieData = ({currentlyShown}:MovieDataProps) => {
    return <Data id={'moviedata'}>
        <GraphicsBox>
        <ThumbNail src={currentlyShown.imageURL}/>
        <Poster src={currentlyShown.imageURL}/> 
        </GraphicsBox>

        <Title>{currentlyShown.Title}</Title>
        <Genres>{currentlyShown.Genres}</Genres>
        <ButtonContainer>
            <WatchButton >{String.fromCodePoint(0x23F5)}Watch</WatchButton><AddButton>Add to library</AddButton>
        </ButtonContainer>
        <RatingAndYear>
        <RatingBox>
             <RatingAndYearTitle>
        IMDB Rating
    </RatingAndYearTitle> 
    <Rating>
    <span style={{color:'#ffae42', }}>{String.fromCodePoint(0x2605)}</span>  {currentlyShown.IMDB_Rating}
    </Rating>
    </RatingBox>
        <YearBox>
        <RatingAndYearTitle>
        Year
    </RatingAndYearTitle>
     <Year>
    {currentlyShown.Year}
    </Year>
        </YearBox>
    </RatingAndYear>
    <DirectorBox>
    <DirectorTitle>Director</DirectorTitle>
    <DirectorName>{currentlyShown.Director}</DirectorName>
    </DirectorBox>
    </Data>
}

export default MovieData;