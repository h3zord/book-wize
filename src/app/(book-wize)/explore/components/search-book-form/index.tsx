'use client'

import { useForm } from 'react-hook-form'
import { SearchBookFormContainer } from './styles'
import { ExploreBooksContext } from '@/context/explore-books'
import { useContext, useEffect, useState } from 'react'
import { ArrowsCounterClockwise, MagnifyingGlass } from '@phosphor-icons/react'
import { RefreshButton } from '@/app/components/refresh-button/styles'
import { IBooksWithAvgRating, fetchBooks } from '@/fetch/books'
import {
  SearchInput,
  SearchInputSubmit,
} from '@/app/components/search-input/styles'

interface IFormInputs {
  searchTerm: string
}

export function SearchBookForm() {
  const { register, handleSubmit, reset } = useForm<IFormInputs>()

  const [allBooks, setAllBooks] = useState<IBooksWithAvgRating[]>([])

  const { books, setBooks, resetBooks } = useContext(ExploreBooksContext)

  const totalBooks = allBooks.length
  const currentBooks = books.length

  async function saveAllBooks() {
    const bookList = await fetchBooks()

    setAllBooks(bookList)
  }

  useEffect(() => {
    saveAllBooks()
  }, [])

  // Filtragem local ↓
  async function filterBookByNameOrAuthor(searchTerm: string) {
    const filteredBooks = books.filter((book) => {
      const lowerCaseSearchTerm = searchTerm.toLowerCase()

      const lowerCaseBookName = book.name.toLowerCase()
      const lowerCaseAuthorName = book.author.toLowerCase()

      const searchTermInBookName =
        lowerCaseBookName.includes(lowerCaseSearchTerm)

      const searchTermInAuthorName =
        lowerCaseAuthorName.includes(lowerCaseSearchTerm)

      return searchTermInBookName || searchTermInAuthorName
    })

    setBooks(filteredBooks)
  }

  async function searchBookByNameOrAuthor(formInputs: IFormInputs) {
    const { searchTerm } = formInputs

    if (searchTerm.trim()) {
      filterBookByNameOrAuthor(searchTerm)
    }

    reset()
  }

  return (
    <SearchBookFormContainer onSubmit={handleSubmit(searchBookByNameOrAuthor)}>
      <SearchInput
        type="text"
        placeholder="Buscar livro ou autor"
        {...register('searchTerm')}
      />

      <SearchInputSubmit type="submit">
        <MagnifyingGlass size={24} />
      </SearchInputSubmit>

      <RefreshButton
        type="button"
        onClick={resetBooks}
        disabled={currentBooks === totalBooks}
      >
        <ArrowsCounterClockwise size={24} />
      </RefreshButton>
    </SearchBookFormContainer>
  )
}
