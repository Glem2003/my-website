// component
import {
    Box,
    Typography,
} from "@mui/material"

// type
import { MainTitleProps } from './mainTitle.type';

// style
import { header, headerTitle, headerSubtitle } from './mainTitle.style'

const MainTitle: React.FC<MainTitleProps> = (props) => {

    const { title, subtitle } = props

    return (
        <Box {...header}>
            <Typography {...headerTitle}>
                {title.toLocaleUpperCase()}
            </Typography>
            {subtitle && (
                <Typography {...headerSubtitle}>
                    {subtitle.toLocaleUpperCase()}
                </Typography>
            )}
        </Box>
    )
}

export default MainTitle