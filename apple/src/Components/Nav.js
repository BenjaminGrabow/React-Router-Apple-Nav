import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Nav = (props) => {
        return (
                <div>
                <NavLink>Apple</NavLink>
                <NavLink>Mac</NavLink>
                <NavLink>iPad</NavLink>
                <NavLink>iPhone</NavLink>
                <NavLink>Watch</NavLink>
                <NavLink>TV</NavLink>
                <NavLink>Music</NavLink>
                <NavLink>Support</NavLink>
                <NavLink>Search</NavLink>
                <NavLink>Window</NavLink>
                </div>
);
}

export default Nav;