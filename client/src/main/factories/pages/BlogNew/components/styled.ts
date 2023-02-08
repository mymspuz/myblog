import { styled } from '@mui/material/styles'
import { Box } from '@mui/material'

const BoxImagesStyled = styled(Box)({
    '&': {
        outline: 'none',
        cursor: 'pointer',
        overflow: 'hidden',
        position: 'relative',
        padding: '40px',
        borderRadius: '8px',
        transition: 'padding 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
        backgroundColor: 'rgb(244, 246, 248)',
        border: '1px dashed rgba(145, 158, 171, 0.32)',
        margin: '8px 0px 0px'
    }
})
const BoxImagesPanelStyled = styled(Box)({
    '&': {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%'
    }
})
const BoxChipsStyled = styled(Box)({
    '&': {
        marginY: '8px',
        border: '1px dashed rgba(145, 158, 171, 0.32)',
        borderRadius: '8px',
        padding: '5px 20px 15px 20px',
        display: 'flex',
        justifyContent: 'flex-start',
        flexWrap: 'wrap'
    }
})

const TypographyPanelContentStyled = {
    margin: '0px 4px',
    lineHeight: '1.57143',
    fontSize: '0.875rem',
    fontFamily: '"Public Sans", sans-serif',
    fontWeight: '400',
    color: 'rgb(0, 171, 85)',
    textDecoration: 'underline'
}

export { BoxImagesStyled, BoxImagesPanelStyled, BoxChipsStyled, TypographyPanelContentStyled }