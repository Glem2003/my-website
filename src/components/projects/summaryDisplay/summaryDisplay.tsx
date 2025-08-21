// components
import { Box, Typography } from '@mui/material';

// type
import { SummaryDisplayType } from './summaryDisplay.type';

// style
import { summaryDisplay, summaryTitle } from './summaryDisplay.style';

// hooks
import useCountUp from '../../../hook/useCountUp';

const SummaryDisplay: React.FC<SummaryDisplayType> = (props) => {

    const { value, title, decimals = 0 } = props;
    
    const displayValue = useCountUp({ value, decimals })

    return (
        <Box {...summaryDisplay}>
            <Typography {...summaryTitle}>{displayValue}</Typography>
            <Typography>{title.toUpperCase()}</Typography>
        </Box>
    );
};

export default SummaryDisplay