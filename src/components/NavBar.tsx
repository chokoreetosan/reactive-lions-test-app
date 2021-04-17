import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import styled from 'styled-components'
const Bar = styled.div`
margin:0 auto;
max-width:960px;
height:
padding:1rem 1.0875rem;
display:flex;
flex-direction:row;
align-items:center;
justify-content:center;
`;

interface NavBarProps {
}

const NavBar = ({ }:NavBarProps) => (
    <Bar id={'navbar'}>

        <Link
          to="/"
          style={{
            color: `black`,
            fontSize:'1.5em',
            fontWeight:'bold',
            fontFamily:'Arial, Helvetica, sans-serif',
            textDecoration: `none`,
          }}
        >
          Discover
        </Link>
    </Bar>
)



export default NavBar
