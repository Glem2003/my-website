// hook
import { useTranslation } from 'react-i18next';

// components
import {
    Grid,
    Typography,
    List,
    ListItem,
    Divider,
} from '@mui/material';
import DefaultPages from '../components/common/defaultPages';
import InfoSection from '../components/about/infoSection';
import InfoPanel from '../components/common/infoPanel';
import LinearProgressWithLabel from '../components/about/linearProgressWithLabel';
import ExperienceInfo from '../components/about/experienceInfo';

// data
import { skillsData } from '../data/skillsData';
import { experienceData } from '../data/experienceData';

const AboutPage = () => {

    const { t } = useTranslation();

    return (
        <DefaultPages title={t('about')} subtitle={t('raw_information')}>

            <InfoSection />

            <Grid container mt={6} spacing={4}>
                <Grid size={{ xs: 12, md: 6 }} border={'1px solid red'}>
                    <InfoPanel
                        header={
                            <Typography p={1} pl={2} variant='h6' fontWeight={700}>
                                {t('technical_skills')}
                            </Typography>
                        }
                    >
                        <List>
                            {skillsData.map((item) => {
                                return (
                                    <ListItem>
                                        <LinearProgressWithLabel
                                            fullWidth
                                            name={item.name}
                                            value={item.value}
                                        />
                                    </ListItem>
                                )
                            })}
                        </List>
                    </InfoPanel>
                </Grid>

                <Grid size={{ xs: 12, md: 6 }}>
                    <InfoPanel
                        header={
                            <Typography p={1} pl={2} variant='h6' fontWeight={700}>
                                {t('experience')}
                            </Typography>
                        }
                    >
                        <List>
                            {experienceData.map((item, index) => {
                                return (
                                    <>
                                        <ExperienceInfo
                                            key={index}
                                            {...item}
                                        />
                                        {experienceData.length > index + 1 && (
                                            <Divider
                                                variant='middle'
                                                sx={{ opacity: 0.7, backgroundColor: 'black' }}
                                            />
                                        )}
                                    </>
                                )
                            })}
                        </List>
                    </InfoPanel>
                </Grid>

            </Grid>

        </DefaultPages >
    )
}

export default AboutPage;