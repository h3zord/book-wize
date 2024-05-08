import Image from 'next/image'
import { IBooksWithAvgRating } from '@/fetch/books'
import { PopularBookCard, PopularBookInformation } from './styles'
import { Rating } from '../../../../../components/rating'

interface IPopularBooksCardProps {
  book: IBooksWithAvgRating
}

export function PopularCard({ book }: IPopularBooksCardProps) {
  return (
    <PopularBookCard>
      <PopularBookInformation>
        <Image
          src={book.cover_url}
          width={64}
          height={94}
          alt="Cover popular book"
        />

        <div>
          <div>
            <h4>{book.name}</h4>
            <p>{book.author}</p>
          </div>

          <Rating value={book.avgRating} readOnly />
        </div>
      </PopularBookInformation>
    </PopularBookCard>
  )
}
