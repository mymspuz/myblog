import { alpha } from '@mui/material/styles'

const Backdrop = (theme: any): any => {
    return {
        MuiBackdrop: {
            styleOverrides: {
                root: {
                    backgroundColor: alpha(theme.palette.grey[800], 0.8),
                },
                invisible: {
                    background: 'transparent',
                },
            },
        },
    }
}

export default Backdrop