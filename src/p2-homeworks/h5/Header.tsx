import React from 'react'
import {NavLink} from "react-router-dom";
import classes from './Header.module.css'

function Header() {
    return (
        <div className={classes.navLinks}>
            <span><NavLink to={'/pre-junior'}>pre-junior</NavLink></span>
            <span><NavLink to={'/junior'}>junior</NavLink></span>
            <span><NavLink to={'/junior-plus'}>junior-plus</NavLink></span>
        </div>
    )
}

export default Header
