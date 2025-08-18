// component
import { Button } from "@mui/material"

// style
import { menuButton } from './menuButton.style'

// type
import { MenuButtonType } from "./menuButton.type"

// hooks
import useMenuActive from "../../../hook/useMenuActive"

const MenuButton: React.FC<MenuButtonType> = (props) => {

    const { text, href, onClick } = props

    const { isMenuActive } = useMenuActive()

    return (
        <Button
            size="large"
            sx={{
                ...menuButton,
                backgroundColor: isMenuActive === text ? 'black' : 'inherit',
                color: isMenuActive === text ? 'white' : 'inherit',
            }}
            href={`${process.env.PUBLIC_URL}/#${href}`}
            onClick={onClick}
        >
            {text}
        </Button>
    )
}

export default MenuButton