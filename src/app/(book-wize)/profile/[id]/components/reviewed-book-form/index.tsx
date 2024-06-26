'use client'

import { ReviewedBookContainer, SearchReviewedBookForm } from './styles'
import { ReviewFeed } from './review-feed'
import { useEffect, useState } from 'react'
import { IRating } from '@/fetch/user'
import { useForm } from 'react-hook-form'
import { ArrowsCounterClockwise, MagnifyingGlass } from '@phosphor-icons/react'
import {
  SearchInput,
  SearchInputSubmit,
} from '@/app/components/search-input/styles'
import { RefreshButton } from '@/app/components/refresh-button/styles'

interface IReviwedBookFormProps {
  userRatings: IRating[]
}

interface IFormInputs {
  searchTerm: string
}

export function ReviewedBookForm({ userRatings }: IReviwedBookFormProps) {
  const [ratings, setRatings] = useState([] as IRating[])

  const { register, handleSubmit, reset } = useForm<IFormInputs>()

  const totalRatings = userRatings.length
  const currentRatings = ratings.length

  useEffect(() => {
    setRatings(userRatings)
  }, [userRatings])

  // Filtragem local ↓
  async function filterReviewByBookName(searchTerm: string) {
    const filteredReviewedBooks = userRatings.filter((rating) => {
      const lowerCaseSearchTerm = searchTerm.toLowerCase()
      const lowerCaseBookName = rating.book.name.toLowerCase()

      return lowerCaseBookName.includes(lowerCaseSearchTerm)
    })

    setRatings(filteredReviewedBooks)
  }

  function searchReviewByBookName(formInputs: IFormInputs) {
    const { searchTerm } = formInputs

    if (searchTerm.trim()) {
      filterReviewByBookName(searchTerm)
    }

    reset()
  }

  function resetRatings() {
    setRatings(userRatings)
    reset()
  }

  return (
    <>
      <SearchReviewedBookForm onSubmit={handleSubmit(searchReviewByBookName)}>
        <SearchInput
          type="text"
          placeholder="Buscar livro avaliado"
          {...register('searchTerm')}
        />

        <SearchInputSubmit type="submit">
          <MagnifyingGlass size={24} />
        </SearchInputSubmit>

        <RefreshButton
          type="button"
          onClick={resetRatings}
          disabled={currentRatings === totalRatings}
        >
          <ArrowsCounterClockwise size={24} />
        </RefreshButton>
      </SearchReviewedBookForm>

      <ReviewedBookContainer>
        <ReviewFeed ratings={ratings} />
      </ReviewedBookContainer>
    </>
  )
}
