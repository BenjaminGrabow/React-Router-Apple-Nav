import React from 'react';
import { NavLink, Route } from 'react-router-dom';
import navData from '../navData';
import styled from 'styled-components';
import SubNav from './SubNav';

const StyledDiv = styled.div`
 display: flex;
 justify-content: space-between;

a {
        text-decoration: none;
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
                     {this.state.nav.map(navData => 
                   <div key={navData.id}>
                        <NavLink 
                        to={`/${navData.id}`}
                        id={navData.id}
                        >
                        {navData.title}
                        </NavLink>
                        
                        <Route path={`/${navData.id}`}
                         render={() => <SubNav
                                {...this.props}
                                 data={navData.subLink} 
                                 /> }
                         ></Route>      
                     </div>
                     )}
                     </StyledDiv>   
                 );
        }
}
 
export default Nav;