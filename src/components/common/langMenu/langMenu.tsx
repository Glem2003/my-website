// component
import {
    Dialog,
    DialogTitle,
    DialogContent,
    Button,
    Grid
} from "@mui/material"

// hooks
import { useTranslation } from 'react-i18next';

// data
import { langMenu } from "../../../data/langMenu"

// type
import { langMenuType } from "./langMenu.type"

const LangMenu: React.FC<langMenuType> = (props) => {

    const { t } = useTranslation()
    const { open, onClose, handleActive, isLoad, isLang } = props

    return (
        <Dialog
            open={open}
            onClose={onClose}
            fullWidth
            maxWidth='md'
        >
            <DialogTitle>{t('language_settings_module')}</DialogTitle>
            <DialogContent>
                <Grid container spacing={2}>
                    {langMenu && langMenu.map((item) => {
                        return (
                            <Button
                                key={item.text}
                                color="secondary"
                                variant="contained"
                                onClick={() => handleActive(item.value)}
                                loading={isLoad}
                                disabled={item.value === isLang}
                            >
                                {item.text}
                            </Button>
                        )
                    })}
                </Grid>
            </DialogContent>
        </Dialog>
    )
}

export default LangMenu