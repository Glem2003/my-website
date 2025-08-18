export const getResponsiveValue = ({
    isMobile,
    isTablet,
    original,
    tabletValue,
    mobileValue
}: {
    isMobile?: boolean,
    isTablet?: boolean,
    original: string | number,
    tabletValue?: string | number,
    mobileValue?: string | number
}) => {

    if (isTablet && !isMobile) {
        return tabletValue
    } else if (isMobile) {
        return mobileValue
    } else {
        return original
    }

}