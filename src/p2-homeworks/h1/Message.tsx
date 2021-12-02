import React from 'react'
import classes from './Message.module.css'
import {CompanionsType} from "./HW1";

export function Message(props: CompanionsType) {
    return (
        <div className={classes.messageBlock}>
            <div className={classes.avatar}>
                <img src={props.avatar} className={classes.avatarIcon}/>
            </div>
            <div className={classes.messageInfoBlock}>
                <div className={classes.messageInfo}>
                    <div className={classes.companionName}>{props.name}</div>
                    <div>{props.message}</div>
                </div>
                <div className={classes.messageTime}>
                    <div className={classes.messageTime}>{props.time}</div>
                </div>
            </div>
        </div>
    )
}

export default Message
