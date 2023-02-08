import React, {useCallback} from 'react'
import { Box, TextField } from '@mui/material'

type TProps = {
    value: string
    changeValue: (newValue: string) => void
    isError: boolean
}

const BlogTitle: React.FC<TProps> = ({ value, changeValue, isError }: TProps) => {
    const handleChange = useCallback((newValue: string) => {
        changeValue(newValue)
    }, [changeValue])

    return (
        <Box component={'div'} sx={{ display: 'flex', flexDirection: 'column' }}>
            <TextField
                error={isError}
                id="post-title"
                label="Post Title"
                variant="outlined"
                fullWidth={true}
                value={value}
                onChange={(e) => handleChange(e.target.value)}
            />
        </Box>
    )
}

export default BlogTitle