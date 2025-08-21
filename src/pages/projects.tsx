// component
import {
    Box,
    ButtonGroup,
    IconButton,
    Grid,
    List,
} from '@mui/material';
import DefaultPages from '../components/common/defaultPages/defaultPages';
import SummaryDisplay from '../components/projects/summaryDisplay/summaryDisplay';
import ProjectCard from '../components/projects/projectCard/projectCard';
import ProjectContent from '../components/projects/projectContent/projectContent';
import ProjectLists from '../components/projects/projectLists/projectLists';

// hook
import { useTranslation } from 'react-i18next';
import useBreakPoint from '../hook/useBreakPoint';
import useProjectInfo from '../hook/useProjectInfo';
import useProjectDataType from '../hook/useProjectDataType';

// icon
import { FaList, FaTable } from '../assets/icon/index'

// data
import projectData from '../data/project';

// style
import { section, table } from './style/projects.style';

// utils
import { sumDiffMonths } from '../utils/diffMonths';

const ProjectsPage = () => {

    const {
        handleMore,
        handleOpen,
        handleClose,
        isOpen,
        isData
    } = useProjectInfo()

    const { isDataType, handleChange } = useProjectDataType()

    const { isMobile } = useBreakPoint()
    const { t } = useTranslation()

    return (
        <DefaultPages title={t('projects')} subtitle={t('organized_content_strategy')}>
            <Box {...section} flexDirection={isMobile ? 'column' : 'row'} >
                <SummaryDisplay
                    value={projectData.length}
                    title={t('total_projects')}
                />
                <SummaryDisplay
                    value={sumDiffMonths(projectData)}
                    title={t('months_active')}
                />
                <SummaryDisplay
                    value={sumDiffMonths(projectData) / projectData.length}
                    title={t('avg/month')}
                    decimals={1}
                />
            </Box>

            <Box border={'4px solid black'} component={'section'}>
                <Box {...table}>
                    <ButtonGroup sx={{ gap: 1 }}>
                        <IconButton
                            size='large'
                            onClick={() => handleChange('list')}
                            disabled={isDataType === 'list' ? true : false}
                        >
                            <FaList
                                color={isDataType === 'list' ? 'gray' : 'white'}
                                aria-label='list'
                            />
                        </IconButton>
                        <IconButton
                            size='large'
                            onClick={() => handleChange('table')}
                            disabled={isDataType === 'table' ? true : false}
                        >
                            <FaTable
                                color={isDataType === 'table' ? 'gray' : 'white'}
                                aria-label='table'
                            />
                        </IconButton>
                    </ButtonGroup>
                </Box>

                <Grid container size={12} spacing={2} p={2}>
                    {isDataType === 'list' ? (
                        <List
                            sx={{
                                width: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: 1
                            }}>
                            {projectData.map((item, index) => {
                                return (
                                    <ProjectLists
                                        {...item}
                                        key={index}
                                        title={item.titleText}
                                        onClick={() => {
                                            handleOpen()
                                            handleMore(item)
                                        }}
                                    />
                                )
                            })}
                        </List>
                    ) : (
                        <>
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
                            })
                            }
                        </>
                    )}
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