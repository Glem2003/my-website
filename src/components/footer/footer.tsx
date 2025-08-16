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

const Footer: React.FC<FooterType> = (props) => {

    const { text } = props

    return (
        <Box {...footer}>
            <Container {...footerContainer}>
                <Stack {...footerStack}>
                    {text && text.map((item, index) => {
                        return (
                            <Typography {...footerText} key={index}>
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