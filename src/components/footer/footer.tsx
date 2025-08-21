// component
import {
    Box,
    Container,
    Typography,
    Stack,
} from "@mui/material"

// style
import {
    footer,
    footerContainer,
    footerStack,
    footerText
} from "./footer.style"

// type
import { FooterType } from "./footer.type"

// hooks
import useBreakPoint from "../../hook/useBreakPoint"

// utils
import { getResponsiveValue } from "../../utils/getResponsiveValue"

const Footer: React.FC<FooterType> = (props) => {

    const { isMobile } = useBreakPoint()

    const { text } = props

    return (
        <Box {...footer}>
            <Container {...footerContainer}>
                <Stack
                    {...footerStack}
                    direction={
                        getResponsiveValue({
                            isMobile,
                            mobileValue: 'column',
                            original: footerStack.direction
                        }) as 'column' | 'row'
                    }
                    spacing={
                        getResponsiveValue({
                            isMobile,
                            mobileValue: 1,
                            original: footerStack.spacing
                        })
                    }
                >
                    {text && text.map((item, index) => {
                        return (
                            <Typography
                                {...footerText}
                                key={index}
                                fontSize={
                                    getResponsiveValue({
                                        isMobile,
                                        mobileValue: 16,
                                        original: footerText.fontSize
                                    })
                                }
                            >
                                {item}
                            </Typography>
                        )
                    })}
                </Stack>
            </Container>
        </Box>
    )
}

export default Footer