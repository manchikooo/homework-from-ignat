import React from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'
import classes from './Affairs.module.css'
import buttonsStyle from './../h4/common/c2-SuperButton/SuperButton.module.css'

type AffairsPropsType = { // need to fix any
    data: Array<AffairType>
    setFilter: (filter: FilterType) => void
    deleteAffairCallback: (_id: number) => void
    filter: FilterType
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair // should work
            key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

    const setAll = () => {
        props.setFilter('all')
    } // need to fix
    const setHigh = () => {
        props.setFilter('high')
    }
    const setMiddle = () => {
        props.setFilter('middle')
    }
    const setLow = () => {
        props.setFilter('low')
    }

    const allActive = props.filter === 'all' ? buttonsStyle.activeButton : buttonsStyle.default
    const highActive = props.filter === 'high' ? buttonsStyle.activeButton : buttonsStyle.default
    const middleActive = props.filter === 'middle' ? buttonsStyle.activeButton : buttonsStyle.default
    const lowActive = props.filter === 'low' ? buttonsStyle.activeButton : buttonsStyle.default

    return (
        <div className={classes.affairsBlock}>
            {mappedAffairs}
            <div className={classes.filterButtons}>
                <button className={allActive} onClick={setAll}>all</button>
                <button className={highActive} onClick={setHigh}>high</button>
                <button className={middleActive} onClick={setMiddle}>middle</button>
                <button className={lowActive} onClick={setLow}>low</button>
            </div>
        </div>
    )
}

export default Affairs
