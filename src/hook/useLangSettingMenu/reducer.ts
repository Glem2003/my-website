import i18n from "../../i18n"

// type
import { State, Action } from './type'

export const initState: State = {
    isOpen: false,
    isLoad: false,
    isLang: i18n.language,
    isMessageShow: false
}

export const reducer = (state: State, action: Action) => {
    switch (action.type) {
        case 'TOGGLE':
            return { ...state, isOpen: !state.isOpen }
        case 'CLOSE':
            return { ...state, isOpen: false }
        case 'ACTIVE':
            return { ...state, isLoad: true }
        case 'DONE':
            return { ...state, isLoad: false, isMessageShow: true, isOpen: false }
        case 'HIDE':
            return { ...state, isMessageShow: false }
        default:
            return state
    }
}