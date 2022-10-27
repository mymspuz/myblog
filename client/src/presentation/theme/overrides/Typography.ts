const Typography = (theme: any): any => {
    return {
        MuiTypography: {
            styleOverrides: {
                paragraph: {
                    marginBottom: theme.spacing(2),
                },
                gutterBottom: {
                    marginBottom: theme.spacing(1),
                },
            },
        },
    }
}

export default Typography