export type DataType = 'list' | 'table'

export interface State {
    dataType: DataType
}

export type Action =
    | { type: 'TOGGLE', payload: DataType }