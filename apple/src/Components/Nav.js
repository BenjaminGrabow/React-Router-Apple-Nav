import React from 'react';
import { NavLink } from 'react-router-dom';
import navData from '../navData';
import styled from 'styled-components';

const StyledDiv = styled.div`

a {
        margin: 1rem;
}

`;

class Nav extends React.Component {
        constructor(props) {
                super(props);
                this.state = { 
                        nav: navData
                 }
        }
        render() { 
                return ( 
                        <StyledDiv>
                     {this.state.nav.map(navData => <NavLink 
                     id={navData.id}
                     key={navData.id}>
                     {navData.subLink.title}
                     </NavLink>)}
                     </StyledDiv>   
                 );
        }
}
 
export default Nav;