// type
export interface State {
    isOpen: boolean,
    isLoad: boolean,
    isLang: string,
    isMessageShow: boolean
}

export type Action =
    | { type: 'TOGGLE' }
    | { type: 'ACTIVE' }
    | { type: 'CLOSE' }
    | { type: 'DONE' }
    | { type: 'HIDE' }