// hooks
import { useTheme } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';

const useBreakPoint = () => {
    const theme = useTheme()

    const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
    const isTablet = useMediaQuery(theme.breakpoints.down('md'))

    return { isMobile, isTablet }
}

export default useBreakPoint