// hook
import useBreakPoint from '../hook/useBreakPoint';

// data
import projectContent from '../data/project';

// component
import DefaultPages from '../components/common/defaultPages/defaultPages';
import ProjectCard from '../components/common/projectCard/projectCard';
import { Box } from '@mui/material';

const ProjectsPage = () => {

    const { isTablet, isMobile } = useBreakPoint()

    return (
        <DefaultPages title='projects' subtitle='organized content strategy'>
            <>
                <Box
                    component={'main'}
                    sx={{
                        display: 'grid',
                        gridTemplateColumns:
                            isTablet && !isMobile ? 'repeat(2, 50%)' :
                                isMobile ? '100%' : 'repeat(3, calc(97% / 3))',
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