import { RatingProps } from '@mui/material'
import { BookRating } from './styles'

export function Rating(RatingProps: RatingProps) {
  return <BookRating {...RatingProps} precision={0.5} />
}
