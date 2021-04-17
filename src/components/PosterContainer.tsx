import * as React from 'react';
import {useStaticQuery, graphql} from 'gatsby'
import styled from 'styled-components'
const Container = styled.div`

`;

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
      }
      `)
    console.log(data)

    return (<Container id={'postercontainer'}></Container>)
}

export default PosterContainer