import React from 'react'
import Error404 from "./pages/Error404";
import {Routes, Route} from "react-router-dom";
import PreJunior from "./pages/PreJunior";
import HW1 from "../h1/HW1";
import HW2 from "../h2/HW2";
import HW3 from "../h3/HW3";

export const PATH = {
    PRE_JUNIOR: '/pre-junior',
    // add paths
}

function RoutesTo() {
    return (
        <div>
            <Routes>
                {/*Switch выбирает первый подходящий роут*/}
                {/*в начале мы попадаем на страницу '/' и переходим сразу на страницу PRE_JUNIOR*/}
                {/*exact нужен, чтобы указать полное совпадение (что после '/' ничего не будет)*/}
                <Route path={'/pre-junior'} />

                <Route path={PATH.PRE_JUNIOR} element={<PreJunior/>}/>
                // add routes
                <Route path='/hw1' element={<HW1/>}/>
                <Route path='/hw2' element={<HW2/>}/>
                <Route path='/hw3' element={<HW3/>}/>
                {/*у этого роута нет пути, он отрисуется если пользователь захочет попасть на несуществующую страницу*/}
                <Route element={<Error404/>}/>
            </Routes>
        </div>
    )
}

export default RoutesTo
