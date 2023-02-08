import React from 'react'
import { Box, Button } from '@mui/material'
import { LoadingButton } from '@mui/lab'
import CloudUploadIcon from '@mui/icons-material/CloudUpload'
import CancelIcon from '@mui/icons-material/Cancel'

type TProps = {
    clickSave: () => void
}

const BlogButtons: React.FC<TProps> = ({ clickSave }: TProps) => {
    return (
        <Box
            component={'div'}
            sx={{ display: 'flex', flexDirection: 'row', marginBottom: '24px' }}
        >
            <LoadingButton
                size={'large'}
                onClick={clickSave}
                loading={false}
                loadingPosition="start"
                startIcon={<CloudUploadIcon />}
                variant="contained"
                sx={{ color: 'white', backgroundColor: '#65C466' }}
                fullWidth={true}
            >
                <span>Save</span>
            </LoadingButton>
            <Button
                color="error"
                size={'large'}
                onClick={clickSave}
                startIcon={<CancelIcon />}
                variant="contained"
                sx={{ color: 'white', marginLeft: '12px' }}
                fullWidth={true}
            >
                <span>Close</span>
            </Button>
        </Box>
    )
}

export default BlogButtons