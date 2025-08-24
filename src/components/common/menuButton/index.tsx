// component
import { Button } from "@mui/material"

// style
import { menuButton } from './style'

// type
import { MenuButtonType } from "./type"

// hooks
import useMenuActive from "../../../hook/useMenuActive"
import useBreakPoint from "../../../hook/useBreakPoint"
import { useTranslation } from "react-i18next"

const MenuButton: React.FC<MenuButtonType> = (props) => {

    const { t } = useTranslation()
    const { isMobile } = useBreakPoint()
    const { isMenuActive } = useMenuActive()

    const { text, href, onClick } = props

    return (
        <Button
            size={isMobile ? 'medium' : 'large'}
            sx={{
                ...menuButton,
                backgroundColor: isMenuActive === text ? 'black' : 'inherit',
                color: isMenuActive === text ? 'white' : 'inherit',
            }}
            variant="contained"
            href={`${process.env.PUBLIC_URL}/#${href}`}
            onClick={onClick}
        >
            {t(text)}
        </Button>
    )
}

export default MenuButton