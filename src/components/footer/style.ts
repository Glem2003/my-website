import { Container } from "@mui/material"

export const footer = {
    component: 'footer',
    height: '80px',
    sx: { backgroundColor: 'primary.main', color: 'primary.contrastText' }
}

export const footerContainer: React.ComponentProps<typeof Container> = {
    maxWidth: false,
    sx: { height: '100%' }
}

export const footerStack = {
    direction: 'row' as const,
    spacing: 4,
    justifyContent: 'center' as const,
    alignItems: 'center' as const,
    height: '100%'
}

export const footerText = {
    fontSize: 20,
    fontWeight: 700
}