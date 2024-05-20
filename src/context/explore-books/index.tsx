'use client'

import { IBooksWithAvgRating, fetchBooks } from '@/fetch/books'
import { IRatingFindByBookId, fetchRatingsByBookId } from '@/fetch/ratings'
import { fetchReadings } from '@/fetch/readings'
import { parseCookies } from 'nookies'
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useCallback,
  useEffect,
  useState,
} from 'react'

interface IExploreBooksContext {
  books: IBooksWithAvgRating[]
  ratings: IRatingFindByBookId[]
  readBookIds: string[]
  selectedCategory: string
  setBooks: Dispatch<SetStateAction<IBooksWithAvgRating[]>>
  setReadBookIds: Dispatch<SetStateAction<string[]>>
  setSelectedCategory: Dispatch<SetStateAction<string>>
  getAllBooks: () => Promise<void>
  getAllRatings: (book: string) => Promise<void>
  getUserReadBookIds: (userId: string) => Promise<void>
}

interface IBooksContextProvider {
  children: ReactNode
}

export const ExploreBooksContext = createContext({} as IExploreBooksContext)

export function ExploreBooksContextProvider({
  children,
}: IBooksContextProvider) {
  const [books, setBooks] = useState<IBooksWithAvgRating[]>([])

  const [ratings, setRatings] = useState([] as IRatingFindByBookId[])

  const [readBookIds, setReadBookIds] = useState([] as string[])

  const [selectedCategory, setSelectedCategory] = useState(
    'no category selected',
  )

  async function getAllBooks() {
    const booksList = await fetchBooks()

    setBooks(booksList)
  }

  async function getUserReadBookIds(userId: string) {
    const readingsList = await fetchReadings(userId)

    const bookIdListFromReadings = readingsList?.map(
      (reading) => reading.book_id,
    )

    setReadBookIds(bookIdListFromReadings)
  }

  const getAllRatings = useCallback(
    async function (bookId: string) {
      const ratingsList = await fetchRatingsByBookId(bookId)
      setRatings(ratingsList)
    },
    [setRatings],
  )

  useEffect(() => {
    getAllBooks()

    const { userId } = parseCookies()

    if (userId) getUserReadBookIds(userId)
  }, [])

  return (
    <ExploreBooksContext.Provider
      value={{
        books,
        ratings,
        readBookIds,
        selectedCategory,
        setBooks,
        setReadBookIds,
        setSelectedCategory,
        getAllBooks,
        getAllRatings,
        getUserReadBookIds,
      }}
    >
      {children}
    </ExploreBooksContext.Provider>
  )
}
