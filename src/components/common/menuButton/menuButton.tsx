// component
import { Button } from "@mui/material"

// style
import { menuButton } from './menuButton.style'

// type
import { MenuButtonType } from "./menuButton.type"

// hooks
import useMenuActive from "../../../hook/useMenuActive"
import useBreakPoint from "../../../hook/useBreakPoint"

const MenuButton: React.FC<MenuButtonType> = (props) => {

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
            {text}
        </Button>
    )
}

export default MenuButton