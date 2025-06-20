// hook
import { useTranslation } from 'react-i18next';
import useBreakPoint from '../hook/useBreakPoint';

// data
import projectContent from '../data/project';

// component
import DefaultPages from '../components/common/defaultPages/defaultPages';
import ProjectCard from '../components/common/projectCard/projectCard';
import { Box, Typography } from '@mui/material';

const ProjectsPage = () => {

    const { t } = useTranslation();
    const { isTablet, isMobile } = useBreakPoint()

    return (
        <DefaultPages>
            <>
                <Box component={'section'}>
                    <Typography variant='h3' sx={{ fontWeight: 550 }}>{t('projects')}</Typography>
                </Box>

                <Box
                    component={'main'}
                    sx={{
                        display: 'grid',
                        gridTemplateColumns:
                            isTablet && !isMobile ? 'repeat(2, 50%)' :
                                isMobile ? '100%' : 'repeat(3, calc(100% / 3))',
                        gap: '20px',
                        mt: '30px',
                        pb: '30px'
                    }}
                >
                    {projectContent && projectContent.map((item, index) => {
                        return <ProjectCard key={index} {...item} />
                    })}
                </Box>
            </>

        </DefaultPages >
    )
}

export default ProjectsPage;