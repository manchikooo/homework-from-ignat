import React from 'react'
import Message from "./Message";

export type MessageDataType = {
    id?: number
    avatar: string
    name: string
    message: string
    time: string
}

export const messageData = {
    companions: [
        {
            id: 1,
            avatar: 'https://avatars.mds.yandex.net/get-zen_doc/2816669/pub_5ec384fdd2576a75855f6578_5ec6222a5bdd272313d6e24c/scale_1200',
            name: 'Sakura Haruno',
            message: 'Если мы умрем, то лучше умереть сражаясь, чем ничего не делая!',
            time: '21:59',
        },
        {
            id: 2,
            avatar: 'https://64.media.tumblr.com/f239b93f4852cf1a7abfbc8595083334/d25cd16f2cf37eeb-20/s500x750/9c2c56a2740ae4774dc7e6430fe5f44ec554db52.jpg',
            name: 'Hinata Hyuga',
            message: 'Ты не идеален, но, делая ошибки, ты учишься на них. Мне кажется, настоящая сила заключается именно в этом.',
            time: '22:03',
        },
        {
            id: 3,
            avatar: 'https://i.mycdn.me/i?r=AzEPZsRbOZEKgBhR0XGMT1RkPb7cRrNQuuDVsZ1ApWcCk6aKTM5SRkZCeTgDn6uOyic&fn=sqr_288',
            name: 'Tsunade Senju',
            message: 'Деньги нужно срочно пропить, так как потом их просто не будет...',
            time: '22:05',
        },
    ]
}

let companions = messageData.companions.map(c => <Message id={c.id}
                                                          avatar={c.avatar}
                                                          name={c.name}
                                                          message={c.message}
                                                          time={c.time}/>)
//
// if (messageData.companions[0].id === 1) {
//     return 'messageInfoBlockSakura'
// }

function HW1() {
    return (
        <div>
            <hr/>
            homeworks 1

            {/*should work (должно работать)*/}

            {companions}

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeMessage/>*/}
            <hr/>
        </div>
    )
}

export default HW1
