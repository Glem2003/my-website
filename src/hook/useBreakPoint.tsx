// hooks
import { useTheme } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';

const useBreakPoint = () => {
    const theme = useTheme()

    const isMobile = useMediaQuery(theme.breakpoints.down('sm')) // 600
    const isTablet = useMediaQuery(theme.breakpoints.down('md')) // 900
    
    /* extra-small
   *    xs: 0,
   *    // small
   *    sm: 600,
   *    // medium
   *    md: 900,
   *    // large
   *    lg: 1200,
   *    // extra-large
   *    xl: 1536,
   */

    return { isMobile, isTablet }
}

export default useBreakPoint