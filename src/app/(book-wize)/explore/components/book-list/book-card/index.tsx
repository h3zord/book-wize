import Image from 'next/image'
import { BookCardContent, BookCardInformation, ReadLabel } from './styles'
import { Rating } from '@/app/components/rating'
import { ForwardRefRenderFunction, forwardRef } from 'react'
import { IBooksWithAvgRating } from '@/fetch/books'

interface IBookCardProps {
  book: IBooksWithAvgRating
  wasRead: boolean
}

const BookCard: ForwardRefRenderFunction<HTMLDivElement, IBookCardProps> =
  function ({ book, wasRead, ...props }, forwardedRef) {
    return (
      <BookCardContent {...props} ref={forwardedRef}>
        <BookCardInformation>
          <Image
            src={book.cover_url}
            height={152}
            width={108}
            alt="Book cover"
          />
          <div>
            <div>
              <h4>{book.name}</h4>
              <p>{book.author}</p>
            </div>
            <Rating defaultValue={book.avgRating} readOnly />
          </div>
        </BookCardInformation>

        {wasRead && <ReadLabel>Lido</ReadLabel>}
      </BookCardContent>
    )
  }

BookCard.displayName = 'BookCardWithRef'

export default forwardRef(BookCard)
