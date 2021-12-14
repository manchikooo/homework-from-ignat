import React from 'react'
import Header from './Header'
import {HashRouter} from "react-router-dom";
import RoutesTo from "./RoutesTo";

function HW5() {
    return (
        <div>
            <HashRouter>
                <Header/>
                <RoutesTo/>
            </HashRouter>
        </div>
    )
}

export default HW5
