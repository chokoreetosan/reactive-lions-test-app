import * as React from 'react';
import styled from 'styled-components'
import { Link } from "gatsby"
const Bar = styled.div`
display:flex;
flex-diection:column;

`;

const SideNavBar = () => {

    return(
        <Bar id={'sidenavbar'}>
        <button
          onSubmit={()=>{
              console.log('Navigates to Movies Tab')
          }}
          style={{
            color: `black`,
            fontSize:'1.5em',
            fontWeight:'bold',
            fontFamily:'Arial, Helvetica, sans-serif',
            textDecoration: `none`,
          }}>
            Movies
        </button> 
        </Bar>
    )
}

export default SideNavBar