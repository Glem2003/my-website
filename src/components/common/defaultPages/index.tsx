// component
import {
    Box,
    Container,
    Snackbar,
    IconButton
} from "@mui/material"
import Header from "../../header"
import Footer from "../../footer"
import MainTitle from "../mainTitle"
import LangMenu from "../langMenu"

// data
import { navItems } from "../../../data/navItems"

// type
import { DefaultPagesType } from "./type"

// style
import { pagesStyle, pagesMain } from "./style"

// hooks
import { useTranslation } from "react-i18next"
import useLangSettingMenu from "../../../hook/useLangSettingMenu"

// icon
import { IoMdClose } from '../../../assets/icon/index'

const DefaultPages: React.FC<DefaultPagesType> = (props) => {

    const { t } = useTranslation()
    const { isOpen, isLang, isLoad, isMessageShow, handleMessageClose, handleMenuControl, handleActive } = useLangSettingMenu()

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
                onClose={handleMessageClose}
                action={
                    <IconButton onClick={handleMessageClose}>
                        <IoMdClose color="white" />
                    </IconButton>
                }
            />

        </Box>
    )
}

export default DefaultPages