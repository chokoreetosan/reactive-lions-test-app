import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import styled from 'styled-components'
import icon from '../images/gatsby-icon.png'
const Bar = styled.div`
margin:0 auto;
max-width:960px;
height: 10%;
padding:1rem 1.0875rem;
display:flex;
flex-direction:row;
align-items:center;
justify-content:start;
border-bottom: 1px solid black;
`;

interface NavBarProps {
}

const NavBar = ({ }:NavBarProps) => (
    <Bar id={'navbar'}>
        <img src={icon} style={{height:'3em', width:'auto'}}/>
        <div
        style={{
          height:'100%',
          width:'100%',
          display:'flex',
          flexDirection:'row',
          justifyContent:"center",
          alignItems:"center"
        }}
        >
        <button
          onSubmit={()=>{
            console.log('navigates to Discover Tab')
          }}
          style={{
            color: `black`,
            backgroundColor:"rgba(0,0,0,0)",
            fontSize:'1.5em',
            fontWeight:'bold',
            fontFamily:'Arial, Helvetica, sans-serif',
            textDecoration: `none`,
            border:'none'
          }}
        >
          Discover
        </button> 
        </div>
      </Bar>
)



export default NavBar
