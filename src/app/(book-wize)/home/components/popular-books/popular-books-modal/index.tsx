'use client'

import * as Dialog from '@radix-ui/react-dialog'
import { CaretRight, X } from '@phosphor-icons/react'
import { CloseButton, Content, Overlay, Title } from '../../../styles'
import { PopularBookContent } from '../styles'
import { PopularBooksCard } from '@/app/components/popular-books-card'
import { IBooksWithAvgRating } from '@/fetch/books'

interface PopularBooksModalProps {
  books: IBooksWithAvgRating[]
}

export function PopularBooksModal({ books }: PopularBooksModalProps) {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button>
          Ver todos <CaretRight size={16} />
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Overlay />

        <Content $modalWidth="30rem">
          <CloseButton>
            <X size={24} />
          </CloseButton>

          <Title>Livros populares</Title>

          <PopularBookContent>
            {books?.map((book) => (
              <PopularBooksCard key={book.id} book={book} />
            ))}
          </PopularBookContent>
        </Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
