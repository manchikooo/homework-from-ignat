import React from 'react'
import classes from './Message.module.css'
import {MessageDataType, messageData} from "./HW1";

export function Message(props: MessageDataType) {

    // if (messageData.companions[0].id === 1) {
    //     return ClassName
    // } else if (messageData.companions[1].id === 2) {
    //     return ClassName
    // } else if (messageData.companions[2].id === 3) {
    //     return ClassName
    // }

    // КАК СДЕЛАТЬ КАЖДОМУ ПЕРСОНАЖУ СВОЙ ЦВЕТ???

    return (
        <div className={classes.messageBlock}>
            <div className={classes.avatar}>
                <img src={props.avatar} className={classes.avatarIcon}/>
            </div>
            <div className={classes.messageInfoAndCorner}>
                <div className={`${classes[`corner_${props.id}`]}`}/>
                <div className={`${classes.messageInfoBlock} ${classes[`messageInfoBlock_${props.id}`]} ${`corner_${props.id}`}`}>
                    <div className={classes.messageInfo}>
                        <div className={classes.companionName}>{props.name}</div>
                        <div>{props.message}</div>
                    </div>
                    <div className={classes.messageTime}>
                        <div className={classes.messageTime}>{props.time}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Message
