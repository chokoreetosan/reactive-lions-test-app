import * as React from 'react';
import {useState, useEffect} from 'react'
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
const TitleAndSortBox = styled.div`
height:8vh;
width:100%;
`

interface PosterContainerProps  {
  setCurrentlyShown():()=> void;
}

const PosterContainer = ({setCurrentlyShown}:PosterContainerProps) => {
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

      let movies;
        movies = data.allMoviesCsv.nodes;
        let movieImages = data.allImageSharp.edges.reduce((acc,cur,ind)=>{
          acc[cur['node']['fluid']['originalName']] = cur['node']['fluid']['originalImg']
          return acc;        
      },{})
        movies = movies.map((movie)=>{
          movie.imageURL = movieImages[movie["Poster"]]
          return movie
        })
    
    const [posterData, setPosterData] = useState(movies);
    const posters = posterData.map((movie, ind)=>{
        return (
            <Poster key={ind} movieData={movie} setCurrentlyShown={setCurrentlyShown}/>
        )
    })

    return (
    <div
    style={{
        display:'flex',
        flexDirection:'column'
    }}
    >
    <TitleAndSortBox>
    <h1 style={{fontFamily:'Arial, Helvetica, sans-serif', marginLeft:"25px"}}>Movies</h1>
    </TitleAndSortBox>
    <Container id={'postercontainer'}>
        {posters}
    </Container>

    </div>
    )
}

export default PosterContainer