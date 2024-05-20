'use client'

import * as Dialog from '@radix-ui/react-dialog'
import { CaretRight, X } from '@phosphor-icons/react'
import { PopularBookContent } from '../styles'
import { IBooksWithAvgRating } from '@/fetch/books'
import { PopularCard } from '../popular-card'
import {
  CloseButton,
  Content,
  Overlay,
  SeeAllButton,
  Title,
} from '../../../styles'

interface PopularBooksModalProps {
  books: IBooksWithAvgRating[]
}

export function PopularBooksModal({ books }: PopularBooksModalProps) {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <SeeAllButton>
          Ver todos <CaretRight size={16} />
        </SeeAllButton>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Overlay />

        <Content $modalWidth="30rem">
          <CloseButton>
            <X size={24} />
          </CloseButton>

          <Title>Livros populares</Title>

          <PopularBookContent>
            {books?.map((book) => <PopularCard key={book.id} book={book} />)}
          </PopularBookContent>
        </Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
