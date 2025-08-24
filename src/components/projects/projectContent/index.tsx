// hooks
import { useTranslation } from "react-i18next"
import useBreakPoint from "../../../hook/useBreakPoint"

// components
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    IconButton,
    Typography,
    Box,
    Grid,
    List,
    ListItem,
    ButtonGroup,
} from "@mui/material"
import ProjectContentUse from "./projectContentUse"

// icon
import {
    AiFillCloseCircle,
    IoLink,
    IoMdCode,
} from '../../../assets/icon/index'

// type
import { projectContentType } from './type'

// style
import {
    header,
    headerBox,
    headerTitle,
    content,
    text,
} from './style'

const ProjectContent: React.FC<projectContentType> = (props) => {

    const { t } = useTranslation()
    const { isMobile } = useBreakPoint()
    const {
        open,
        onClose,
        title,
        webLink,
        codeLink,
        date,
        features,
        library,
        img,
        imgText,
        lib
    } = props

    return (
        <Dialog
            open={open}
            fullScreen
        >
            <DialogTitle {...header}>
                <Box {...headerBox}>
                    <Typography
                        {...headerTitle}
                        variant={isMobile ? 'h5' : headerTitle.variant}
                    >
                        {title}
                    </Typography>
                    <ButtonGroup>
                        <IconButton href={webLink} target="_blank">
                            <IoLink title="link" />
                        </IconButton>
                        <IconButton href={codeLink} target="_blank">
                            <IoMdCode title='code' />
                        </IconButton>
                    </ButtonGroup>
                </Box>
                <DialogActions>
                    <IconButton size={isMobile ? 'small' : 'medium'} onClick={onClose}>
                        <AiFillCloseCircle
                            color="black"
                        />
                    </IconButton>
                </DialogActions>
            </DialogTitle>
            <DialogContent {...content}>
                <Grid container width={'100%'}>
                    <Grid
                        container
                        flexDirection={'column'}
                        size={{ xs: 12, sm: 5 }}
                    >
                        <Grid size={12} height={{ xs: '100%', sm: '70%' }}>
                            <Box height={'100%'}>
                                <img
                                    src={img}
                                    alt={imgText}
                                    style={{ objectFit: 'cover', borderRadius: 8 }}
                                />
                            </Box>
                        </Grid>
                        <Grid
                            size={12}
                            display={{ xs: 'none', sm: 'block' }}
                            height={{ sm: '30%' }}
                        >
                            <Box>
                                <ProjectContentUse lib={lib || []} />
                            </Box>
                        </Grid>
                    </Grid>
                    <Grid
                        size={12}
                        display={{ xs: 'block', sm: 'none' }}
                    >
                        <Box flex={1}>
                            <ProjectContentUse lib={lib || []} />
                        </Box>
                    </Grid>
                    <Grid
                        size={{ xs: 12, sm: 7 }}
                        p={2}
                    >
                        <Box gap={2} display={'flex'} flexDirection={'column'}>
                            <Typography {...text}>
                                {t('date')}: {date.length <= 1 ? `${date[0]}` : `${date[0]} - ${date[1]}`}
                            </Typography>
                            <Box>
                                <Typography {...text}>{t('features')}: </Typography>
                                <List>
                                    {features && features.map((item, index) => {
                                        return (
                                            <ListItem key={index}>{item}</ListItem>
                                        )
                                    })}
                                </List>
                            </Box>
                            <Box>
                                <Typography {...text}>{t('library')}: </Typography>
                                <List>
                                    {library && library.map((item, index) => {
                                        return (
                                            <ListItem key={index}>{item}</ListItem>
                                        )
                                    })}
                                </List>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </DialogContent>
        </Dialog >
    )
}

export default ProjectContent