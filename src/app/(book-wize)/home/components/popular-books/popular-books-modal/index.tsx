'use client'

import Image from 'next/image'
import * as Dialog from '@radix-ui/react-dialog'
import { CaretRight, X } from '@phosphor-icons/react'
import { CloseButton, Content, Overlay, Title } from '../../../styles'
import { IBooks } from '@/fetch/books'
import {
  PopularBookCard,
  PopularBookContent,
  PopularBookInformation,
} from '../styles'

interface PopularBooksModalProps {
  books: IBooks[]
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
              <PopularBookCard key={book.id}>
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

                    <Image
                      src="/rating.png"
                      width={96}
                      height={16}
                      alt="test"
                    />
                  </div>
                </PopularBookInformation>
              </PopularBookCard>
            ))}
          </PopularBookContent>
        </Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
