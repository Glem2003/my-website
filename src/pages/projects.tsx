// hook
import { useTranslation } from 'react-i18next';
import useBreakPoint from '../hook/useBreakPoint';
import useProjectInfo from '../hook/useProjectInfo';

// component
import {
    Box,
    ButtonGroup,
    IconButton,
    Grid
} from '@mui/material';
import DefaultPages from '../components/common/defaultPages/defaultPages';
import SummaryDisplay from '../components/projects/summaryDisplay/summaryDisplay';
import ProjectCard from '../components/projects/projectCard/projectCard';
import ProjectContent from '../components/projects/projectContent/projectContent';

// icon
import { FaList, FaTable } from '../assets/icon/index'

// data
import projectData from '../data/project';

// style
import { section, table } from './projects.style';

const ProjectsPage = () => {

    const {
        handleMore,
        handleOpen,
        handleClose,
        isOpen,
        isData
    } = useProjectInfo()
    const { isMobile } = useBreakPoint()
    const { t } = useTranslation()

    return (
        <DefaultPages title={t('projects')} subtitle={t('organized_content_strategy')}>
            <Box {...section} flexDirection={isMobile ? 'column' : 'row'} >
                <SummaryDisplay value={projectData.length} title={t('total_projects')} />
                <SummaryDisplay value={21} title={t('months_active')} />
                <SummaryDisplay value={5.3} title={t('avg/month')} />
            </Box>

            <Box border={'4px solid black'} component={'section'}>
                <Box {...table}>
                    <ButtonGroup sx={{ gap: 1 }}>
                        <IconButton size='large'>
                            <FaList color='white' />
                        </IconButton>
                        <IconButton size='large'>
                            <FaTable color='white' />
                        </IconButton>
                    </ButtonGroup>
                </Box>

                <Grid container size={12} spacing={2} p={2}>
                    {projectData.map((item) => {
                        return (
                            <Grid size={{ xs: 12, sm: 6, lg: 4 }}>
                                <ProjectCard
                                    {...item}
                                    onClick={() => {
                                        handleOpen()
                                        handleMore(item)
                                    }}
                                />
                            </Grid>
                        )
                    })}
                </Grid>
            </Box>

            <ProjectContent
                open={isOpen}
                onClose={() => handleClose()}
                {...isData}
                title={isData.titleText}
            />

        </DefaultPages >
    )
}

export default ProjectsPage;