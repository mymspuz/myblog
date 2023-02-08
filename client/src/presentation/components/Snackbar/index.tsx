import React from 'react'
import { Snackbar, Alert, AlertColor } from '@mui/material'

type MUISnackbarProps = {
    color: AlertColor
    content: string
    isOpen?: boolean
}

const MUISnackbar: React.FC<MUISnackbarProps> = ({ color, content, isOpen }: MUISnackbarProps) => {
    const [open, setOpen] = React.useState(isOpen)
    console.log('open', open)

    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return
        }
        setOpen(false)
    }

    return (
        <Snackbar
            open={open}
            autoHideDuration={6000}
            onClose={handleClose}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        >
            <Alert onClose={handleClose} severity={color} sx={{ width: '100%' }}>
                {content}
            </Alert>
        </Snackbar>
    )
}

export default MUISnackbar