import React, { useCallback } from 'react'
import { Rating, Typography } from '@mui/material'

type TProps = {
    rating: number
    changeRating: (value: number) => void
}

const RaitingDay: React.FC<TProps> = ({ rating, changeRating }: TProps) => {

    const handleChange = useCallback((newValue: number) => {
        changeRating(newValue)
    }, [changeRating])

    return (
        <>
            <Typography component="legend">Rating Day</Typography>
            <Rating
                name="rating-day"
                defaultValue={0}
                size={'large'}
                value={rating}
                onChange={(event, value) => handleChange(value ? value : 0)}
            />
        </>
    )
}

export default RaitingDay