// components
import { Box } from '@mui/material';

// style
import { infoPanel, infoPanelHeader } from './infoPanel.style'

// type
import { infoPanelType } from './infoPanel.type'

const InfoPanel: React.FC<infoPanelType> = (props) => {

    const {
        header,
        children,
        sx,
        headerJustifyContent
    } = props

    return (
        <Box {...infoPanel} sx={sx}>
            <Box
                {...infoPanelHeader}
                justifyContent={headerJustifyContent}
            >
                {header}
            </Box>
            <Box>{children}</Box>
        </Box>
    )
}

export default InfoPanel