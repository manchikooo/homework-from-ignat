import React from 'react'
import Error404 from "./pages/Error404";
import {Routes, Route, Navigate} from "react-router-dom";
import PreJunior from "./pages/PreJunior";
import HW1 from "../h1/HW1";
import HW2 from "../h2/HW2";
import HW3 from "../h3/HW3";
import Junior from "./pages/Junior";
import JuniorPlus from "./pages/JuniorPlus";

export const PATH = {
    PRE_JUNIOR: '/pre-junior',
    JUNIOR: '/junior',
    JUNIOR_PLUS: '/junior-plus',
    // add paths
}

function RoutesTo() {
    return (
        <div>
            <Routes>
                    {/*Routes выбирает первый подходящий роут*/}
                    {/*в начале мы попадаем на страницу '/' и переходим сразу на страницу PRE_JUNIOR*/}
                    {/*exact нужен, чтобы указать полное совпадение (что после '/' ничего не будет)*/}
                    <Route path={'/'} element={<Navigate to={PATH.PRE_JUNIOR}/>}/>

                    <Route path={PATH.PRE_JUNIOR} element={<PreJunior/>}/>
                    <Route path={PATH.JUNIOR} element={<Junior/>}/>
                    <Route path={PATH.JUNIOR_PLUS} element={<JuniorPlus/>}/>
                    // add routes

                    {/*у этого роута нет пути, он отрисуется если пользователь захочет попасть на несуществующую страницу*/}
                    <Route path={'/*'} element={<Error404/>}/>
            </Routes>
        </div>
    )
}

export default RoutesTo
