// components
import {
    Box,
    ListItemText,
    LinearProgress,
} from '@mui/material';

// style
import { linearProgress, valueStyle } from './style';

// type
import { LinearProgressWithLabelType } from './type';

const LinearProgressWithLabel: React.FC<LinearProgressWithLabelType> = (props) => {

    const {
        name,
        value,
        fullWidth = false
    } = props

    return (
        <Box width={fullWidth ? '100%' : 'max-content'}>
            <Box display={'flex'}>
                <ListItemText>{name}</ListItemText>
                <ListItemText {...valueStyle}>
                    {`${value} %`}
                </ListItemText>
            </Box>
            <LinearProgress
                value={value}
                {...linearProgress}
            />
        </Box>
    )
}

export default LinearProgressWithLabel