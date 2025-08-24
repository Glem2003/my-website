// components
import { Box, Typography, Button } from "@mui/material"

// style
import { main, title, subtitle, btn } from './style'

const NotFound = () => {
    return (
        <Box {...main}>
            <Typography {...title}>404</Typography>
            <Typography {...subtitle}>Page Not Found</Typography>
            <Button {...btn}>go home</Button>
        </Box>
    )
}

export default NotFound