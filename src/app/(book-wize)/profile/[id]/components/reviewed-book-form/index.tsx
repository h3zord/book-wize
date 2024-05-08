'use client'

import { ReviewedBookContainer, SearchReviewedBookForm } from './styles'
import { MagnifyingGlass } from '@phosphor-icons/react/dist/ssr/MagnifyingGlass'
import { ReviewFeed } from './review-feed'
import { useEffect, useState } from 'react'
import { IRating } from '@/fetch/user'
import { useForm } from 'react-hook-form'
import {
  SearchInput,
  SearchInputSubmit,
} from '@/app/components/search-input/styles'

interface IReviwedBookFormProps {
  userRatings: IRating[]
}

interface IFormInputs {
  searchTerm: string
}

export function ReviewedBookForm({ userRatings }: IReviwedBookFormProps) {
  const [ratings, setRatings] = useState([] as IRating[])

  const { register, handleSubmit, reset } = useForm<IFormInputs>()

  useEffect(() => {
    setRatings(userRatings)
  }, [userRatings])

  async function filterReviewByBookName(searchTerm: string) {
    const filteredReviewedBooks = ratings.filter((rating) => {
      const lowerCaseSearchTerm = searchTerm.toLowerCase()
      const lowerCaseBookName = rating.book.name.toLowerCase()

      return lowerCaseBookName.includes(lowerCaseSearchTerm)
    })

    setRatings(filteredReviewedBooks)
  }

  function onSubmit(formInputs: IFormInputs) {
    const { searchTerm } = formInputs

    if (!searchTerm.trim()) {
      setRatings(userRatings)
    } else {
      filterReviewByBookName(searchTerm)
    }

    reset()
  }

  return (
    <>
      <SearchReviewedBookForm onSubmit={handleSubmit(onSubmit)}>
        <SearchInput
          type="text"
          placeholder="Buscar livro avaliado"
          {...register('searchTerm')}
        />

        <SearchInputSubmit type="submit">
          <MagnifyingGlass size={24} />
        </SearchInputSubmit>
      </SearchReviewedBookForm>

      <ReviewedBookContainer>
        <ReviewFeed ratings={ratings} />
      </ReviewedBookContainer>
    </>
  )
}
