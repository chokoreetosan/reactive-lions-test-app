/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import {ReactNode,useState} from 'react'
import { useStaticQuery, graphql } from "gatsby"

import NavBar from "./NavBar"
import styled from 'styled-components'
import ContentContainer from "./ContentContainer"
import {Tween} from 'react-gsap'
interface LayoutProps {
  children: ReactNode
}

const App = styled.div`
  width:60vw;
  height:80vh;
  border-radius:10px;
  display:flex;
  flex-direction:column;
  position:fixed;
`;

const Layout = ({ children }:LayoutProps) => {
  const [pointerX, setPointerX] = useState();
  const [pointerY, setPointerY] = useState();
  const [hoverIsVisible, setHoverVisible] = useState(false);
  const [reasonForReccomendation, setReasonForReccomendation] = useState("")

  const updateMouseLocation = (e) => {
   setPointerX(e.clientX);
    setPointerY(e.clientY);

};
document.addEventListener('mousemove',updateMouseLocation)

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  const HoverDiv = styled.div`
    z-index:1000;
    width:10vw;
    height:auto;
    background-color:rgba(255,182,193,0.5);
    border:2px solid black;
    border-radius:5px;
  `;

  

  return (
    <App>
      <NavBar/>
      <ContentContainer pointerFunctions={{setPointerX,setPointerY,setHoverVisible,setReasonForReccomendation}}/>
      <Tween to={{x:pointerX,y:pointerY}}>
      { hoverIsVisible?
    <HoverDiv 
style={{
position:'absolute',
left:pointerX, top:pointerY
}
}
>Reccomended to you because {reasonForReccomendation}
</HoverDiv>:
<></>}
      </Tween>

      
    </App>
  )
}


export default Layout
