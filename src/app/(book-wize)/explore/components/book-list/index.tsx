'use client'

import * as Dialog from '@radix-ui/react-dialog'
import BookCard from './book-card'
import BookNotFound from '@/app/components/book-not-found'
import { BookListContainer } from './styles'
import { BookDetailsModal } from './book-details-modal'
import { useContext } from 'react'
import { ExploreBooksContext } from '@/context/explore-books'
import { checkIfBookWasRead } from '@/utils/checkIfBookWasRead'

export function BookList() {
  const { books, readBookIds } = useContext(ExploreBooksContext)

  return (
    <BookListContainer>
      {books.length ? (
        books.map((book) => (
          <Dialog.Root key={book.id}>
            <Dialog.Trigger asChild>
              <BookCard
                book={book}
                wasRead={checkIfBookWasRead(book.id, readBookIds)}
              />
            </Dialog.Trigger>

            <BookDetailsModal book={book} />
          </Dialog.Root>
        ))
      ) : (
        <BookNotFound />
      )}
    </BookListContainer>
  )
}
