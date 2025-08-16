// component
import { Button } from "@mui/material"

// style
import { menuButton } from './menuButton.style'

// type
import { MenuButtonType } from "./menuButton.type"

const MenuButton: React.FC<MenuButtonType> = (props) => {

    const { text, href } = props

    return (
        <Button
            size="large"
            sx={menuButton}
            href={`${process.env.PUBLIC_URL}/#${href}`}
        >
            {text}
        </Button>
    )
}

export default MenuButton