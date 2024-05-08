import Image from 'next/image'
import { BookCardContent, BookCardInformation } from './styles'
import { IBooksWithAvgRating } from '@/fetch/books'
import { Rating } from '@/app/components/rating'

interface IBookCard {
  book: IBooksWithAvgRating
}

export function BookCard({ book }: IBookCard) {
  return (
    <BookCardContent>
      <BookCardInformation>
        <Image src={book.cover_url} height={152} width={108} alt="Book cover" />

        <div>
          <div>
            <h4>{book.name}</h4>
            <p>{book.author}</p>
          </div>

          <Rating defaultValue={book.avgRating} readOnly />
        </div>
      </BookCardInformation>
    </BookCardContent>
  )
}
