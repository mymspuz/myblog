import React, {useCallback, useEffect, useState} from 'react'
import { Autocomplete, Box, Checkbox, TextField } from '@mui/material'
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank'
import CheckBoxIcon from '@mui/icons-material/CheckBox'
import {makeRemoteTags} from "../../../tags";

type TItem = {
    id: number
    name: string
}

type TItems = TItem[]

type TProps = {
    selected: TItems
    selectedChange: React.Dispatch<React.SetStateAction<TItems>>
    errorState: (error: string | null) => void
    isError: boolean
}

const BlogTags: React.FC<TProps> = ({ selected, selectedChange, errorState, isError }: TProps) => {
    const icon = <CheckBoxOutlineBlankIcon fontSize="small" />
    const checkedIcon = <CheckBoxIcon fontSize="small" />

    const [tags, setTags] = useState<TItems>([])
    const remoteTags = makeRemoteTags()

    const handleSetError = useCallback((error: string) => {
        errorState(error)
    }, [errorState])

    const handleInputChange = useCallback((value: TItems) => {
        selectedChange(value)
    }, [selectedChange])

    const handleTagsCheck = (checked: boolean, tag: TItem): void => {
        if (checked) {
            handleInputChange([...selected, tag])
        } else {
            handleInputChange(selected.filter(t => t.id !== tag.id))
        }
    }

    useEffect(() => {
        remoteTags
            .get()
            .then(data => setTags(data))
            .catch(e => handleSetError(e.message))
    }, [])

    return (
        tags &&
        <Box component={'div'}>
            <Autocomplete

                multiple
                id="checkboxes-tags"
                options={tags}
                value={selected}
                onChange={(event, newValue) => handleInputChange(newValue)}
                disableCloseOnSelect
                isOptionEqualToValue={(option, value) => option.name === value.name}
                getOptionLabel={(option: {id: number, name: string}) => option.name}
                renderOption={(props: any, option: {id: number, name: string}, { selected }: { selected: boolean }) => (
                    <li {...props}>
                        <Checkbox
                            icon={icon}
                            checkedIcon={checkedIcon}
                            style={{ marginRight: 8 }}
                            checked={selected}
                            onChange={(e) => handleTagsCheck(e.target.checked, option)}
                        />
                        {option.name}
                    </li>
                )}
                sx={{ margin: '24px 0px 0px' }}
                renderInput={(params: any) => (
                    <TextField error={isError} {...params} label="Tags" placeholder="Tags" />
                )}
            />
        </Box>
    )
}

export default BlogTags