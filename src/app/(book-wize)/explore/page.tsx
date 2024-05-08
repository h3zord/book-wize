'use client'

import { useEffect, useState } from 'react'
import { Binoculars } from '@phosphor-icons/react/dist/ssr/Binoculars'
import { MagnifyingGlass } from '@phosphor-icons/react/dist/ssr/MagnifyingGlass'
import { NavegationRouteTitle } from '@/app/components/navegation-route-title/styles'
import { BookCategories } from './components/book-categories'
import { BooksList } from './components/book-list'
import { ExploreContainer, MainContainer, SearchBookForm } from './styles'
import { IBooksWithAvgRating, fetchBooks } from '@/fetch/books'
import { useForm } from 'react-hook-form'
import {
  SearchInput,
  SearchInputSubmit,
} from '@/app/components/search-input/styles'

interface IFormInputs {
  searchTerm: string
}

export default function Explore() {
  const [books, setBooks] = useState([] as IBooksWithAvgRating[])
  const [selectedCategory, setSelectedCategory] = useState(
    'nenhuma categoria selecionada',
  )

  const { register, handleSubmit, reset } = useForm<IFormInputs>()

  async function getAllBooks() {
    const { books: booksList } = await fetchBooks()

    setBooks(booksList)
  }

  useEffect(() => {
    getAllBooks()
  }, [])

  async function filterBookByNameOrAuthor(searchTerm: string) {
    const filteredBooks = books.filter((book) => {
      const lowerCaseSearchTerm = searchTerm.toLowerCase()
      const lowerCaseBookName = book.name.toLowerCase()
      const lowerCaseAuthor = book.author.toLowerCase()

      const searchTermInBookName =
        lowerCaseBookName.includes(lowerCaseSearchTerm)

      const searchTermInAuthor = lowerCaseAuthor.includes(lowerCaseSearchTerm)

      return searchTermInBookName || searchTermInAuthor
    })

    setBooks(filteredBooks)
  }

  async function filterBookByCategory(searchCategory: string) {
    if (selectedCategory === searchCategory) {
      setSelectedCategory('nenhuma categoria selecionada')

      getAllBooks()
    } else {
      const { books: booksList } = await fetchBooks({
        categoryQuery: searchCategory,
      })

      setSelectedCategory(searchCategory)

      setBooks(booksList)
    }
  }

  async function onSubmit(formInputs: IFormInputs) {
    const { searchTerm } = formInputs

    setSelectedCategory('nenhuma categoria selecionada')

    if (!searchTerm.trim()) {
      getAllBooks()
    } else {
      filterBookByNameOrAuthor(searchTerm)
    }

    reset()
  }

  return (
    <ExploreContainer>
      <MainContainer>
        <NavegationRouteTitle>
          <h1>
            <Binoculars size={32} /> Explorar
          </h1>

          <SearchBookForm onSubmit={handleSubmit(onSubmit)}>
            <SearchInput
              type="text"
              placeholder="Buscar livro ou autor"
              {...register('searchTerm')}
            />

            <SearchInputSubmit type="submit">
              <MagnifyingGlass size={24} />
            </SearchInputSubmit>
          </SearchBookForm>
        </NavegationRouteTitle>

        <BookCategories
          selectedCategory={selectedCategory}
          filterBookByCategory={filterBookByCategory}
        />

        <BooksList books={books} />
      </MainContainer>
    </ExploreContainer>
  )
}
