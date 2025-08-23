export const section = {
    component: 'section',
    border: '4px solid black',
    display: 'flex',
    flexDirection: { xs: 'column', md: 'row' } as const,
    p: 4,
    gap: 4,
}

export const info = {
    flex: 1,
    display: 'flex',
    flexDirection: 'column' as const,
    gap: 2,
    alignItems: { xs: 'center', md: 'flex-start' },
}

export const imagesBox = {
    height: 150, width: 150,
}

export const personImg = {
    style: { width: '100%', height: '100%' }
}

export const title = {
    variant: 'h3' as const, fontWeight: 700
}

export const contact = {
    flex: 1,
    display: 'flex',
    flexDirection: 'column' as const,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 2
}

export const contactHeaderTitle = {
    fontSize: 18, fontWeight: 600, p: 2
}

export const contactBtn = {
    target: '_blank',
    color: 'primary' as const,
    sx: {
        '&:hover': {
            backgroundColor: 'transparent'
        }
    }
}