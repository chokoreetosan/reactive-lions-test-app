import * as React from 'react';
import styled from 'styled-components'

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

interface PosterProps {
    movieData:movieData
    setCurrentlyShown(movieData:movieData):()=>void,
    key:string
}

const Image = styled.img`
width:15vh;
height:auto;
border-radius:5px;
border:3px solid #A742EB;
`;

const Poster = ({key,movieData,setCurrentlyShown}:PosterProps) => {


    console.log(movieData)
    return <div onClick={()=>{
        console.log('poster clicked')
        setCurrentlyShown(movieData)
    }}>
    <Image id={key} className={'posters'} src={movieData.imageURL} 
    
    // onMouseEnter={()=>{

    // }}
    // onMouseLeave={()=>{

    // }}
    />
   </div> 
}

export default Poster