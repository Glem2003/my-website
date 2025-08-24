export const linearProgress = {
    variant: "determinate" as const,
    sx: {
        '&.MuiLinearProgress-root': {
            backgroundColor: 'transparent',
            borderRadius: '4px'
        },
        '.MuiLinearProgress-bar1': {
            borderRadius: 'inherit'
        }
    }
}

export const valueStyle = {
    sx: { textAlign: 'end' }
}