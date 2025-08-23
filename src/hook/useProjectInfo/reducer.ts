// type
import { State, Action } from "./type"

export const initState: State = {
    isOpen: false,
    data: {
        titleText: '',
        date: [],
        codeLink: '',
        webLink: '',
        img: '',
        imgText: '',
        features: [],
        library: []
    }
}

export const reducer = (state: State, action: Action) => {
    switch (action.type) {
        case 'OPEN':
            return { ...state, isOpen: true }
        case 'CLOSE':
            return { ...state, isOpen: false }
        case 'SET_DATA':
            return { ...state, data: action.payload }
        default:
            return state
    }
}