import { Dayjs } from 'dayjs'
import { DesktopDateTimePicker } from '@mui/x-date-pickers'
import { TextField} from '@mui/material'
import React from 'react'

type TProps = {
    value: Dayjs | null
}
const BlogDateCreate: React.FC<TProps> = ({ value }: TProps) => {
    return (
        <DesktopDateTimePicker
            label="Date create post"
            inputFormat="DD.MM.YYYY hh:mm"
            disabled={true}
            value={value}
            onChange={() => {}}
            renderInput={(params) => <TextField
                {...params}
                sx={{ marginTop: '24px' }}
                fullWidth={true}
            />}
        />
    )
}

export default BlogDateCreate