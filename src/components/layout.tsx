/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { ReactNode, useState } from "react"
import NavBar from "./NavBar"
import styled from "styled-components"
import ContentContainer from "./ContentContainer"
import { Tween } from "react-gsap"
interface LayoutProps {
  children: ReactNode
}

const App = styled.div`
  width: 60vw;
  height: 80vh;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  position: fixed;
`

const HoverDiv = styled.div`
  z-index: 1000;
  width: 10vw;
  height: auto;
  background-color: rgba(255, 182, 193, 0.5);
  border: 2px solid black;
  border-radius: 5px;
`

const Layout = ({ children }: LayoutProps) => {
  /**
   * The state variables that control the hover effect.
   * **/
  const [pointerX, setPointerX] = useState<number>()
  const [pointerY, setPointerY] = useState<number>()
  const [hoverIsVisible, setHoverVisible] = useState<boolean>(false)
  const [
    reasonForReccomendation,
    setReasonForReccomendation,
  ] = useState<string>("")

  /**
   *
   * Callback that is bound to the mousemove event, and keeps track of the cursor location.
   *
   */
  const updateMouseLocation = (e: MouseEvent) => {
    setPointerX(e.clientX)
    setPointerY(e.clientY)
  }
  document.addEventListener("mousemove", updateMouseLocation)

  return (
    <App>
      <NavBar />
      <ContentContainer
        pointerFunctions={{
          setPointerX,
          setPointerY,
          setHoverVisible,
          setReasonForReccomendation,
        }}
      />

      {/**
        This is the component that follows the cursor when the user mouses over a poster.
        The Tween object is the interpolator that smoothly transitions cursor locations
        whenever the updateMouseLocation function is called, 
        based on the delta value which for now, remains at gsap default.
        **/}

      <Tween to={{ x: pointerX, y: pointerY }}>
        {hoverIsVisible ? (
          <HoverDiv
            style={{
              position: "absolute",
              left: pointerX,
              top: pointerY,
            }}
          >
            Reccomended to you because {reasonForReccomendation}
          </HoverDiv>
        ) : (
          <></>
        )}
      </Tween>
    </App>
  )
}

export default Layout
