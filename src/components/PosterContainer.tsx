import * as React from 'react';
import query from '../query'
import {useStaticQuery, graphql} from 'gatsby'
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

    return (<div></div>)
}

export default PosterContainer