import React, {useState} from 'react'
import {NavLink} from "react-router-dom";
import classes from './Header.module.css'

type HeaderPropsType = {}

function Header(props: HeaderPropsType) {

    return (
        <div className='selectBlock'>
            <SelectTitle title={'Меню'}/>
        </div>
    )
}


type SelectTitleType = {
    title: string
}

function SelectTitle(props: SelectTitleType) {

    const [collapsed, setCollapsed] = useState(true)

    return (<div className={classes.navigation}
            // onBlur={() => setCollapsed(true)}
                 tabIndex={0}>
            <div className={classes.navHeader}>
                <h3 className={classes.menuTitle}
                    onClick={() => setCollapsed(!collapsed)}
                >{props.title}</h3>
                <div >
                    {!collapsed && <SelectBody/>}
                </div>

            </div>
        </div>
    )
}

function SelectBody() {
    return (
        <div className={classes.navLinks}>
            <span><NavLink to={'/pre-junior'}>pre-junior</NavLink></span>
            <span><NavLink to={'/junior'}>junior</NavLink></span>
            <span><NavLink to={'/junior-plus'}>junior-plus</NavLink></span>
            {/*{props.items.map((i, index) =>*/}
            {/*    <li onClick={() => props.setSelectValue(i.title)}*/}
            {/*        key={index}>{i.title}</li>)}*/}
        </div>)
}

// return (
//     <div className={classes.navLinks}>
//         <span><NavLink to={'/pre-junior'}>pre-junior</NavLink></span>
//         <span><NavLink to={'/junior'}>junior</NavLink></span>
//         <span><NavLink to={'/junior-plus'}>junior-plus</NavLink></span>
//     </div>
// )


export default Header
