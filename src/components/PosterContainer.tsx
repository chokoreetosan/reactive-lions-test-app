import * as React from "react"
import { useState, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import Poster from "./Poster"
const Container = styled.div`
  width: 40vw;
  height: 60vh;

  display: grid;
  grid-template-columns: 10vw 10vw 10vw 10vw;
  grid-row-gap: 10px;
  grid-column-gap: 10px;
`
const TitleAndSortBox = styled.div`
  height: 8vh;
  width: 100%;
`

interface PosterContainerProps {
  setCurrentlyShown: (data:movieData) => void
  pointerFunctions: {
    setPointerX: (x:number) => void
    setPointerY: (y:number) => void
    setHoverVisible: (bool:boolean) => void
    setReasonForReccomendation: (reason: string) => void
  }
}

/**
 * 
 * This component holds all the Movie Posters. It utilizes CSS grid to arrange them.
 * 
 */

const PosterContainer = ({
  setCurrentlyShown,
  pointerFunctions,
}: PosterContainerProps) => {
  const data = useStaticQuery(graphql`
    query MyQuery($formatString: String = "") {
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

  /**
   * The following block of code cleans and formats the data of all the movies before creating the Poster components via the map function.
   */
  let movies
  movies = data.allMoviesCsv.nodes
  let movieImages = data.allImageSharp.edges.reduce((acc:any, cur:any, ind:any) => {
    acc[cur["node"]["fluid"]["originalName"]] =
      cur["node"]["fluid"]["originalImg"]
    return acc
  }, {})
  movies = movies.map((movie:movieData) => {
    movie.imageURL = movieImages[movie["Poster"]]
    return movie
  })

  const [posterData, setPosterData] = useState(movies)

  /**
   * Creates the Posters with the map function.
   */
  const posters = posterData.map((movie:movieData, ind:number) => {
    return (
      <Poster
        key={ind.toString()}
        movieData={movie}
        setCurrentlyShown={setCurrentlyShown}
        pointerFunctions={pointerFunctions}
      />
    )
  })

  /**
   * Upon app initialization, shows the first movie in the MovieData component.
   */
  useEffect(() => {
    setCurrentlyShown(posterData[0])
  }, [])

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <TitleAndSortBox>
        <h1
          style={{
            fontFamily: "Arial, Helvetica, sans-serif",
            marginLeft: "25px",
          }}
        >
          Movies
        </h1>
      </TitleAndSortBox>
      <Container id={"postercontainer"}>{posters}</Container>
    </div>
  )
}

export default PosterContainer
