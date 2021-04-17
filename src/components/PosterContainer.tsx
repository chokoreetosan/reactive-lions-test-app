import * as React from 'react';
import {useState} from 'react'
import {useStaticQuery, graphql} from 'gatsby'
import styled from 'styled-components'

import Poster from './Poster'
const Container = styled.div`
width:40vw;
height:60vh;

display:grid;
grid-template-columns:10vw 10vw 10vw 10vw;
grid-row-gap:10px;
grid-column-gap:10px;
`;
const TitleAndContainerBox = styled.div`
height:8vh;
width:100%;

`

const PosterContainer = () => {
    const data = useStaticQuery(graphql`query MyQuery($formatString: String = "") {
        allMoviesCsv {
          nodes {
            id
            Director
            Genres
            IMDB_Rating
            Lead_Actors
            Poster
            Summary
            Title
            Year(formatString: $formatString)
          }
        }
      
      allImageSharp {
        edges {
          node {
            id
            fluid {
              originalImg
              originalName
            }
          }
        }
      }
    }
      `)
    console.log(data.allImageSharp)

    const [movieImages, setMovieImages] = useState(data.allImageSharp.edges.reduce((acc,cur,ind)=>{
        acc[cur['node']['fluid']['originalName']] = cur['node']['fluid']['originalImg']
        return acc;        
    },{}))
    console.log(movieImages)
    const [posterData, setPosterData] = useState(data.allMoviesCsv.nodes);
    //   console.log(posterData)
    const posters = posterData.map((movie, ind)=>{
        // console.log(movie)
        return (
            <Poster key={ind} movieData={movie} image={movieImages[movie['Poster']]}/>
        )
    })

    return (
    <div
    style={{
        display:'flex',
        flexDirection:'column'
    }}
    >
    <TitleAndContainerBox>
    <h1 style={{fontFamily:'Arial, Helvetica, sans-serif', marginLeft:"25px"}}>Movies</h1>
    </TitleAndContainerBox>
    <Container id={'postercontainer'}>
        {posters}
    </Container>

    </div>
    )
}

export default PosterContainer