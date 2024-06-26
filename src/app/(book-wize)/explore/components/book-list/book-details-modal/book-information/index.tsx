'use client'

import Image from 'next/image'
import { Rating } from '@/app/components/rating'
import { IBooksWithAvgRating, ICategory } from '@/fetch/books'
import { Checkbox } from '@mui/material'
import { ChangeEvent, useContext, useEffect, useState } from 'react'
import { checkIfBookWasRead } from '@/utils/checkIfBookWasRead'
import { ExploreBooksContext } from '@/context/explore-books'
import { createReading, deleteReading } from '@/fetch/readings'
import { useSession } from 'next-auth/react'
import { getBookAvgRating } from '@/utils/getBookAvgRating'
import { BookOpen, BookmarkSimple } from '@phosphor-icons/react'
import {
  BookInformationsContainer,
  BookInformationsContent,
  BookStatsAndDetails,
} from './styles'

interface IBookInformationsProps {
  book: IBooksWithAvgRating
}

export function BookInformations({ book }: IBookInformationsProps) {
  const [checkedRead, setCheckedRead] = useState(false)

  const { ratings, getAllRatings, readBookIds, getUserReadBookIds } =
    useContext(ExploreBooksContext)

  const { data: session, status } = useSession()

  const userId = session?.user.id

  const isAuthenticated = status === 'authenticated'

  const avgRating = getBookAvgRating(ratings)

  useEffect(() => {
    getAllRatings(book.id)

    if (userId) {
      const wasRead = checkIfBookWasRead(book.id, readBookIds)

      setCheckedRead(wasRead)
    }
  }, [getAllRatings, book.id, readBookIds, userId])

  function mapCategories(categories: ICategory[]) {
    const categoryList = categories.map(({ category }) => category.name)

    const formattedCategories = categoryList.join(', ')

    return formattedCategories
  }

  async function handleCheckChange(event: ChangeEvent<HTMLInputElement>) {
    setCheckedRead(event.target.checked)

    if (event.target.checked) {
      await createReading({
        userId,
        bookId: book.id,
      })
    } else {
      await deleteReading({
        userId,
        bookId: book.id,
      })
    }

    if (userId) await getUserReadBookIds(userId)
  }

  return (
    <BookInformationsContainer>
      <BookInformationsContent>
        <Image src={book.cover_url} width={172} height={242} alt="Cover book" />

        <div>
          <div>
            <h4>{book.name}</h4>
            <p>{book.author}</p>
          </div>

          <div>
            <Rating value={avgRating} size="large" readOnly />

            <p>{`${ratings.length} avaliações`}</p>
          </div>
        </div>
      </BookInformationsContent>

      <BookStatsAndDetails>
        <div>
          <BookmarkSimple size={24} />

          <h4>
            <span>Categoria</span>
            {mapCategories(book.categories)}
          </h4>
        </div>

        <div>
          <BookOpen size={24} />

          <h4>
            <span>Páginas</span>
            {book.total_pages}
          </h4>
        </div>

        {isAuthenticated && (
          <label>
            <Checkbox
              checked={checkedRead}
              onChange={handleCheckChange}
              sx={{
                color: '#50B2C0',
                '&.Mui-checked': {
                  color: '#50B2C0',
                },
              }}
            />
            Lido
          </label>
        )}
      </BookStatsAndDetails>
    </BookInformationsContainer>
  )
}
