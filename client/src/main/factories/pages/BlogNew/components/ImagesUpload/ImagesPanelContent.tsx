import React from 'react'
import { Box, Typography } from '@mui/material'

import { TypographyPanelContentStyled } from '../styled'

type TProps = {
    handleClick: () => void
}

const ImagesPanelContent: React.FC<TProps> = ({ handleClick }: TProps) => {
    return (
        <Box component={'div'} sx={{ margin: '0px 0px 0px 40px' }}>
            <Typography variant={'h5'} gutterBottom={true}>
                Drop or Select file
            </Typography>
            <Typography component={'p'} variant={'body2'}>
                Drop files here or click
                <Typography
                    sx={TypographyPanelContentStyled}
                    component={'span'}
                    variant={'body2'}
                    onClick={handleClick}
                >
                    browse
                </Typography>
                thorough your machine
            </Typography>
        </Box>
    )
}

export default ImagesPanelContent