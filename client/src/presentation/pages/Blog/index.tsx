import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Grid, Button, Container, Stack, Typography } from '@mui/material'
import { IValidation } from 'presentation/protocols'
import { ISignIn } from 'domain/usecases'

import { Iconify } from 'presentation/components'
import { BlogPostCard, BlogPostsSort, BlogPostsSearch } from 'presentation/sections/dashboard/blog'

const POST_TITLES = [
    'Whiteboard Templates By Industry Leaders',
    'Tesla Cybertruck-inspired camper trailer for Tesla fans who can’t just wait for the truck!',
    'Designify Agency Landing Page Design',
    '✨What is Done is Done ✨',
    'Fresh Prince',
    'Six Socks Studio',
    'vincenzo de cotiis’ crossing over showcases a research on contamination',
    'Simple, Great Looking Animations in Your Project | Video Tutorial',
    '40 Free Serif Fonts for Digital Designers',
    'Examining the Evolution of the Typical Web Design Client',
    'Katie Griffin loves making that homey art',
    'The American Dream retold through mid-century railroad graphics',
    'Illustration System Design',
    'CarZio-Delivery Driver App SignIn/SignUp',
    'How to create a client-serverless Jamstack app using Netlify, Gatsby and Fauna',
    'Tylko Organise effortlessly -3D & Motion Design',
    'RAYO ?? A expanded visual arts festival identity',
    'Anthony Burrill and Wired mag’s Andrew Diprose discuss how they made January’s Change Everything cover',
    'Inside the Mind of Samuel Day',
    'Portfolio Review: Is This Portfolio Too Creative?',
    'Akkers van Margraten',
    'Gradient Ticket icon',
    'Here’s a Dyson motorcycle concept that doesn’t ‘suck’!',
    'How to Animate a SVG with border-image',
]

const posts = [...Array(23)].map((_, index) => ({
    id: '00001',
    cover: `/assets/images/covers/cover_${index + 1}.jpg`,
    title: POST_TITLES[index + 1],
    createdAt: '01.01.2022',
    view: 5,
    comment: 3,
    share: 1,
    favorite: 2,
    author: {
        name: 'mspuz',
        avatarUrl: `/assets/images/avatars/avatar_${index + 1}.jpg`,
    },
}))

const SORT_OPTIONS = [
    { value: 'latest', label: 'Latest' },
    { value: 'popular', label: 'Popular' },
    { value: 'oldest', label: 'Oldest' },
]

type BlogProps = {
    validation: IValidation
    auth: ISignIn
}

const Blog: React.FC<BlogProps> = ({ validation, auth }: BlogProps) => {
    return (
        <>
            <Helmet>
                <title> Dashboard: Blog | Minimal UI </title>
            </Helmet>

            <Container>
                <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
                    <Typography variant="h4" gutterBottom>
                        Blog
                    </Typography>
                    <Button variant="contained" startIcon={<Iconify icon="eva:plus-fill" width={20} />}>
                        New Post
                    </Button>
                </Stack>

                <Stack mb={5} direction="row" alignItems="center" justifyContent="space-between">
                    <BlogPostsSearch posts={posts} />
                    <BlogPostsSort options={SORT_OPTIONS} onSort={() => console.log('sort')} />
                </Stack>

                <Grid container spacing={3}>
                    {posts.map((post, index) => (
                        <BlogPostCard key={post.id} post={post} index={index} />
                    ))}
                </Grid>
            </Container>
        </>
    )
}

export default Blog