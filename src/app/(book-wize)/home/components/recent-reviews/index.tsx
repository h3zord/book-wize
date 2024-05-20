import { fetchRatings } from '@/fetch/ratings'
import { RecentReviewContainer, RecentReviewContent } from './styles'
import { ReviewCard } from './review-card'

export async function RecentReviews() {
  const recentUniqueBookRatings = await fetchRatings()

  return (
    <RecentReviewContainer>
      <p>Avaliações mais recentes</p>

      <RecentReviewContent>
        {!!recentUniqueBookRatings.length &&
          recentUniqueBookRatings.map((rating) => (
            <ReviewCard rating={rating} key={rating.id} />
          ))}
      </RecentReviewContent>
    </RecentReviewContainer>
  )
}
