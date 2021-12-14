import React from 'react'
import {NavLink} from "react-router-dom";

function Header() {
    return (
        <div>
            // add NavLinks
            <NavLink to={'/error'}>Error</NavLink>
            <NavLink to={'/hw1'}>hw1</NavLink>
            <NavLink to={'/hw2'}>hw2</NavLink>
            <NavLink to={'/hw3'}>hw3</NavLink>
        </div>
    )
}

export default Header
