interface IgetBookAvgRatingProps {
  rate: number
}

export function getBookAvgRating(ratings: IgetBookAvgRatingProps[]) {
  const totalRatings = ratings.length

  const sumRatings = ratings.reduce((sum, rating) => sum + rating.rate, 0)

  const avgRating = totalRatings > 0 ? sumRatings / totalRatings : 0

  return avgRating
}
