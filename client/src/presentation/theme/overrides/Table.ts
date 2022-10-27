const Table = (theme: any): any => {
    return {
        MuiTableCell: {
            styleOverrides: {
                head: {
                    color: theme.palette.text.secondary,
                    backgroundColor: theme.palette.background.neutral,
                },
            },
        },
    }
}

export default Table