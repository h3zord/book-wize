import Image from 'next/image'
import { IReadings } from '@/fetch/readings'
import { LastReadingCard, LastReadingInformation } from './styles'
import { distanceToNow } from '@/utils/distanceToNow'
import { SummaryBook } from '../summary-book/styles'
import { Rating } from '../rating'

interface IReadingsCardProps {
  reading: IReadings
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
            <Rating value={3} readOnly />
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
