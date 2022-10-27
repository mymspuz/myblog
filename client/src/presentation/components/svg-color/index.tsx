import { forwardRef } from 'react'
import { Box } from '@mui/material'

type SvgColorProps = {
    src: string,
    sx: object,
    color?: string
}

const SvgColor = forwardRef((props: SvgColorProps, ref) => (
    <Box
        color={props.color}
        component="span"
        className="svg-color"
        ref={ref}
        sx={{
            width: 24,
            height: 24,
            display: 'inline-block',
            bgcolor: 'currentColor',
            mask: `url(${props.src}) no-repeat center / contain`,
            WebkitMask: `url(${props.src}) no-repeat center / contain`,
            ...props.sx,
        }}
    />
))

export default SvgColor