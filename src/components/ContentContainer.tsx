import * as React from "react"
import { useState } from "react"
import styled from "styled-components"
import MovieData from "./MovieData"
import PosterContainer from "./PosterContainer"
import SideNavBar from "./SideNavBar"

const Container = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  height: 70vh;
  width: 60vw;
`

interface ContentContainerTypes {
  pointerFunctions: {
    setPointerX: (x:number) => void
    setPointerY: (y:number) => void
    setHoverVisible: (bool:boolean) => void
    setReasonForReccomendation: (reason: string) => void
  }
}

/*
This component holds 
the container of movie posters, 
the component to the right that displays movie data when a poster is clicked, 
and also the Navigation Bar to the right that will eventually allow the user to switch Movie collections.
*/

const ContentContainer = ({ pointerFunctions }: ContentContainerTypes) => {
  const [currentlyShown, setCurrentlyShown] = useState<movieData|undefined>()

  return (
    <Container id={"contentcontainer"}>
      <SideNavBar />
      <PosterContainer
        setCurrentlyShown={setCurrentlyShown}
        pointerFunctions={pointerFunctions}
      />
      <MovieData currentlyShown={currentlyShown} />
    </Container>
  )
}

export default ContentContainer
