// components
import {
    IconButton,
    Typography,
    Grid,
} from "@mui/material"

// hooks
import { useTranslation } from "react-i18next"

// data
import { lib as libData } from "../../../data/lib"

// style
import {
    text,
    useLibIcon
} from './style'

const ProjectContentUse = ({ lib }: { lib: string[] }) => {

    const { t } = useTranslation()

    return (
        <>
            <Typography mt={2} ml={2} {...text}>
                {t('use')}
            </Typography>
            <Grid container>
                {libData
                    .filter((libItem) => lib.includes(libItem.title))
                    .map((item) => (
                        <IconButton
                            {...useLibIcon}
                            key={item.title}
                            title={item.title}
                        >
                            {item.icon}
                        </IconButton>
                    ))
                }
            </Grid>
        </>
    )
}

export default ProjectContentUse