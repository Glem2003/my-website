// components
import {
    IconButton,
    Typography,
    ButtonGroup,
} from "@mui/material"

// hooks
import { useTranslation } from "react-i18next"

// data
import { lib as libData } from "../../../data/lib"

// style
import {
    text,
    useLibIcon
} from './projectContent.style'

const ProjectContentUse = ({ lib }: { lib: string[] }) => {

    const { t } = useTranslation()

    console.log(libData.filter((libItem) => lib.includes(libItem.title)))

    return (
        <>
            <Typography mt={2} ml={2} {...text}>
                {t('use')}
            </Typography>
            <ButtonGroup sx={{ gap: 2, mt: 2 }}>
                {libData
                    .filter((libItem) => lib.includes(libItem.title))
                    .map((item) => (
                        <IconButton key={item.title} {...useLibIcon} title={item.title}>
                            {item.icon}
                        </IconButton>
                    ))
                }
            </ButtonGroup>
        </>
    )
}

export default ProjectContentUse