import React, {useCallback} from 'react'
import { Box, FormControlLabel, styled, Switch, SwitchProps } from '@mui/material'

type TProps = {
    value: boolean
    changeValue: (newValue: boolean) => void
}

const BlogSwitch: React.FC<TProps> = ({ value, changeValue }: TProps) => {
    const IOSSwitch = styled((props: SwitchProps) => (
        <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
    ))(({ theme }) => ({
        width: 42,
        height: 26,
        padding: 0,
        '& .MuiSwitch-switchBase': {
            padding: 0,
            margin: 2,
            transitionDuration: '300ms',
            '&.Mui-checked': {
                transform: 'translateX(16px)',
                color: '#fff',
                '& + .MuiSwitch-track': {
                    backgroundColor: theme.palette.mode === 'dark' ? '#2ECA45' : '#65C466',
                    opacity: 1,
                    border: 0,
                },
                '&.Mui-disabled + .MuiSwitch-track': {
                    opacity: 0.5,
                },
            },
            '&.Mui-focusVisible .MuiSwitch-thumb': {
                color: '#33cf4d',
                border: '6px solid #fff',
            },
            '&.Mui-disabled .MuiSwitch-thumb': {
                color:
                    theme.palette.mode === 'light'
                        ? theme.palette.grey[100]
                        : theme.palette.grey[600],
            },
            '&.Mui-disabled + .MuiSwitch-track': {
                opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
            },
        },
        '& .MuiSwitch-thumb': {
            boxSizing: 'border-box',
            width: 22,
            height: 22,
        },
        '& .MuiSwitch-track': {
            borderRadius: 26 / 2,
            backgroundColor: theme.palette.mode === 'light' ? '#E9E9EA' : '#39393D',
            opacity: 1,
            transition: theme.transitions.create(['background-color'], {
                duration: 500,
            }),
        },
    }))

    const handleChange = useCallback((newValue: boolean) => {
        changeValue(newValue)
    }, [changeValue])

    return (
        <Box
            component={'div'}
            sx={{
                display: 'flex',
                flexDirection: 'column'
            }}
        >
            <FormControlLabel
                label="Publish"
                control={<IOSSwitch
                    checked={value}
                    onChange={(e) => handleChange(e.target.checked)}
                    sx={{ m: 1 }}
                />}
                sx={{
                    display: 'inline-flex',
                    flexDirection: 'row-reverse',
                    justifyContent: 'space-between',
                    margin: '0px'
                }}
            />
        </Box>
    )
}

export default BlogSwitch