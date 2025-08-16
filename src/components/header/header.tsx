// component
import {
    Box,
    Container,
    Typography,
    Stack,
    IconButton
} from "@mui/material"
import MenuButton from "../common/menuButton/menuButton"

// icon
import { IoLanguage, FaDev } from '../../assets/icon/index'

// style
import {
    header,
    headerContainer,
    headerTitle,
    headerTitleText,
    headerTitleBtns,
    headerTitleBtn,
    headerMenu,
    headerMenuBtns
} from "./header.style"

// type
import { HeaderType } from "./header.type"

const Header: React.FC<HeaderType> = (props) => {

    const { navItems } = props

    return (
        <Box {...header} >
            <Container {...headerContainer}>

                <Box {...headerTitle}>
                    <Typography {...headerTitleText}>
                        GLEM'S
                        <br />
                        WEB
                    </Typography>

                    <Stack {...headerTitleBtns}>
                        <IconButton {...headerTitleBtn}>
                            <IoLanguage />
                        </IconButton>
                        <IconButton {...headerTitleBtn}>
                            <FaDev />
                        </IconButton>
                    </Stack>
                </Box>

                <Box {...headerMenu}>
                    <Stack {...headerMenuBtns}>
                        {navItems && navItems.map((item) => {
                            return (
                                <MenuButton key={item.text} text={item.text} href={item.to} />
                            )
                        })}
                    </Stack>
                </Box>
            </Container>
        </Box>
    )
}

export default Header