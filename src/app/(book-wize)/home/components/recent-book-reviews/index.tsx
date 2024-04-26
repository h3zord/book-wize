import Image from 'next/image'
import { fetchRatings } from '@/fetch/ratings'
import { AvatarAndRating } from '@/app/components/avatar-and-rating/styles'
import { SummaryBook } from '@/app/components/summary-book/styles'
import { distanceToNow } from '@/utils/distanceToNow'
import {
  RecentReviewCard,
  RecentReviewContainer,
  RecentReviewContent,
  RecentReviewInformation,
} from './styles'
import { Rating } from '@/app/components/rating'

export async function RecentBookReviews() {
  const { ratings } = await fetchRatings()

  return (
    <RecentReviewContainer>
      <p>Avaliações mais recentes</p>

      <RecentReviewContent>
        {ratings?.map((rating) => (
          <RecentReviewCard key={rating.id}>
            <AvatarAndRating>
              <div>
                <Image
                  src={rating.user.image}
                  width={40}
                  height={40}
                  alt="User avatar"
                />

                <h4>
                  {rating.user.name}
                  <span>{distanceToNow(rating.created_at)}</span>
                </h4>
              </div>

              <Rating value={rating.rate} readOnly />
            </AvatarAndRating>

            <RecentReviewInformation>
              <Image
                src={rating.book.cover_url}
                height={152}
                width={108}
                alt="Book cover"
              />

              <div>
                <div>
                  <h4>{rating.book.name}</h4>
                  <p>{rating.book.author}</p>
                </div>

                <SummaryBook $lineClamp={4}>
                  <p>{rating.book.summary}</p>
                </SummaryBook>
              </div>
            </RecentReviewInformation>
          </RecentReviewCard>
        ))}
      </RecentReviewContent>
    </RecentReviewContainer>
  )
}
