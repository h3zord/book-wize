'use client'

import Image from 'next/image'
import * as Dialog from '@radix-ui/react-dialog'
import { BookDetailsModal } from '@/app/components/book-details-modal'
import { Binoculars } from '@phosphor-icons/react/dist/ssr/Binoculars'
import { MagnifyingGlass } from '@phosphor-icons/react/dist/ssr/MagnifyingGlass'
import { NavegationRouteTitle } from '@/app/components/navegation-route-title/styles'
import {
  SearchInput,
  SearchInputSubmit,
} from '@/app/components/search-input/styles'
import {
  BookCard,
  BookCardInformation,
  BookCategoryContainer,
  BookCategoryContent,
  BookListContainer,
  ExploreContainer,
  MainContainer,
  SearchBookForm,
} from './styles'

export default function Explore() {
  return (
    <ExploreContainer>
      <MainContainer>
        <SearchBookForm>
          <NavegationRouteTitle>
            <Binoculars size={32} /> Explorar
          </NavegationRouteTitle>

          <SearchInput placeholder="Buscar livro ou autor" />
          <SearchInputSubmit type="submit">
            <MagnifyingGlass size={24} />
          </SearchInputSubmit>
        </SearchBookForm>

        <BookCategoryContainer>
          <BookCategoryContent $isSelected>Tudo</BookCategoryContent>
          <BookCategoryContent>Computação</BookCategoryContent>
          <BookCategoryContent>Educação</BookCategoryContent>
          <BookCategoryContent>Fantasia</BookCategoryContent>
          <BookCategoryContent>Ficção científica</BookCategoryContent>
          <BookCategoryContent>Horror</BookCategoryContent>
          <BookCategoryContent>HQs</BookCategoryContent>
          <BookCategoryContent>Suspense</BookCategoryContent>
        </BookCategoryContainer>

        <BookListContainer>
          <Dialog.Root>
            <Dialog.Trigger asChild>
              <BookCard>
                <BookCardInformation>
                  <Image src="/book.png" height={152} width={108} alt="test" />

                  <div>
                    <div>
                      <h4>
                        14 Hábitos de Desenvolvedores Altamente Produtivos
                      </h4>
                      <p>Zeno Rocha</p>
                    </div>

                    <Image
                      src="/rating.png"
                      width={96}
                      height={16}
                      alt="test"
                    />
                  </div>
                </BookCardInformation>
              </BookCard>
            </Dialog.Trigger>

            <BookDetailsModal />
          </Dialog.Root>
        </BookListContainer>
      </MainContainer>
    </ExploreContainer>
  )
}
