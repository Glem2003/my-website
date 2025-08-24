// hooks
import { useReducer } from 'react';

// type
import { DataType } from './type'

// reducer
import { reducer, initState } from './reducer'

const useProjectDataType = () => {

    const [state, dispatch] = useReducer(reducer, initState)

    const handleChange = (value: DataType) => dispatch({ type: 'TOGGLE', payload: value })

    return {
        isDataType: state.dataType,
        handleChange
    }
}

export default useProjectDataType