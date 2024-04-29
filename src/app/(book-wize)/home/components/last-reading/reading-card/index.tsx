import Image from 'next/image'
import { LastReadingCard, LastReadingInformation } from './styles'
import { distanceToNow } from '@/utils/distanceToNow'
import { SummaryBook } from '../../../../../components/summary-book/styles'
import { Rating } from '../../../../../components/rating'
import { IReadingsWithAvgRating } from '@/fetch/readings'

interface IReadingsCardProps {
  reading: IReadingsWithAvgRating
}

export function ReadingCard({ reading }: IReadingsCardProps) {
  return (
    <LastReadingCard>
      <LastReadingInformation>
        <Image
          src={reading.book.cover_url}
          height={152}
          width={108}
          alt="Most recent reading book cover"
        />

        <div>
          <div>
            <p>{distanceToNow(reading.created_at)}</p>
            <Rating value={reading.book.avgRating} readOnly />
          </div>

          <div>
            <h4>{reading.book.name}</h4>
            <p>{reading.book.author}</p>
          </div>

          <SummaryBook $lineClamp={2}>
            <p>{reading.book.summary}</p>
          </SummaryBook>
        </div>
      </LastReadingInformation>
    </LastReadingCard>
  )
}
