// hooks
import { useReducer } from "react"

// type
import { ProjectData } from './type'

// reducer
import { initState, reducer } from './reducer'

const useProjectInfo = () => {

    const [state, dispatch] = useReducer(reducer, initState)

    const handleOpen = () => dispatch({ type: 'OPEN' })
    const handleClose = () => dispatch({ type: 'CLOSE' })
    const handleMore = (data: ProjectData) => dispatch({ type: 'SET_DATA', payload: data })

    return {
        isOpen: state.isOpen,
        isData: state.data,
        handleMore,
        handleOpen,
        handleClose
    }
}

export default useProjectInfo