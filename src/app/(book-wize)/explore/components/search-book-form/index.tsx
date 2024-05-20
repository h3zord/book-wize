'use client'

import { useForm } from 'react-hook-form'
import { SearchBookFormContainer } from './styles'
import { ExploreBooksContext } from '@/context/explore-books'
import { useContext } from 'react'
import { MagnifyingGlass } from '@phosphor-icons/react'
import {
  SearchInput,
  SearchInputSubmit,
} from '@/app/components/search-input/styles'

interface IFormInputs {
  searchTerm: string
}

export function SearchBookForm() {
  const { register, handleSubmit, reset } = useForm<IFormInputs>()

  const { books, setBooks, getAllBooks, setSelectedCategory } =
    useContext(ExploreBooksContext)

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

  async function searchBookByNameOrAuthor(formInputs: IFormInputs) {
    const { searchTerm } = formInputs

    if (!searchTerm.trim()) {
      setSelectedCategory('no category selected')

      getAllBooks()
    } else {
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
    </SearchBookFormContainer>
  )
}
