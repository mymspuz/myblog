import React, {useEffect, useState} from 'react'
import { Helmet } from 'react-helmet-async'
import {
    Alert,
    Card,
    CardContent,
    Container,
    Grid,
    Stack,
    Typography
} from '@mui/material'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
import dayjs, { Dayjs } from 'dayjs'
import { EditorState } from 'draft-js'
import { LocalizationProvider } from '@mui/x-date-pickers/'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

import { IValidation } from '../../../protocols'
import { ISignIn } from '../../../../domain/usecases'
import {
    BlogButtons,
    BlogContent,
    BlogDate,
    BlogDateCreate,
    BlogDateUpdate,
    BlogSwitch,
    BlogTags,
    BlogTitle,
    ImagesUpload
} from '../../../../main/factories/pages/BlogNew/components'
import MainContent from '../../../../main/factories/pages/BlogNew/layouts/MainContent'
import { getHtml } from '../../../../main/factories/pages/BlogNew/utils'
import Raitings from '../../../../main/factories/pages/BlogNew/components/Ratings'
import {MUISnackbar} from "../../../components";

type BlogNewProps = {
    validation: IValidation
    auth: ISignIn
}

const BlogNew: React.FC<BlogNewProps> = ({ auth, validation }: BlogNewProps) => {
    const [images, setImages] = useState<File[]>([])
    const [errorPage, setErrorPage] = useState<string | null>(null)
    const [errorTitle, setErrorTitle] = useState<boolean>(false)
    const [errorTags, setErrorTags] = useState<boolean>(false)

    const [blogTitle, setBlogTitle] = useState<string>('')

    const [editorState, setEditorState] = useState<EditorState>(EditorState.createEmpty())

    const [published, setPublished] = useState<boolean>(true)
    const [selectedTags, setSelectedTags] = useState<{ id: number, name: string }[]>([])
    const [blogDate, setBlogDate] = React.useState<Dayjs | null>(
        dayjs(Date.now()),
    )
    const [ratingHealth, setRatingHealth] = useState<number>(0)
    const [ratingDay, setRatingDay] = useState<number>(0)

    const checkType = (listFiles: File[]): boolean => {
        const errorFiles = listFiles.filter(file => file.type.indexOf('image/') === -1)
        if (errorFiles.length) {
            let error: string = 'Error type in files - '
            errorFiles.forEach(file => error += file.name + ' ')
            setErrorPage(error)
            return false
        }
        return true
    }

    const checkExists = (listFiles: File[]): boolean => {
        const errorFiles: File[] = []
        listFiles.forEach(file => {
            if (images.some(image => image.name === file.name)) {
                errorFiles.push(file)
            }
        })
        if (errorFiles.length) {
            let error: string = 'File already exists - '
            errorFiles.forEach(file => error += file.name + ' ')
            setErrorPage(error)
            return false
        }
        return true
    }

    const handleChangeFileInput = (listFiles: File[]): void => {
        if (checkType(listFiles) && checkExists(listFiles)) {
            setErrorPage(null)
            setImages(prevState => prevState.concat(listFiles))
        }
    }

    const handleClickBlogSave = () => {
        setErrorPage('')
        if (blogTitle.trim().length < 3) {
            setErrorPage('Заголовок должен содержать минимум три символа.')
            setErrorTitle(true)
            return
        }
        if (!selectedTags.length) {
            setErrorPage('Укажите как минимум один тэг.')
            setErrorTags(true)
            return
        }
        console.log('blogDate', blogDate)
        console.log('blogTitle', blogTitle)
        console.log('content', getHtml(editorState))
        console.log('published', published)
        console.log('images', images)
        console.log('tags', selectedTags)
        console.log('ratingHealth', ratingHealth)
        console.log('ratingDay', ratingDay)
    }

    const handleDelete = (chipData: File) => setImages(prevState => prevState.filter(file => file.name !== chipData.name))

    useEffect(() => {
        setErrorPage(null)
        setErrorTitle(false)
    }, [blogTitle])

    useEffect(() => {
        setErrorPage(null)
        setErrorTags(false)
    }, [selectedTags])

    return (
        <>
            <Helmet>
                <title> Blog | New Post </title>
            </Helmet>
            {errorPage && <MUISnackbar color={'error'} content={errorPage} isOpen={true} />}
            <Container>
                <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
                    <Typography variant="h4" gutterBottom>
                        Create a new post
                    </Typography>
                </Stack>
                <Grid container spacing={3}>
                    <MainContent>
                        <BlogTitle value={blogTitle} changeValue={setBlogTitle} isError={errorTitle} />
                        <BlogContent value={editorState} changeValue={setEditorState} />
                        <ImagesUpload images={images} changeFileInput={handleChangeFileInput} deleteChips={handleDelete} />
                    </MainContent>
                    <Grid item xs={12} md={4}>
                        <BlogButtons clickSave={handleClickBlogSave} />
                        <Card sx={{ position: 'relative' }}>
                            <CardContent>
                                <BlogSwitch value={published} changeValue={setPublished} />
                                <BlogTags selected={selectedTags} selectedChange={setSelectedTags} errorState={setErrorPage} isError={errorTags} />
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <BlogDate value={blogDate} valueChange={setBlogDate} />
                                    <BlogDateCreate value={dayjs(Date.now())} />
                                    <BlogDateUpdate value={dayjs(Date.now())} />
                                </LocalizationProvider>
                                <Raitings
                                    ratingHealth={ratingHealth}
                                    ratingDay={ratingDay}
                                    changeRatingHealth={setRatingHealth}
                                    changeRatingDay={setRatingDay}
                                />
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

export default BlogNew