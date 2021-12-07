import React, {ChangeEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: () => void // need to fix any
    error: string // need to fix any
    totalUsers: number // need to fix any
    // onPressKey: (e) => void
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers, } // деструктуризация пропсов
) => {
    const inputClass = error ? s.error : '' // need to fix with (?:)

    return (
        <div>
            <input className={inputClass}
                   value={name}
                   onChange={setNameCallback}
            />
            <button onClick={addUser}
                    // onKeyPress={onPressKey}
            >add
            </button>
            <span>{totalUsers}</span>
            <div className={s.errorMessage}>{error}</div>
            <div>{name}</div>
        </div>
    )
}

export default Greeting
