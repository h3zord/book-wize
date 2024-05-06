import Image from 'next/image'
import { AvatarAndRating } from '@/app/components/avatar-and-rating/styles'
import { RecentReviewCard, RecentReviewInformation } from './styles'
import { distanceToNow } from '@/utils/distanceToNow'
import { Rating } from '@/app/components/rating'
import { SummaryBook } from '@/app/components/summary-book/styles'
import { IRatings } from '@/fetch/ratings'

interface ReviewCardProps {
  rating: IRatings
}

export function ReviewCard({ rating }: ReviewCardProps) {
  return (
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

          <SummaryBook $lineClamp={4}>{rating.book.summary}</SummaryBook>
        </div>
      </RecentReviewInformation>
    </RecentReviewCard>
  )
}
