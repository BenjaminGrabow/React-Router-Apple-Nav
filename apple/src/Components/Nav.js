import React from 'react';
import { NavLink, Route } from 'react-router-dom';
import navData from '../navData';
import styled from 'styled-components';
import SubNav from './SubNav';

const StyledDiv = styled.div`
 display: flex;
 justify-content: space-between;
 
 nav {
        background: black;
        height: 3rem;
        width: 100%;
 }

a {
        text-decoration: none;
        width: 100%;
        color: white;
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
                           <nav>
                        <NavLink 
                        to={`/${navData.id}`}
                        id={navData.id}
                        >
                        {navData.title}
                        </NavLink>
                        </nav>
                        
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