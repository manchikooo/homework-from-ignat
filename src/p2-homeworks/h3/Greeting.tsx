import React, {ChangeEvent} from 'react'
import s from './Greeting.module.css'
import SuperInputText from "../h4/common/c1-SuperInputText/SuperInputText";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import inputStyle from './../h4/common/c1-SuperInputText/SuperInputText.module.css'

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
    const inputClass = error ? inputStyle.errorInput : inputStyle.superInput // need to fix with (?:)

    return (
        <div>
            <SuperInputText className={inputClass}
                            value={name}
                            onChange={setNameCallback}/>
            {/*<input className={inputClass}*/}
            {/*       value={name}*/}
            {/*       onChange={setNameCallback}*/}
            {/*/>*/}
            <SuperButton onClick={addUser}
                    // onKeyPress={onPressKey}
            >add
            </SuperButton>
            <span>{totalUsers}</span>
            <div className={s.errorMessage}>{error}</div>
            <div>{name}</div>
        </div>
    )
}

export default Greeting
