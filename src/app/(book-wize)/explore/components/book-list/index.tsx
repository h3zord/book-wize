import * as Dialog from '@radix-ui/react-dialog'
import { BookListContainer } from './styles'
import { BookDetailsModal } from './book-details-modal'
import { BookCard } from './book-card'
import { IBooksWithAvgRating } from '@/fetch/books'

interface IBooksList {
  books: IBooksWithAvgRating[]
}

export function BooksList({ books }: IBooksList) {
  return (
    <BookListContainer>
      {books.map((book) => (
        <Dialog.Root key={book.id}>
          <Dialog.Trigger asChild>
            <BookCard book={book} />
          </Dialog.Trigger>

          <BookDetailsModal />
        </Dialog.Root>
      ))}
    </BookListContainer>
  )
}
