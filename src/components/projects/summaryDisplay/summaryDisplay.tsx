// components
import { Box, Typography } from '@mui/material';

// type
import { SummaryDisplayType } from './summaryDisplay.type';

// style
import { summaryDisplay, summaryTitle } from './summaryDisplay.style';

const SummaryDisplay: React.FC<SummaryDisplayType> = (props) => {

    const { value, title } = props

    return (
        <Box {...summaryDisplay}>
            <Typography {...summaryTitle} >
                {value}
            </Typography>
            <Typography >{title.toLocaleUpperCase()}</Typography>
        </Box>
    )
}

export default SummaryDisplay