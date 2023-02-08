import React from 'react'
import { Box, Card, CardContent, Grid, Typography } from '@mui/material'

type TProps = {
    children: React.ReactNode
}

const MainContent: React.FC<TProps> = ({ children }: TProps) => {
    return (
        <Grid item xs={12} md={8}>
            <Card sx={{ position: 'relative' }}>
                <CardContent>
                    <Box component={'div'} sx={{ display: 'flex', flexDirection: 'column', margin: '24px 0px 0px' }}>
                        <Typography variant={'subtitle2'} sx={{ color: 'rgb(99, 115, 129)', marginBottom: '12px' }}>
                            Content
                        </Typography>
                        { children }
                    </Box>
                </CardContent>
            </Card>
        </Grid>
    )
}

export default MainContent