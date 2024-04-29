import { fetchRatings } from '@/fetch/ratings'
import { RecentReviewContainer, RecentReviewContent } from './styles'
import { ReviewCard } from './review-card'

export async function RecentReviews() {
  const { ratings } = await fetchRatings()

  return (
    <RecentReviewContainer>
      <p>Avaliações mais recentes</p>

      <RecentReviewContent>
        {ratings?.map((rating) => (
          <ReviewCard rating={rating} key={rating.id} />
        ))}
      </RecentReviewContent>
    </RecentReviewContainer>
  )
}
