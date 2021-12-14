import React, {ChangeEvent, useState} from 'react'
import Greeting from './Greeting'
import {UserType} from "./HW3";

type GreetingContainerPropsType = {
    users: Array<UserType> // need to fix any
    addUserCallback: (name: string) => void // need to fix any
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback,}) => {          // деструктуризация пропсов
    const [name, setName] = useState<string>('') // need to fix any
    const [error, setError] = useState<string>('') // need to fix any

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => { // need to fix any
        const trimmedName = e.currentTarget.value.trim()// need to fix
        if (trimmedName) {
            setError('')
        } else {
            setError('Неверно введено')
        }
        setName(e.currentTarget.value)
    }
    const addUser = () => {
        if (name.trim() !== '') {
            addUserCallback(name.replace(/ +(?= )/g, ''))
            alert(`Hello ${name.replace(/ +(?= )/g, '')}!`)
        } else {
            setError('Неверный ввод')
        }
        // need to fix
        setName('')
    }

    // const onKeyPress = (e: number) => {
    //     // if (e.)
    // }

    const totalUsers = users.length // need to fix

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
            // onKeyPress={onKeyPress}
        />
    )
}

export default GreetingContainer
