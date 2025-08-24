// type
import { State, Action } from './type'

export const initState: State = {
    dataType: 'list'
}

export const reducer = (state: State, action: Action) => {
    switch (action.type) {
        case 'TOGGLE':
            return { dataType: action.payload }
        default:
            return state
    }
}