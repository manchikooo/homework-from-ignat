import React from 'react'
import {AffairType} from "./HW2";
import classes from './Affairs.module.css'
import affairs from "./Affairs";

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType// need to fix any
    deleteAffairCallback: (_id: number) => void // need to fix any
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id)
    }// need to fix

    return (
        <div className={classes.affairsInfoBlock}>
            <div className={classes.affairsNames}>
                {props.affair.name}
            </div>
            <div className={`${classes.affairsPriority} ${classes[`affairsPriority_${props.affair.priority}`]}`}>
                {props.affair.priority}
            </div>
            <div>
                <button className={classes.deleteButton} onClick={deleteCallback}>x</button>
            </div>
        </div>
    )
}

export default Affair
