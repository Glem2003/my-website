// hook
import { useTranslation } from 'react-i18next';
import useActive from '../hook/useActive';
import useBreakPoint from '../hook/useBreakPoint';

// component
import DefaultPages from '../components/common/defaultPages/defaultPages';
import List from '../components/resume/list/list';
import ExperienceCard from '../components/resume/experience/experience';
import ToolsOfChoice from '../components/resume/toolsOfChoice/toolsOfChoice';
import Education from '../components/resume/education/education';
import Hobbies from '../components/resume/hobbies/hobbies';
import { Box, Typography } from '@mui/material';

// data
import { lists } from '../data/resume/lists';
import { experience } from '../data/resume/experience';
import { toolsOfChoice } from '../data/resume/toolsOfChoice';
import { education } from '../data/resume/education';
import { hobbies } from '../data/resume/hobbies';

const ResumePage = () => {

    const { t } = useTranslation()

    const { isMobile } = useBreakPoint()

    const { active, handleClick } = useActive()

    return (
        <DefaultPages>

            <Box sx={{
                display: 'grid',
                gridTemplateColumns: !isMobile ? '200px 1fr' : '1fr',
                gridTemplateAreas: !isMobile ? `
                    'head head'
                    'slide main'
                    'slide main'
                `:
                    `
                    'head' 
                    'slide' 
                    'main'
                `
            }}>
                <Box
                    component={'section'}
                    sx={{
                        gridArea: 'head',
                        mb: '30px'
                    }}
                >
                    <Typography variant='h2' sx={{ fontWeight: 550 }}>{t('resume')}</Typography>
                </Box>

                <Box sx={{
                    gridArea: 'slide',
                    borderBottom: isMobile ? '1px solid black' : 'unset',
                    mb: isMobile ? '30px' : 'unset'
                }}>
                    <ul style={{
                        display: isMobile ? 'grid' : 'block',
                        placeItems: isMobile ? 'center' : 'unset',
                        gridTemplateColumns: '1fr 1fr'
                    }}>
                        {lists.map((item) => (
                            <List
                                listText={t(item.text)}
                                listClass={active === item.text ? 'list--active' : ''}
                                listHandle={() => handleClick(item.text)}
                            />
                        ))}
                    </ul>
                </Box>

                <Box
                    component={'main'}
                    sx={{
                        gridArea: 'main',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '30px',
                        pb: '30px'
                    }}
                >
                    {active === 'experience' && experience.map(({
                        firstDate,
                        lastDate,
                        title,
                        content
                    }, index) => (
                        <ExperienceCard
                            key={index}
                            firstDate={firstDate}
                            lastDate={lastDate}
                            title={t(title)}
                            content={content}
                        />
                    ))}

                    {active === 'toolsOfChoice' && toolsOfChoice.map(({
                        subtitle,
                        title
                    }, index) => (
                        <ToolsOfChoice
                            key={index}
                            subtitle={t(subtitle)}
                            title={title}
                        />
                    ))}

                    {active === 'education' && education.map(({
                        firstDate,
                        lastDate,
                        title,
                        content
                    }, index) => (
                        <Education
                            key={index}
                            firstDate={firstDate}
                            lastDate={lastDate}
                            title={t(title)}
                            content={t(content)}
                        />
                    ))}

                    {active === 'hobbies' && hobbies.map(({
                        subtitle,
                        title
                    }, index) => (
                        <Hobbies
                            key={index}
                            subtitle={t(subtitle)}
                            title={t(title)}
                        />
                    ))}
                </Box>

            </Box>

        </DefaultPages >
    )
}

export default ResumePage;