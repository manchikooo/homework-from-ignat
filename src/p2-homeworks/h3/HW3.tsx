import React, {useState} from 'react'
import GreetingContainer from './GreetingContainer'
import {v1} from "uuid";

// types
export type UserType = {
    _id: string // need to fix any
    name: string // need to fix any
}

// уровень работы с глобальными данными
export function HW3() {
    const [users, setUsers] = useState<Array<UserType>>([])// need to fix any
    console.log(users)

    const addUserCallback = (name: string) => {                   // need to fix any
        const newUser = {                                       // need to fix
            _id: v1(),
            name,
        }
        setUsers([...users, newUser])
    }

    return (
        <div>
            <hr/>
            homeworks 3

            {/*should work (должно работать)*/}
            <GreetingContainer users={users}
                               addUserCallback={addUserCallback}
            />

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeGreeting/>*/}
            {users.map(u => <div key={u._id}>{u.name}</div>)}
            <hr/>
        </div>
    )
}

export default HW3
