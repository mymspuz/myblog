import React from 'react'
import { styled } from '@mui/material/styles'
import { Autocomplete, InputAdornment, Popper, TextField } from '@mui/material'

import { Iconify } from 'presentation/components'

const StyledPopper = styled((props) => <Popper placement="bottom-start" open={false} />)({
    width: '280px !important',
})

type BlogPostsSearchProps = {
    posts: any[]
}

const BlogPostsSearch: React.FC<BlogPostsSearchProps> = ({ posts }: BlogPostsSearchProps) => {
    return (
        <Autocomplete
            sx={{ width: 280 }}
            autoHighlight
            popupIcon={null}
            PopperComponent={StyledPopper}
            options={posts}
            getOptionLabel={(post) => post.title}
            isOptionEqualToValue={(option, value) => option.id === value.id}
            renderInput={(params) => (
                <TextField
                    {...params}
                    placeholder="Search post..."
                    InputProps={{
                        ...params.InputProps,
                        startAdornment: (
                            <InputAdornment position="start">
                                <Iconify icon={'eva:search-fill'} sx={{ ml: 1, width: 20, height: 20, color: 'text.disabled' }} width={20} />
                            </InputAdornment>
                        ),
                    }}
                />
            )}
        />
    )
}

export default BlogPostsSearch