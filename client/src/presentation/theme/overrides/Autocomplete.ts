const Autocomplete = (theme: any): any => {
    return {
        MuiAutocomplete: {
            styleOverrides: {
                paper: {
                    boxShadow: theme.customShadows.z20,
                },
            },
        },
    }
}

export default Autocomplete