import * as React from 'react';
import {useState} from 'react';
import styled from 'styled-components'
import { Controls, PlayState, Tween } from 'react-gsap';
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
    pointerFunctions: {
        setPointerX: (x:number)=>{}
        setPointerY: (y:number)=>{},
        setHoverVisible: (isVisible:boolean)=>{},
        setReasonForReccomendation:(reason:string)=>{}
    }
}

const Image = styled.img`
width:15vh;
height:auto;
border-radius:5px;
border:3px solid #A742EB;
`;

const Poster = ({key,movieData,setCurrentlyShown,pointerFunctions}:PosterProps) => {
    
    const createReasonForReccomendation = () => {
        const reasons = [
          "you seem to like this genre.",
          "you have watched similar things in the past.",
          "you should try something new."
        ]
        return reasons[Math.floor(Math.random()*3)]
        
    }
    return <div onClick={()=>{
        console.log('poster clicked')
        setCurrentlyShown(movieData)
    }}>    

    

    <Image id={key} className={'posters'} src={movieData.imageURL} 
    onMouseEnter={()=>{
        console.log('mouseEntered')
        pointerFunctions.setHoverVisible(true);
        pointerFunctions.setReasonForReccomendation(createReasonForReccomendation())
    }}
    onMouseLeave={()=>{
        console.log('mouseLeft')
        pointerFunctions.setHoverVisible(false)

    }}

    />
   </div> 
}

export default Poster