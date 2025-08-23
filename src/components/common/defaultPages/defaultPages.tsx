// component
import {
    Box,
    Container,
    Snackbar,
    IconButton
} from "@mui/material"
import Header from "../../header/header"
import Footer from "../../../components/footer/footer"
import MainTitle from "../mainTitle/mainTitle"
import LangMenu from "../langMenu/langMenu"

// data
import { navItems } from "../../../data/navItems"

// type
import { DefaultPagesType } from "./defaultPages.type"

// style
import { pagesStyle, pagesMain } from "./defaultPages.style"

// hooks
import { useTranslation } from "react-i18next"
import useLangSettingMenu from "../../../hook/useLangSettingMenu"

// icon
import { IoMdClose } from '../../../assets/icon/index'

const DefaultPages: React.FC<DefaultPagesType> = (props) => {

    const { t } = useTranslation()
    const { isOpen, isLang, isLoad, isMessageShow, setMessageShow, handleMenuControl, handleActive } = useLangSettingMenu()

    const {
        children,
        title,
        subtitle
    } = props

    const today = new Date()
    const year = today.getFullYear()

    return (
        <Box {...pagesStyle}>

            <Header
                navItems={navItems}
                handleLangBtn={handleMenuControl}
            />

            <Box {...pagesMain}>
                <Container maxWidth={false}>
                    <MainTitle title={title} subtitle={subtitle} />
                    {children}
                </Container>
            </Box>

            <Footer text={[
                `${t('copyright')} © Glem ${year}.`,
                `${t('version')} 1.0.4`
            ]} />

            <LangMenu
                open={isOpen}
                isLoad={isLoad}
                isLang={isLang}
                onClose={handleMenuControl}
                handleActive={handleActive}
            />

            <Snackbar
                open={isMessageShow}
                autoHideDuration={6000}
                message={t('language_has_changed')}
                onClose={() => setMessageShow(prev => !prev)}
                action={
                    <IconButton onClick={() => setMessageShow(false)}>
                        <IoMdClose color="white" />
                    </IconButton>
                }
            />

        </Box>
    )
}

export default DefaultPages