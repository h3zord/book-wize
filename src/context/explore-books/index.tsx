'use client'

import { IBooksWithAvgRating, fetchBooks } from '@/fetch/books'
import { IRatingFindByBookId, fetchRatingsByBookId } from '@/fetch/ratings'
import { fetchReadings } from '@/fetch/readings'
import { useSession } from 'next-auth/react'
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useEffect,
  useState,
  useCallback,
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
  resetBooks: () => void
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

  const { data: session } = useSession()

  const userId = session?.user.id

  async function getAllBooks() {
    const bookList = await fetchBooks()

    setBooks(bookList)
  }

  async function getUserReadBookIds(userId: string) {
    const readingList = await fetchReadings(userId)

    const bookIdListFromReadings = readingList?.map(
      (reading) => reading.book_id,
    )

    setReadBookIds(bookIdListFromReadings)
  }

  const getAllRatings = useCallback(
    async function (bookId: string) {
      const ratingList = await fetchRatingsByBookId(bookId)

      setRatings(ratingList)
    },
    [setRatings],
  )

  function resetBooks() {
    setSelectedCategory('no category selected')

    getAllBooks()
  }

  useEffect(() => {
    getAllBooks()

    if (userId) getUserReadBookIds(userId)
  }, [userId])

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
        resetBooks,
      }}
    >
      {children}
    </ExploreBooksContext.Provider>
  )
}
