export const header = {
    sx: { backgroundColor: 'secondary.main' },
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
}

export const headerBox = {
    display: 'flex',
    gap: 4
}

export const headerTitle = {
    variant: "h4" as const,
    fontWeight: 700
}

export const content = {
    sx: {
        backgroundColor: 'secondary.main',
        display: 'flex',
    }
}

export const text = {
    fontWeight: 700
}

export const useLibIcon = {
    size: "large" as const,
    sx: {
        cursor: 'default',
        ':hover': {
            backgroundColor: 'transparent'
        }
    }
}