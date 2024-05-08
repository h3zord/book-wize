import Image from 'next/image'
import { distanceToNow } from '@/utils/distanceToNow'
import { Rating } from '@/app/components/rating'
import { SummaryBook } from '@/app/components/summary-book/styles'
import { IRating } from '@/fetch/user'
import {
  ReviewedBookCard,
  ReviewedBookContent,
  ReviewedBookInformation,
} from './styles'

interface IReviewFeedProps {
  ratings: IRating[]
}

export function ReviewFeed({ ratings }: IReviewFeedProps) {
  return ratings?.map((rating) => (
    <ReviewedBookContent key={rating.id}>
      <span>{distanceToNow(rating.created_at)}</span>

      <ReviewedBookCard>
        <ReviewedBookInformation>
          <Image
            src={rating.book.cover_url}
            width={98}
            height={134}
            alt="Book cover"
          />

          <div>
            <div>
              <h3>{rating.book.name}</h3>
              <p>{rating.book.author}</p>
            </div>

            <Rating value={rating.rate} readOnly />
          </div>
        </ReviewedBookInformation>

        <SummaryBook $lineClamp={7}>{rating.book.summary}</SummaryBook>
      </ReviewedBookCard>
    </ReviewedBookContent>
  ))
}
