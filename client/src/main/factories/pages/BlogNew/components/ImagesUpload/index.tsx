import React, { useRef } from 'react'
import { Box, Chip, Typography } from '@mui/material'
import { MuiFileInput } from 'mui-file-input'

import ImagesPanel from './ImagesPanel'
import ImagesPanelContent from './ImagesPanelContent'
import { BoxChipsStyled, BoxImagesPanelStyled, BoxImagesStyled } from '../styled'
import { getFileTypeColor } from '../../../../../../data/interfaces/blog'

type TProps = {
    images: File[]
    changeFileInput: (listFiles: File[]) => void
    deleteChips: (chipData: File) => void
}

const ImagesUpload: React.FC<TProps> = ({ images, changeFileInput, deleteChips }: TProps) => {
    const inputFileRef = useRef<HTMLInputElement>(null)

    const browseClick = () => {
        if (inputFileRef && inputFileRef.current) {
            inputFileRef.current.click()
        }
    }

    return (
        <Box component={'div'} sx={{ display: 'flex', flexDirection: 'column', margin: '24px 0px 0px' }}>
            <Typography variant={'subtitle2'} sx={{ color: 'rgb(99, 115, 129)' }}>
                Images
            </Typography>
            <BoxImagesStyled
                component={'div'}
                role={'presentation'}
            >
                <MuiFileInput
                    value={images}
                    onChange={changeFileInput}
                    multiple={true}
                    inputRef={inputFileRef}
                    sx={{ display: 'none' }}
                />
                <BoxImagesPanelStyled component={'div'}>
                    <ImagesPanel />
                    <ImagesPanelContent handleClick={browseClick} />
                </BoxImagesPanelStyled>
            </BoxImagesStyled>
            {images.length > 0 &&
                <BoxChipsStyled component={'div'}>
                    {images.map(image => <Chip
                        size='medium'
                        variant='outlined'
                        sx={{ margin: '10px 5px 0px 0px' }}
                        key={image.name}
                        label={image.name}
                        color={getFileTypeColor(image.type).color}
                        onDelete={() => deleteChips(image)} />
                    )}
                </BoxChipsStyled>
            }
        </Box>
    )
}

export default ImagesUpload