// component
import {
    Box,
    Container,
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

const DefaultPages: React.FC<DefaultPagesType> = (props) => {

    const { t } = useTranslation()
    const { handleMenuControl, isOpen } = useLangSettingMenu()

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
                `${t('version')} 1.0.0`
            ]} />

            <LangMenu
                open={isOpen}
                onClose={handleMenuControl}
            />

        </Box>
    )
}

export default DefaultPages