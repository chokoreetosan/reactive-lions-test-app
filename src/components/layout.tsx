/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import {ReactNode} from 'react'
import { useStaticQuery, graphql } from "gatsby"

import NavBar from "./NavBar"
import styled from 'styled-components'
import ContentContainer from "./ContentContainer"

interface LayoutProps {
  children: ReactNode
}

const App = styled.div`
  width:60%;
  height:80%;
  background-color:white;
`;

const Layout = ({ children }:LayoutProps) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <App>
      <NavBar/>
      <ContentContainer />
    </App>
  )
}


export default Layout
