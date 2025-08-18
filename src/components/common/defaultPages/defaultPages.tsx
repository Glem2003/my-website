// component
import {
    Box,
    Container,
} from "@mui/material"
import Header from "../../header/header"
import Footer from "../../../components/footer/footer"
import MainTitle from "../mainTitle/mainTitle"

// data
import { navItems } from "../../../data/navItems"

// type
import { DefaultPagesType } from "./defaultPages.type"

// style
import { pagesStyle, pagesMain } from "./defaultPages.style"

const DefaultPages: React.FC<DefaultPagesType> = (props) => {

    const {
        children,
        title,
        subtitle
    } = props

    return (
        <Box {...pagesStyle}>

            <Header navItems={navItems}/>

            <Box {...pagesMain}>
                <Container maxWidth={false}>
                    <MainTitle title={title} subtitle={subtitle} />
                    {children}
                </Container>
            </Box>

            <Footer text={['Copyright © Glem 2025.', 'version 1.0.0']} />

        </Box>
    )
}

export default DefaultPages