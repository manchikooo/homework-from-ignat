import {UserType} from "../HW8";

export const homeWorkReducer = (state: Array<UserType>, action: ActionTypes): Array<UserType> => { // need to fix any
    switch (action.type) {
        case 'SORT': {
            // if (action.payload === 'up'){
            //     return [...state.sort((a, b) => a.name > b.name ? 1 : -1)]
            // } else if (action.payload === 'down') {
            //     return [...state.sort((a, b) => a.name > b.name ? 1 : -1).reverse()]
            // }
            return action.payload === 'up' ? [...state.sort((a, b) => a.name > b.name ? 1 : -1)] : [...state.sort((a, b) => a.name < b.name ? 1 : -1)]
        }
        case 'CHECK': {
            return state.filter(s => s.age > action.payload)
        }
        default:
            return state
    }
}

type ActionTypes = sortACType | checkACType

export type sortACType = ReturnType<typeof sortAC>
export const sortAC = (sortUpOrDown: string) => {
    return {
        type: 'SORT',
        payload: sortUpOrDown
    } as const
}

export type checkACType = ReturnType<typeof checkAC>
export const checkAC = (age: number) => {
    return {
        type: 'CHECK',
        payload: age
    } as const
}