import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import { Breakpoint } from "@mui/material"

export const useResponsive = (query: string, start: Breakpoint, end: Breakpoint) => {
    const theme = useTheme()

    const mediaUp = useMediaQuery(theme.breakpoints.up(start))

    const mediaDown = useMediaQuery(theme.breakpoints.down(start))

    const mediaBetween = useMediaQuery(theme.breakpoints.between(start, end))

    const mediaOnly = useMediaQuery(theme.breakpoints.only(start))

    switch (query) {
        case 'up':
            return mediaUp
        case 'down':
            return mediaDown
        case 'between':
            return mediaBetween
        default:
            return mediaOnly
    }
}

export const useWidth = () => {
    const theme = useTheme()

    const keys = [...theme.breakpoints.keys].reverse()

    return (
        keys.reduce((output: any, key: Breakpoint) => {
            // eslint-disable-next-line react-hooks/rules-of-hooks
            const matches = useMediaQuery(theme.breakpoints.up(key))

            return !output && matches ? key : output
        }, null) || 'xs'
    )
}