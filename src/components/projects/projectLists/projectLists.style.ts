export const listItem = {
    sx: {
        display: { xs: 'block', sm: 'flex' },
        backgroundColor: 'white',
        borderRadius: 2
    }
}

export const listItemType = {
    sx: { flex: '0 0 150px' }
}

export const listItemTitle = {
    fontWeight: 700
}

export const listItemDate = {
    sx: { textAlign: { xs: 'start', sm: 'end' } }
}

export const listItemButton = {
    sx: {
        flex: .1,
        display: 'flex',
        justifyContent: 'center',
        '&:hover': {
            backgroundColor: 'transparent'
        }
    }
}