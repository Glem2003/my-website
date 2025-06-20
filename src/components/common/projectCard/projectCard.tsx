// icon
import { MdArrowOutward } from "../../../assets/icon/index";

// components
import ShowMoreContainer from "../showMoreContainer/showMoreContainer";
import { Box, Link, Typography, Button } from '@mui/material';

// type
import { projectCardProps } from "./projectCard.type";

const ProjectCard: React.FC<projectCardProps> = (props) => {

    const {
        image,
        imagesName,
        projectLink,
        projectName,
        firstData,
        lastData
    } = props

    return (
        <Box sx={{ display: 'grid', gap: '10px' }}>
            <Box sx={{
                height: '250px',
                borderRadius: '10px',
                border: '2px dotted green',
                overflow: "hidden",
                position: 'relative'
            }}>
                <Link href={image} target='_blank'>
                    <ShowMoreContainer />
                </Link>

                <img
                    style={{ objectFit: 'cover' }}
                    src={image}
                    alt={imagesName}
                />
            </Box>

            <Typography variant='inherit' sx={{ color: 'grey' }}>{`${firstData} - ${lastData}`}</Typography>

            <Button
                href={projectLink}
                target="_blank"
                endIcon={<MdArrowOutward />}
                size='large'
                color='inherit'
                sx={{
                    width: 'max-content',
                    pl: 0
                }}
            >
                {projectName}
            </Button>
        </Box >
    )
}

export default ProjectCard