// hook
import { useTranslation } from 'react-i18next';

// components
import {
    Grid,
    Typography,
    List,
    ListItem,
} from '@mui/material';
import DefaultPages from '../components/common/defaultPages/defaultPages';
import InfoSection from '../components/about/infoSection/infoSection';
import InfoPanel from '../components/common/infoPanel/infoPanel';
import LinearProgressWithLabel from '../components/about/LinearProgressWithLabel/linearProgressWithLabel';

// data
import { skillsData } from '../data/skillsData';

const AboutPage = () => {

    const { t } = useTranslation();

    return (
        <DefaultPages title={t('about')} subtitle={t('raw_information')}>

            <InfoSection />

            <Grid container mt={6} spacing={4}>
                <Grid size={{ xs: 12, md: 6 }} border={'1px solid red'}>
                    <InfoPanel
                        header={
                            <Typography p={1} pl={2} variant='h6' fontWeight={700}>Technical Skills</Typography>
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

                <Grid size={{ xs: 12, md: 6 }} border={'1px solid red'}>
                    <InfoPanel
                        header={
                            <Typography p={1} pl={2} variant='h6' fontWeight={700}>Experience</Typography>
                        }
                    >
                        content
                    </InfoPanel>
                </Grid>

            </Grid>

        </DefaultPages >
    )
}

export default AboutPage;