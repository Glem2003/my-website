// hook
import { useTranslation } from 'react-i18next';
import useBreakPoint from '../../../hook/useBreakPoint';

// icon
import { CgMenuHotdog } from "../../../assets/icon/index";

// component
import Header from "../../header/header";
import { Box, Typography } from '@mui/material';

// type
import { defaultPagesProps } from './defaultPages.type'

// data
import { navItems } from '../../../data/navItems';
import { footerData } from '../../../data/footerData';

const DefaultPages: React.FC<defaultPagesProps> = (props) => {

    const { isMobile } = useBreakPoint()

    const { t } = useTranslation()
    const { children } = props

    return (
        <>
            <Header
                lists={navItems}
                headerMenuIcon={<CgMenuHotdog />}
            />
            {children}
            <Box
                component={'footer'}
                sx={{
                    p: '15px 0',
                    textAlign: 'center',
                    display: 'flex',
                    justifyContent: 'center',
                    gap: !isMobile ? '10px' : '5px',
                    flexDirection: 'row',
                }}
            >
                {footerData.map((item, index) => {
                    return (
                        <Typography
                            key={index}
                            variant={!isMobile ? 'h6' : 'subtitle2'}
                        >
                            {t(item)}
                        </Typography>
                    )
                })}
            </Box>
        </>
    )
}

export default DefaultPages