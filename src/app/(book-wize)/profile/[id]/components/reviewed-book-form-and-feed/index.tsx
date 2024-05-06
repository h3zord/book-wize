'use client'

import { ReviewedBookContainer, SearchReviewedBookForm } from './styles'
import { MagnifyingGlass } from '@phosphor-icons/react/dist/ssr/MagnifyingGlass'
import { ReviewFeed } from './review-feed'
import { FormEvent, useCallback, useEffect, useState } from 'react'
import { IRating, fetchUser } from '@/fetch/user'
import {
  SearchInput,
  SearchInputSubmit,
} from '@/app/components/search-input/styles'

interface IReviwedBookFormAndFeedProps {
  userId: string
}

export function ReviewedBookFormAndFeed({
  userId,
}: IReviwedBookFormAndFeedProps) {
  const [ratings, setRatings] = useState([] as IRating[])

  const fetchUserData = useCallback(async () => {
    const { userDetails } = await fetchUser({
      id: userId,
    })
    setRatings(userDetails.ratings)
  }, [userId])

  useEffect(() => {
    fetchUserData()
  }, [fetchUserData])

  async function filterReviewByBookName(searchTerm: string) {
    const filteredReviewedBooks = ratings.filter((rating) => {
      const lowerCaseSearchTerm = searchTerm.toLowerCase()
      const lowerCaseBookName = rating.book.name.toLowerCase()

      return lowerCaseBookName.includes(lowerCaseSearchTerm)
    })

    return setRatings(filteredReviewedBooks)
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)

    const searchTerm = formData.get('searchTerm') as string

    if (!searchTerm.trim()) {
      fetchUserData()
    } else {
      filterReviewByBookName(searchTerm)
    }
  }

  return (
    <>
      <SearchReviewedBookForm onSubmit={handleSubmit}>
        <SearchInput
          type="text"
          name="searchTerm"
          placeholder="Buscar livro avaliado"
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
