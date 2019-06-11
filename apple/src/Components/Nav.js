import React from 'react';
import { NavLink, Route } from 'react-router-dom';
import navData from '../navData';
import styled from 'styled-components';
import SubNav from './SubNav';

const StyledDiv = styled.div`

background-color: black;

 nav {
        background: black;
        height: 3rem;
        width: 100%;
 }

a {
        text-decoration: none;
        width: 100%;
        color: white;
        padding: 1.5rem;
        
}

`;

const blackStyle = {
        backgroundColor: 'black'
};

const whiteStyle = {
        color: "white"
}

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
                                                        <NavLink
                                                                 key={navData.id}
                                                                to={`/${navData.id}`}
                                                                id={navData.id}>
                                                                {navData.title}
                                                        </NavLink>
                                )}

                                {this.state.nav.map(navData =>
                                        <Route path={`/${navData.id}`}
                                                render={() => <SubNav
                                                        {...this.props}
                                                        styleD={navData.title === 'TV' ? blackStyle : null}
                                                        styleP={navData.title === 'TV' ? whiteStyle : null}
                                                        data={navData.subLink}
                                                />}
                                        ></Route>
                                )}
                        </StyledDiv>
                );
        }
}

export default Nav;