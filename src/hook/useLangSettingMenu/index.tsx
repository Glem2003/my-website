// hooks
import { useReducer } from "react"
import { useTranslation } from "react-i18next"

// reducer
import { reducer, initState } from './reducer'

const useLangSettingMenu = () => {

    const { i18n } = useTranslation()

    const [state, dispatch] = useReducer(reducer, initState)

    const handleActive = (lang: string) => {
        dispatch({ type: 'ACTIVE' })

        setTimeout(() => {
            i18n.changeLanguage(lang)
            dispatch({ type: 'DONE' })
        }, 2000)
    }

    const handleMenuControl = () => dispatch({ type: 'TOGGLE' })

    const handleMessageClose = () => dispatch({ type: 'HIDE' })

    return {
        isLang: i18n.language,
        isOpen: state.isOpen,
        isLoad: state.isLoad,
        isMessageShow: state.isMessageShow,
        handleActive,
        handleMenuControl,
        handleMessageClose
    }
}

export default useLangSettingMenu