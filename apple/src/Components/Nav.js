import React from 'react';
import { NavLink, Route, Switch, withRouter } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
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



.navSlider-exit > .page {
        z-index: 1;
}

.navSlider-enter > .page {
        z-index: 10;
}

.navSlider-enter.left > .page {
        transform: translate3d(100%, 0, 0);
}

.navSlider-enter.right > .page {
        transform: translate3d(-100%, 0, 0);
}

.navSlider-exit.left > .page {
        transform: translate3d(-100%, 0, 0);
}

.navSlider-exit.right > .page {
        transform: translate3d(100%, 0, 0);
}

.navSlider-enter.navSlider-enter-active > .page {
        transform: translate3d(0, 0, 0);
        transition: all 800ms ease-in-out;
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
                        nav: navData,
                        prevDepth: this.getPathDepth(this.props.location)
                }
        }

        componentWillReceiveProps() {
                this.setState({
                        prevDepth: this.getPathDepth(this.props.location)
                })
        }

        getPathDepth(location) {
                let pathArr = location.pathname.split("/");
                pathArr = pathArr.filter(n => n !== "");
                return pathArr.length;
        }

        render() {
                const { location } = this.props;

                const currentKey = location.pathname.split("/")[1] || "/";

                const timeout = { enter: 800, exit: 400 };
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
                                <TransitionGroup component="div" className="animation">
                                        <CSSTransition
                                                key={currentKey}
                                                timeout={timeout}
                                                classNames="navSlider"
                                                mountOnEnter={false}
                                                unmountOnExit={true} >
                                                <div className={this.getPathDepth(location) - this.state.prevDepth >= 0 ? "left" : "right"} >
                                                        <Switch location={location}>
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
                                                        </Switch>
                                                </div>
                                        </CSSTransition>
                                </TransitionGroup>
                        </StyledDiv>
                );
        }
}

export default withRouter(Nav);