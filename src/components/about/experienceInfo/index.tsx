// components
import {
    Typography,
    ListItem,
    Box,
} from '@mui/material';

// style
import {
    experienceInfo,
    title as tc,
    subtitle,
    business as bs
} from './style'

// type
import { ExperienceInfoType } from './type'

// hooks
import { useTranslation } from 'react-i18next';

const ExperienceInfo: React.FC<ExperienceInfoType> = (props) => {

    const { t } = useTranslation()

    const {
        title,
        business,
        date,
        content
    } = props

    return (
        <ListItem {...experienceInfo} >
            <Typography {...tc}>{t(title)}</Typography>
            <Box {...subtitle}>
                <Typography {...bs}>{business && t(business)}</Typography>
                <Typography>{`${date[0]} - ${date[1] ? date[1] : t('present')}`}</Typography>
            </Box>
            <Typography>
                {t(content)}
            </Typography>
        </ListItem>
    )
}

export default ExperienceInfo