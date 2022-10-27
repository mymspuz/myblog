import React from 'react'
import { MenuItem, TextField } from '@mui/material'

type BlogPostsSortProps = {
    options: any[]
    onSort: () => void
}

const BlogPostsSort: React.FC<BlogPostsSortProps> = ({ options, onSort }: BlogPostsSortProps) => {
    return (
        <TextField select size="small" value="latest" onChange={onSort}>
            {options.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                    {option.label}
                </MenuItem>
            ))}
        </TextField>
    )
}

export default BlogPostsSort