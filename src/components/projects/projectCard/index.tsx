// components
import {
    Box,
    Typography,
    Card,
    CardHeader,
    CardContent,
    CardMedia,
    CardActions,
    IconButton
} from '@mui/material';

// type
import { projectCardProps } from "./type";

// icon
import { IoIosMore } from '../../../assets/icon/index'

// style
import { imageBox, imgStyle, content, title, buttonArea } from './style'

const ProjectCard: React.FC<projectCardProps> = (props) => {

    const {
        type,
        img,
        imgText,
        titleText,
        date,
        onClick
    } = props

    return (
        <Card>
            <CardHeader title={type.toLocaleUpperCase()} />
            <CardMedia>
                <Box {...imageBox}>
                    <img
                        src={img}
                        alt={imgText}
                        {...imgStyle}
                    />
                </Box>
            </CardMedia>
            <CardContent {...content}>
                <Typography>
                    {date.length <= 1 ? `${date[0]}` : `${date[0]} - ${date[1]}`}
                </Typography>
                <Typography {...title}>
                    {titleText}
                </Typography>
            </CardContent>
            <CardActions {...buttonArea}>
                <IconButton color='primary'>
                    <IoIosMore onClick={onClick} />
                </IconButton>
            </CardActions>
        </Card >
    )
}

export default ProjectCard