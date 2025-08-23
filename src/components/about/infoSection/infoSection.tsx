// components
import {
    Typography,
    Box,
    Button,
    IconButton,
    List,
    ListItem,
    ListItemText,
} from '@mui/material';
import InfoPanel from '../../common/infoPanel/infoPanel';

// type
import { TypographyVariant } from '@mui/material';

// icon
import {
    MdOutlineMailOutline,
    RiMapPinLine,
    TbBrandGithubFilled,
    FaLinkedinIn,
    GoPerson
} from '../../../assets/icon/index'

// style
import {
    section,
    info,
    imagesBox,
    personImg,
    title,
    contact,
    contactHeaderTitle,
    contactBtn
} from './infoSection.style'

// hooks
import useBreakPoint from '../../../hook/useBreakPoint';
import { useTranslation } from 'react-i18next';

// utils
import { getResponsiveValue } from '../../../utils/getResponsiveValue';

const InfoSection = () => {

    const { t } = useTranslation()
    const { isMobile, isTablet } = useBreakPoint()

    return (
        <Box {...section}>
            <Box {...info}>
                <Box {...imagesBox}>
                    <GoPerson {...personImg} />
                </Box>
                <Typography
                    {...title}
                    variant={
                        getResponsiveValue({
                            isMobile,
                            isTablet,
                            tabletValue: 'h4' as const,
                            mobileValue: 'h5' as const,
                            original: title.variant
                        }) as TypographyVariant}
                >
                    Hi, I'm Glem
                </Typography>
                <Typography variant='h6'>
                    {t('frontend_developer')}
                </Typography>
                <Typography variant='body1' textAlign={{ xs: 'center', md: 'left' }}>
                    {t('about_info')}
                </Typography>
                <Button
                    size='large'
                    variant='contained'
                    startIcon={<MdOutlineMailOutline />}
                    href='mailto:glem920813@gmail.com'
                >
                    {t('get_in_touch')}
                </Button>
            </Box>
            <Box {...contact}>
                <InfoPanel
                    sx={{ width: '100%' }}
                    header={
                        <Typography
                            {...contactHeaderTitle}
                            fontSize={isMobile ? 16 : contactHeaderTitle.fontSize}
                        >
                            {t('contact_Information')}
                        </Typography>
                    }
                >
                    <List>
                        <ListItem sx={{ gap: 2 }}>
                            <Box sx={{ display: 'grid', placeContent: 'center' }}>
                                <RiMapPinLine style={{ transform: 'scale(1.5)' }} />
                            </Box>
                            <ListItemText>Taoyuan City, Taiwan</ListItemText>
                        </ListItem>
                        <ListItem sx={{ gap: 2 }}>
                            <Box sx={{ display: 'grid', placeContent: 'center' }}>
                                <MdOutlineMailOutline style={{ transform: 'scale(1.5)' }} />
                            </Box>
                            <ListItemText>glem920813 @gmail.com</ListItemText>
                        </ListItem>
                    </List>
                </InfoPanel>

                <InfoPanel
                    sx={{ width: '100%' }}
                    header={
                        <Typography
                            {...contactHeaderTitle}
                            fontSize={isMobile ? 16 : contactHeaderTitle.fontSize}
                        >
                            {t('find_me_online')}
                        </Typography>
                    }
                >
                    <Box display={'flex'} gap={2} p={1}>
                        <IconButton
                            href='https://github.com/Glem2003'
                            {...contactBtn}
                        >
                            <TbBrandGithubFilled />
                        </IconButton>
                        <IconButton
                            href='https://www.linkedin.com/in/glem2003'
                            {...contactBtn}
                        >
                            <FaLinkedinIn />
                        </IconButton>
                    </Box>
                </InfoPanel>
            </Box>
        </Box >
    )
}

export default InfoSection