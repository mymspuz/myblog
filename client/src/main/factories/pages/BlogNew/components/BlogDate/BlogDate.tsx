import React, { useCallback } from 'react'
import { DesktopDatePicker, MobileDatePicker } from '@mui/x-date-pickers'
import { TextField } from '@mui/material'
import dayjs, { Dayjs } from 'dayjs'

import { useResponsive } from '../../../../../../presentation/hooks'

type TProps = {
    value: Dayjs | null
    valueChange: React.Dispatch<React.SetStateAction<dayjs.Dayjs | null>>
}

const BlogDate: React.FC<TProps> = ({ value, valueChange }: TProps) => {
    const isDesktop = useResponsive('up', 'lg', 'xl')

    const handleChangeBlogDate = useCallback((newValue: Dayjs | null) => {
        valueChange(newValue)
    }, [valueChange])

    return (
        isDesktop
            ?
            <DesktopDatePicker
                label="Date post"
                inputFormat="DD.MM.YYYY"
                value={value}
                onChange={handleChangeBlogDate}
                renderInput={(params) => <TextField
                    {...params}
                    sx={{ marginTop: '24px' }}
                    fullWidth={true}
                />}
            />
            :
            <MobileDatePicker
                label="Date post"
                inputFormat="DD.MM.YYYY"
                value={value}
                onChange={handleChangeBlogDate}
                renderInput={(params) => <TextField
                    {...params}
                    sx={{ marginTop: '24px' }}
                    fullWidth={true}
                />}
            />

    )
}

export default BlogDate