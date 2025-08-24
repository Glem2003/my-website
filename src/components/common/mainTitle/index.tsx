// component
import {
    Box,
    Typography,
} from "@mui/material"

// type
import { MainTitleProps } from './type';

// style
import { header, headerTitle, headerSubtitle } from './style'

// hooks
import useBreakPoint from "../../../hook/useBreakPoint"

// utils
import { getResponsiveValue } from "../../../utils/getResponsiveValue";

const MainTitle: React.FC<MainTitleProps> = (props) => {

    const { isMobile, isTablet } = useBreakPoint()

    const { title, subtitle } = props

    return (
        <Box
            {...header}
            pt={
                getResponsiveValue({
                    isMobile,
                    isTablet,
                    original: header.pt,
                    tabletValue: 3,
                    mobileValue: 2
                })
            }
            pb={
                getResponsiveValue({
                    isMobile,
                    isTablet,
                    original: header.pb,
                    tabletValue: 3,
                    mobileValue: 2
                })
            }
        >
            <Typography
                {...headerTitle}
                fontSize={
                    getResponsiveValue({
                        isMobile,
                        isTablet,
                        original: headerTitle.fontSize,
                        tabletValue: 100,
                        mobileValue: 45
                    })
                }
                lineHeight={
                    getResponsiveValue({
                        isMobile,
                        isTablet,
                        original: headerTitle.lineHeight,
                        tabletValue: '100px',
                        mobileValue: '45px'
                    })
                }
            >
                {title.toLocaleUpperCase()}
            </Typography>
            {subtitle && (
                <Typography
                    {...headerSubtitle}
                    mt={getResponsiveValue({
                        isMobile,
                        isTablet,
                        original: headerSubtitle.mt,
                        tabletValue: 3,
                        mobileValue: 2
                    })}
                >
                    {subtitle.toLocaleUpperCase()}
                </Typography>
            )}
        </Box>
    )
}

export default MainTitle