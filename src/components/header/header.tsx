// component
import {
    Box,
    Container,
    Typography,
    Stack,
    IconButton,
} from "@mui/material"
import MenuButton from "../common/menuButton/menuButton"
import { Link } from "react-router-dom"

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

// hooks
import useBreakPoint from "../../hook/useBreakPoint"
import useMenuActive from "../../hook/useMenuActive"

const Header: React.FC<HeaderType> = (props) => {

    const { isMobile } = useBreakPoint()
    const { handleActive } = useMenuActive()

    const { navItems, handleLangBtn } = props

    return (
        <Box {...header} >
            <Container {...headerContainer}>
                <Box {...headerTitle}>
                    <Link to={'/'}>
                        <Typography {...headerTitleText} >
                            {isMobile ? (
                                <>
                                    GEsW
                                </>
                            ) : (
                                <>
                                    GLEM'S
                                    <br />
                                    WEB
                                </>
                            )}
                        </Typography>
                    </Link>

                    <Stack {...headerTitleBtns}>
                        <IconButton {...headerTitleBtn} onClick={handleLangBtn}>
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
                                <MenuButton
                                    key={item.text}
                                    text={item.text}
                                    href={item.to}
                                    onClick={() => handleActive(item.text, item.to)}
                                />
                            )
                        })}
                    </Stack>
                </Box>
            </Container>
        </Box>
    )
}

export default Header