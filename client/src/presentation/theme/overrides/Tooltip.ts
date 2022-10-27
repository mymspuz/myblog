const Tooltip = (theme: any): any => {
    return {
        MuiTooltip: {
            styleOverrides: {
                tooltip: {
                    backgroundColor: theme.palette.grey[800],
                },
                arrow: {
                    color: theme.palette.grey[800],
                },
            },
        },
    }
}

export default Tooltip