// icon
import { MdArrowOutward } from '../assets/icon/index';

// hook
import { useTranslation } from 'react-i18next';
import useBreakPoint from '../hook/useBreakPoint';

// component
import DefaultPages from '../components/common/defaultPages/defaultPages';
import { Button, Typography, Container, Box } from '@mui/material';

const AboutPage = () => {

    const { isMobile } = useBreakPoint()
    const { t } = useTranslation();

    return (
        <DefaultPages title={t('about')} subtitle={t('raw_information')}>
            <Container
                component={'section'}
            >
                <Typography
                    variant={!isMobile ? 'h2' : 'h4'}
                    sx={{ fontWeight: 550, mb: 1 }}
                >
                    {t('hi')}
                </Typography>
                <Box sx={{ width: '70%' }}>
                    <Typography
                        variant={!isMobile ? 'h4' : 'h5'}
                        sx={{ fontWeight: 550, mb: 1 }}
                    >
                        {t('mySelf')}
                    </Typography>
                    <Typography
                        variant='h6'
                    >
                        {t('myEnglishName...')}
                    </Typography>
                </Box>

                <Box component={'div'} sx={{
                    p: '20px 0',
                    display: 'flex',
                    gap: '20px',
                    flexDirection: !isMobile ? 'row' : 'column',
                    alignItems: !isMobile ? 'center' : 'start'
                }}>
                    <Button
                        variant="contained"
                        endIcon={<MdArrowOutward />}
                        color='warning'
                        href='mailto:glem920813@gmail.com'
                    >
                        {t('contactMe')}
                    </Button>

                    <Button
                        variant="outlined"
                        color='secondary'
                        disabled
                    >
                        {t('serve')}
                    </Button>
                </Box>

            </Container>
        </DefaultPages >
    )
}

export default AboutPage;