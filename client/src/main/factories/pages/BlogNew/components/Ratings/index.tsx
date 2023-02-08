import { Box } from '@mui/material'
import React from 'react'

import RaitingHealth from './RatingHealth'
import RaitingDay from './RaitingDay'

type TProps = {
    ratingHealth: number
    ratingDay: number
    changeRatingHealth: (value: number) => void
    changeRatingDay: (value: number) => void
}

const Raitings: React.FC<TProps> = ({ ratingHealth, ratingDay, changeRatingHealth, changeRatingDay }: TProps) => {
    return (
        <Box
            sx={{
                '& > legend': { marginTop: '24px' },
            }}
        >
            <RaitingHealth rating={ratingHealth} changeRating={changeRatingHealth} />
            <RaitingDay rating={ratingDay} changeRating={changeRatingDay} />
        </Box>
    )
}

export default Raitings