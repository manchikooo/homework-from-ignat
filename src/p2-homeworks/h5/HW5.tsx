import React from 'react'
import Header from './Header'
import {HashRouter} from "react-router-dom";
import RoutesTo from "./RoutesTo";
import classes from "./Header.module.css";

function HW5() {
    return (
        <div>
            <HashRouter>
                <div className={classes.navigation}>
                <Header/>
                </div>
                <RoutesTo/>
            </HashRouter>
        </div>
    )
}

export default HW5
