import * as React from 'react';
import styled from 'styled-components'

interface PosterProps {
    movieData: {
        Director:string,
        Genres:string,
        IMDB_Rating:string,
        Lead_Actors:string,
        Poster:string,
        Summary:string,
        Title:string,
        Year:string,
        id:string
    }
    image:string
}

const Image = styled.img`
width:15vh;
height:auto;
border-radius:5px;
border:3px solid #A742EB;
`;

const Poster = ({movieData, image}:PosterProps) => {
    console.log(movieData, image)
    return <Image src={image} />
    
}

export default Poster