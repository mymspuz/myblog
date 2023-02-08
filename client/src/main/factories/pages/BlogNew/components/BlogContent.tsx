import React, { useCallback } from 'react'
import { Box } from '@mui/material'
import { Editor } from 'react-draft-wysiwyg'
import { EditorState } from 'draft-js'

type TProps = {
    value: EditorState
    changeValue: (editorState: EditorState) => void
}

const BlogContent: React.FC<TProps> = ({ value, changeValue }: TProps) => {
    const handleChange = useCallback((newValue: EditorState) => {
        changeValue(newValue)
    }, [changeValue])

    return (
        <Box
            component={'div'}
            sx={{
                margin: '8px 0px 0px',
                border: '1px solid rgba(145, 158, 171, 0.32)',
                borderRadius: '8px',
                minHeight: '400px',
                padding: '2px'
            }}
        >
            <Editor
                editorState={value}
                toolbarStyle={{ border: 'none', borderBottom: '1px solid #F1F1F1', borderRadius: '0px' }}
                wrapperClassName="wrapperClassName"
                editorClassName="editorClassName"
                onEditorStateChange={handleChange}
                toolbar={{
                    options: ['inline', 'fontSize', 'fontFamily', 'image', 'link'],
                    inline: {
                        inDropdown: false,
                        options: ['bold', 'underline', 'italic']
                    },
                    list: { inDropdown: true },
                    textAlign: { inDropdown: true },
                    link: { inDropdown: false },
                    history: { inDropdown: true },
                }}
            />
        </Box>
    )
}

export default BlogContent