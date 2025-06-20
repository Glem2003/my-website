// icon
import { FaEye } from "../../../assets/icon/index";

// components
import { Box } from "@mui/material";

// style
import { ShowMoreContainerStyle, ShowMoreSvgStyle } from "./showMoreContainerStyle";

const ShowMoreContainer = () => {
    return (
        <Box sx={ShowMoreContainerStyle}>
            <FaEye style={ShowMoreSvgStyle} />
        </Box>
    )
}

export default ShowMoreContainer