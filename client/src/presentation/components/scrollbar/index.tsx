import { memo } from 'react'
import { Box } from '@mui/material'

import { StyledRootScrollbar, StyledScrollbar } from './styles'

type ScrollbarProps = {
    sx: object
    children: any
}

const Scrollbar = (props: ScrollbarProps) => {
    const userAgent = typeof navigator === 'undefined' ? 'SSR' : navigator.userAgent

    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent)

    if (isMobile) {
        return (
            <Box sx={{ overflowX: 'auto', ...props.sx }}>
                {props.children}
            </Box>
        )
    }

    return (
        <StyledRootScrollbar>
            <StyledScrollbar timeout={500} clickOnTrack={false} sx={props.sx}>
                {props.children}
            </StyledScrollbar>
        </StyledRootScrollbar>
    )
}

export default memo(Scrollbar)
