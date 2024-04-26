'use client'

import { Rating, RatingProps, styled } from '@mui/material'

export const BookRating = styled(Rating)<RatingProps>(() => ({
  '& .MuiRating-iconEmpty, .MuiRating-iconFilled': {
    color: '#8381D9',
  },
}))
