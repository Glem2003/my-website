// hooks
import { useState } from "react"
import { useTranslation } from "react-i18next"

const useLangSettingMenu = () => {

    const { i18n } = useTranslation()

    const [isOpen, setOpen] = useState<boolean>(false)
    const [isLoad, setLoad] = useState<boolean>(false)
    const [isLang, setLang] = useState<string>(i18n.language)
    const [isMessageShow, setMessageShow] = useState<boolean>(false)

    const handleActive = (lang: string) => {
        setLoad(true)
        setTimeout(() => {
            setLang(lang)
            i18n.changeLanguage(lang)
            setOpen(false)
            setLoad(false)
            setMessageShow(true)
        }, 2000)
    }

    const handleMenuControl = () => {
        setOpen(prev => !prev)
    }

    return {
        isLang,
        isOpen,
        isLoad,
        isMessageShow,
        setMessageShow,
        handleActive,
        handleMenuControl
    }
}

export default useLangSettingMenu