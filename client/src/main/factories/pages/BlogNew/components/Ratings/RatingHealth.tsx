import React, { useCallback } from 'react'
import { Rating, styled, Typography } from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'

type TProps = {
    rating: number
    changeRating: (value: number) => void
}

const RaitingHealth: React.FC<TProps> = ({ rating, changeRating }: TProps) => {
    const StyledRating = styled(Rating)({
        '& .MuiRating-iconFilled': {
            color: '#ff6d75',
        },
        '& .MuiRating-iconHover': {
            color: '#ff3d47',
        },
    })

    const handleChange = useCallback((newValue: number) => {
        changeRating(newValue)
    }, [changeRating])

    return (
        <>
            <Typography component="legend">Rating Health</Typography>
            <StyledRating
                name="rating-health"
                defaultValue={0}
                size={'large'}
                icon={<FavoriteIcon fontSize="inherit" />}
                emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
                value={rating}
                onChange={(event, value) => handleChange(value ? value : 0)}
            />
        </>
    )
}

export default RaitingHealth