export const main = {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column' as const,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center' as const,
    gap: 2,
    sx: {
        backgroundColor: 'secondary.main',
    }
}

export const title = {
    variant: "h1" as const, fontWeight: 700
}

export const subtitle = {
    variant: "h3" as const, fontWeight: 700
}

export const btn = {
    size: "large" as const,
    variant: "contained" as const,
    href: `${process.env.PUBLIC_URL}/#/`
}