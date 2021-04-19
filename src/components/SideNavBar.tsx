import * as React from "react"
import styled from "styled-components"
const Bar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  width: 10%;
  height: 100%;
  margin-top: 20px;
`

const StyledButton = styled.button`
  color: grey;
  background: white;
  font-size: 1em;
  font-weight: bold;
  font-family: Arial, Helvetica, sans-serif;
  border: none;
  margin-bottom: 30px;
  &:hover {
    color: black;
  }
`

/**
 *
 * This component will allow users to switch between different content displays, which will be rendered in the PosterContainer component.
 * It does nothing right now.
 */

const SideNavBar = () => {
  return (
    <Bar id={"sidenavbar"}>
      <StyledButton
        onClick={() => {
          console.log("Navigates to Movies Tab")
        }}
      >
        Movies
      </StyledButton>
      <StyledButton
        onClick={() => {
          console.log("Navigates to TV shows Tab")
        }}
      >
        TV shows
      </StyledButton>
      <StyledButton
        onClick={() => {
          console.log("Navigates to Channels Tab")
        }}
      >
        Channels
      </StyledButton>
      <StyledButton
        onClick={() => {
          console.log("Navigates to Others Tab")
        }}
      >
        Others
      </StyledButton>
    </Bar>
  )
}

export default SideNavBar
