import { Container } from "@mui/material"

export const header = {
    component: 'header',
    borderBottom: '4px solid black',
    height: '210px'
}

export const headerContainer: React.ComponentProps<typeof Container> = {
    maxWidth: false,
    sx: {
        display: 'flex',
        justifyContent: 'space-between',
        height: '100%',
        p: 2,
    }
}

export const headerTitle = {
    height: '100%',
    display: 'flex',
    flexDirection: 'column' as const,
    justifyContent: 'space-between'
}

export const headerTitleText = {
    variant: "h2" as const,
    fontWeight: 700,
    fontFamily: "JetBrains Mono, monospace",
    lineHeight: '60px'
}

export const headerTitleBtns = {
    direction: 'row' as const,
    spacing: 2
}

export const headerTitleBtn = {
    sx: {
        ':hover': {
            color: 'primary.main'
        }
    }
}

export const headerMenu = {
    component: 'nav',
    height: 'maxContent',
    display: 'flex',
    alignItems: 'flex-end',
    gap: 2
}

export const headerMenuBtns = {
    direction: 'column' as const,
    spacing: 1
}